const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const WebpackRemoteTypesPlugin = require("webpack-remote-types-plugin").default;
const { MFLiveReloadPlugin } = require("@module-federation/fmr");

const Dotenv = require("dotenv-webpack");
const deps = require("./package.json").dependencies;

const name = "scottbenton_micro_frontend_host";
const PORT = 8080;

const remoteModules = {
  home_page: "home_page@[window.home_page_url]/remoteEntry.js",
  dev_tools: "dev_tools@[window.dev_tools_url]/remoteEntry.js",
};

const deployedRemoteModules = {
  home_page: "home_page@https://apps-homepage.web.app/remoteEntry.js",
  // dev_tools: "dev_tools@http://localhost:3001/remoteEntry.js",
};

const cacheBustingRemoteModules = {};
Object.keys(remoteModules).forEach((moduleKey) => {
  cacheBustingRemoteModules[moduleKey] = `${
    remoteModules[moduleKey]
  }?${new Date().getTime()}`;
});

module.exports = (_, argv) => ({
  output: {
    publicPath: "auto",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: PORT,
    historyApiFallback: true,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: name,
      filename: "remoteEntry.js",
      remotes: cacheBustingRemoteModules,
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    ...(argv.mode === "development"
      ? [
          new MFLiveReloadPlugin({
            port: PORT, // the port your app runs on
            container: "scottbenton_micro_frontend_host", // the name of your app, must be unique
            standalone: true, // false uses chrome extention
          }),
        ]
      : []),
    new WebpackRemoteTypesPlugin({
      remotes: deployedRemoteModules,
      outputDir: "types", // supports [name] as the remote name
      remoteFileName: "[name]-dts.tgz", // default filename is [name]-dts.tgz where [name] is the remote name, for example, `app` with the above setup
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv(),
  ],
});

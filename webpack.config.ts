import { constructBaseWebpackConfig } from "@scottbenton/apps-build";
import { ModuleScope } from "@scottbenton/apps-config";
import { dependencies } from "./package.json";

const config = constructBaseWebpackConfig({
  name: "scottbenton_micro_frontend_host",
  dependencies,
  modules: [
    ModuleScope.Authentication,
    ModuleScope.DeveloperTools,
    ModuleScope.HomePage,
  ],
});

export default config;
// module.exports = () => ({
//   output: {
//     publicPath: "/",
//   },

//   resolve: {
//     extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
//   },

//   devServer: {
//     port: PORT,
//     historyApiFallback: true,
//     hot: true,
//   },

//   module: {
//     rules: [
//       {
//         test: /\.m?js/,
//         type: "javascript/auto",
//         resolve: {
//           fullySpecified: false,
//         },
//       },
//       {
//         test: /\.(css|s[ac]ss)$/i,
//         use: ["style-loader", "css-loader", "postcss-loader"],
//       },
//       {
//         test: /\.(ts|tsx|js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//         },
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         exclude: /node_modules/,
//         type: "asset/resource",
//       },
//       { test: /\.json$/, type: "json" },
//     ],
//   },

//   plugins: [
//     new ModuleFederationPlugin({
//       name: name,
//       filename: "remoteEntry.js",
//       remotes: remoteModules,
//       exposes: {},
//       shared: {
//         ...deps,
//         react: {
//           singleton: true,
//           requiredVersion: deps.react,
//         },
//         "react-dom": {
//           singleton: true,
//           requiredVersion: deps["react-dom"],
//         },
//         "react-router-dom": {
//           singleton: true,
//           requiredVersion: deps["react-router-dom"],
//         },
//         "react-helmet-async": {
//           singleton: true,
//           requiredVersion: deps["react-helmet-async"],
//         },
//       },
//     }),
//     new WebpackRemoteTypesPlugin({
//       remotes: deployedRemoteModules,
//       outputDir: "types", // supports [name] as the remote name
//       remoteFileName: "[name]-dts.tgz", // default filename is [name]-dts.tgz where [name] is the remote name, for example, `app` with the above setup
//     }),
//     new ExternalTemplateRemotesPlugin(),
//     new HtmlWebPackPlugin({
//       template: "./src/index.html",
//     }),
//     new Dotenv(),
//   ],
// });

import { Helmet } from '@modern-js/runtime/head';
import './index.css';
import DevTools from '@/components/DevTools';

const Index = () => {
  return (
    <div className="container-box">
      <Helmet>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
        />
      </Helmet>
      <main>
        <DevTools />
        <p className="name">Welcome to Modern.js</p>
      </main>
    </div>
  );
};

export default Index;

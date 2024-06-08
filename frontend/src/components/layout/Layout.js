import React from "react";
import Footer from "./footer";
import Header from "./header";
import { Helmet} from "react-helmet";
import { Toaster } from "react-hot-toast"; 

const Layout = ({ children, title, description, keywords }) => {
    return (
      <div id = "mydo">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <title>{title}</title>
        </Helmet>
        <Header />
        {children}
        <Toaster />
        <Footer />
      </div>
    );
  };
  
  Layout.defaultProps = {
    title: "Grocery store - shop now",
    description: "mern stack project",
    keywords: "mern,react,node,mongodb",
  };
  
  export default Layout;
import React from "react"

import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center w-4/5 md:w-2/3">
        <h2 className="text-4xl md:text-7xl text-center font-bold font-decoration">Tell us your idea; We'll make your website or web application a reality.</h2>
        <h3 className="text-lg md:text-2xl text-center font-bold mt-8 w-4/5 md:w-2/3">With over 5 years of experience making professional products with modern technology, we'll get it done.</h3>
        <a className="px-6 py-3 bg-black text-white font-bold uppercase flex items-center justify-center rounded-lg mt-8 hover:bg-white hover:text-black" href="mailto:me@michaelmang.dev">Let's get connected -- it's free</a>
      </div>
    </Layout>
  );
};

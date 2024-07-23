import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div
        style={{ minHeight: "20rem", position: "absolute", top: "3rem" }}
        className="row contactus "
      >
        <div className="col-md-6 ">
          <img
            src="/images/privacy.jpeg"
            alt="contactus"
            style={{ width: "100%", height: "15rem" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;

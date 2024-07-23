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
            made by prajjwal
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;

import React from "react";
import Navbar from "../components/Navbar";
import { useParams, useSearchParams } from "react-router-dom";

const ContactUs = () => {
  const { name } = useParams();

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("message"));
  return (
    <div>
      <Navbar />
      <h2>Estas en Contact {name} </h2>
      <br />  
      <h3>{searchParams.get("message")}</h3>
    </div>
  );
};

export default ContactUs;

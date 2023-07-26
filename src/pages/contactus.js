import Head from "next/head";
import Link from "next/link";
import * as React from "react";
// Google map
import { useMemo, useState } from "react";

// import {
//   GoogleMap,
//   useJsApiLoader,
//   LoadScript,
//   Marker,
// } from "@react-google-maps/api";

// mapbox
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Marker } from "react-map-gl";
import { Popup } from "react-map-gl";

// icons

import { FaDirections } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImOffice } from "react-icons/im";

// form
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TOKEN =
  "pk.eyJ1IjoibXRheXlhYm1pciIsImEiOiJjbDZuaWQ5Z3QwMTNyM2tsbGs2emtlc21uIn0.cwMj_2X3NoUdcbWnLGiG4g";

const ContactUs = () => {
  const handleClick = () => {
    window.location.href =
      "https://www.google.com/maps/dir/?api=1&destination=33.562346,73.0902707";
  };

  // Form
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation

    console.log("Sending");
    let data = {
      name,
      company,
      phone,
      email,
      message,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        setCompany("");
        setPhone("");
      }
    });
  };

  // form
  const notify = () =>
    toast("Thank you for contacting! We'll get back to you soon");

  function formSubmit(e) {
    alert("form submitted");
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    setCompany("");
    setPhone("");
  }

  // const [showPopup, setShowPopup] = useState(false);
  // const handleMarkerClick = () => {
  //   setShowPopup(true);
  // };

  // const handlePopupClose = () => {
  //   setShowPopup(false);
  // };
  // const { isLoaded, loadError } = useJsApiLoader({
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_TOKEN,
  // });
  // const containerStyle = {
  //   width: "100%",
  //   height: "100%",
  // };
  // const position = {
  //   lat: 37.772,
  //   lng: -122.214,
  // };

  // const center = {
  //   lat: 33.562603783993765,
  //   lng: 73.08981054647475,
  // };

  // const [directions, setDirections] = useState(null);

  // const directionsOptions = {
  //   destination: { lat: 33.562603783993765, lng: 73.08981054647475 }, // Destination coordinates
  //   origin: center, // Starting coordinates
  //   travelMode: "DRIVING", // Travel mode (e.g., DRIVING, WALKING)
  // };

  // const handleDirectionsResponse = (response) => {
  //   if (response !== null) {
  //     setDirections(response);
  //   }
  // };

  return (
    <>
      <Head>
        <title>jugrafiya | Contact Us</title>
      </Head>
      <section className="w-full h-full bg-[#FAF9F6] ">
        <div className="bg-[#FAF9F6] contact-form flex flex-col justify-center justify-items-center items-center pt-10">
          <h1 className="contact_heading text-left heading text-6xl md:text-4xl font-bold text-gray-600">
            Contact Us
          </h1>
          <p className="contact-para mb-7 text-gray-600 pt-3">
                If you want to get in touch, Please contact us through this form
              </p>
        </div>

        <div className="bg-[#FAF9F6] flex flex-col justify-start items-center h-fit ">
          <div className="bg-white shadow-xl  rounded px-8 pt-6 pb-4 mb-4 contact_mobile">
            <form
              method="POST"
              action="https://www.formbackend.com/forms/0f3030d8719b702f/test"
              className="space-y-8 mt-10 "
              onSubmit={handleSubmit}
            >
              
              <div>
                <div className="flex gap-5">
                  <div className="mb-2  flex-1">
                    <label
                      htmlFor="name"
                      className="block text-gray-600  text-[20px] font-medium mb-4 input_mobile"
                    >
                      Full Name
                    </label>
                    <input
                      className="w-[100%] bg-[#FAF9F6]  shadow appearance-none border rounded-[7.73462px] text-lg py-2 px-2 mb-5  text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                      id="firstname"
                      type="text"
                      name="name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      value={name}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="mb-2  flex-1">
                    <label
                      htmlFor="email"
                      className="block text-gray-600 text-[20px] font-medium mb-4 input_mobile"
                    >
                      Email
                    </label>
                    <input
                      className="w-[100%] bg-[#FAF9F6]  shadow appearance-none border rounded-[7.73462px] text-lg py-2 px-2 mb-5  text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                      id="firstname"
                      type="email"
                      name="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={email}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-5">
                  <div className="flex-1">
                    <label
                      htmlFor="company"
                      className="block text-gray-600 text-[20px] font-medium mb-4 input_mobile"
                    >
                      Company
                    </label>
                    <input
                      className="w-[100%] bg-[#FAF9F6]  shadow appearance-none border rounded-[7.73462px] text-lg py-2 px-2 mb-5  text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      name="company"
                      onChange={(e) => {
                        setCompany(e.target.value);
                      }}
                      value={company}
                      placeholder="Enter your company"
                    />
                  </div>

                  <div className="mb-2  flex-1">
                    <label
                      htmlFor="phone"
                      className="block text-gray-600 text-[20px] font-medium mb-4 input_mobile"
                    >
                      Phone
                    </label>
                    <input
                      className="w-[100%] bg-[#FAF9F6]  shadow appearance-none border rounded-[7.73462px] text-lg py-2 px-2 mb-5  text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                      id="firstname"
                      type="text"
                      name="phone"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      value={phone}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between ">
                <div className="mb-2">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-xl font-bold mb-4 input_mobile"
                  >
                    Leave us a message
                  </label>
                  <textarea
                    className=" resize-none bg-[#FAF9F6]  shadow appearance-none border rounded-[7.73462px] text-lg py-2 px-2 mb-5   text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    rows="13"
                    cols="93"
                    type="text"
                    name="message"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    value={message}
                    placeholder="Please type your message here...."
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  onClick={(e) => {
                    handleSubmit(e);
                    notify();
                  }}
                  className=" bg-gray-600 hover:bg-[#166785] text-white font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded w-fit"
                >
                  Send
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* section2 */}
      <section className="sec6 form bg-white py-20 pb-8">
        <section className="px-[10%] ">
          <div className="formsec flex justify-items-center ">
            <div className="bg-white setform  pb-8 pt-[3.6%] w-[50%] flex flex-col gap-6 ">
              <div className="text-left ">
                <AiOutlineMail className="w-8 h-8" />

                <h1 className="mt-2 italic text-xl text-gray-700 text-left">
                  muhammad.tayyab@jugrafiya.com{" "}
                </h1>

                <div className="flex justify-items-center ">
                  <h1 className="my-3 text-xl  text-gray-700">
                    Muhammad Tayyab
                  </h1>
                  <div className="flex mt-2 ">
                    <Link href="https://www.linkedin.com/in/muhammad-tayyab-mir-8a180968/">
                      <AiFillLinkedin className="cursor-pointer w-8 h-8 mx-2" />
                    </Link>
                    <Link href="https://github.com/TayyabMir056">
                      <AiFillGithub className=" cursor-pointer w-8 h-8" />
                    </Link>
                  </div>
                </div>
                <h1 className="text-xl  text-gray-700">
                  Co-founder and Engineering Manager{" "}
                </h1>
              </div>
              <div className="mt-2">
                <ImOffice className="w-8 h-8" />
                <address className="mt-4 text-gray-700  leading-relaxed text-xl">
                  Jugrafiya Pvt Ltd, Joyco extension, Joyland City Walk, <br />
                  near Ayub National Park, Rawalpindi, Pakistan
                  <br />
                  <div className="flex items-center gap-2">
                    <BsFillTelephoneFill className="w-7 h-7" />
                    <h1 className="pt-2">+92-336-5829922</h1>
                  </div>
                   <div className="pt-2 flex  items-center justify-items-center gap-2">
                    <Link href="https://www.linkedin.com/company/jugrafiya/" target="_blank" className="flex items-center justify-items-center gap-1">
                      <AiFillLinkedin className="cursor-pointer w-8 h-8 mx-2" />
                    <h1 className="pt-2 underline underline-offset-1">Jugrafiya LinkedIn</h1>
                    </Link>
                  </div>
                </address>
              </div>
            </div>

            <div className="setform w-[50%] border-green-600 border-3">
              <div>
                <Map
                  initialViewState={{
                    longitude: 73.0902707,
                    latitude: 33.562346,
                    zoom: 15,
                  }}
                  style={{ width: "50vw", height: 400 }}
                  mapStyle="mapbox://styles/mapbox/streets-v12"
                  mapboxAccessToken={TOKEN}
                >
                  <Marker longitude={73.0902707} latitude={33.562346}></Marker>
                </Map>
                {/* <a
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClick}
                  className="flex items-center  text-[14px] font-semibold cursor-pointer text-gray-600 w-fit rounded  hover:text-sky-700 target:blank"
                >
                  Get Directions{" "}
                  <FaDirections
                    target="_blank"
                    onClick={handleClick}
                    className="ml-1"
                  />
                </a> */}
                <div className="flex items-center  text-[14px] font-semibold cursor-pointer text-gray-600 w-fit rounded  hover:text-sky-700 ">
                  <Link
                    href="https://www.google.com/maps/dir/?api=1&destination=33.562346,73.0902707"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex "
                  >
                    Get Directions
                    <FaDirections
                      target="_blank"
                      onClick={handleClick}
                      className="mt-1 ml-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ContactUs;

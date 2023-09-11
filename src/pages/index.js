import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, useRef } from "react";
import CountUp, { startAnimation } from "react-countup";

import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.min.css";

import { RiProjectorLine } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { MdStarRate } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImOffice } from "react-icons/im";

import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import Image from "next/image";
import homeimg from "../../public/assets/images/maphome.jpg";
import logo from "public/assets/images/logo.png";
// import appdev from "public/assets/images/services/appdev.jpg";
import analysis from "public/assets/images/services/analysis.jpg";
import remote from "public/assets/images/services/remote.jpg";
import integration from "public/assets/images/services/integration.jpg";
import appdev from "public/assets/images/services/appdev.jpg";
import desktop from "public/assets/images/services/desktop.jpg";
import consultancy from "public/assets/images/services/consultancy.jpg";
import automation from "public/assets/images/services/automation.jpg";
import database from "public/assets/images/services/database.jpg";

// import Spinner from "public/assets/images/Spinner.gif";
import loadingpic from "public/assets/images/loading.gif";
// import loading from "public/assets/images/loading.gif";

// Domain images
import realestate from "public/assets/images/domain/realestate.jpg";
import agri from "public/assets/images/domain/agri.jpg";
import oilgas from "public/assets/images/domain/oilgas.jpg";
import tourism from "public/assets/images/domain/tourism.jpg";
import telecom from "public/assets/images/domain/telecom.jpg";
import utility from "public/assets/images/domain/utility.jpg";

// technologies Section

// ArcGIS Suite
import appstudio from "public/assets/images/Tech/appstudio.png";
import arcgisbuilder from "public/assets/images/Tech/arcgisbuilder.png";
import arcgis from "public/assets/images/Tech/arcgis.png";
import developer from "public/assets/images/Tech/developer.png";
import fieldmap from "public/assets/images/Tech/fieldmap.png";
import operation from "public/assets/images/Tech/operation.png";
import quickcapture from "public/assets/images/Tech/quickcapture.png";
import storymap from "public/assets/images/Tech/storymap.png";
import survey from "public/assets/images/Tech/survey.png";
import workforce from "public/assets/images/Tech/workforce.png";

// OpenSource GIS solutions
import geoserver from "public/assets/images/Tech/geoserver.png";
import leaflet from "public/assets/images/Tech/leaflet.png";
import mapbox from "public/assets/images/Tech/mapbox.png";
import openlayer from "public/assets/images/Tech/openlayer.png";

// Automation

import selenium from "public/assets/images/Tech/selenium.png";
import django from "public/assets/images/Tech/django.png";
import fme from "public/assets/images/Tech/fme.png";
import python from "public/assets/images/Tech/python.png";

// Web & Mobile Dev
import nextjs from "public/assets/images/Tech/nextjs.png";
import reactnative from "public/assets/images/Tech/reactnative.png";
import react from "public/assets/images/Tech/react.png";
import springboot from "public/assets/images/Tech/springboot.png";

// testimonial
import profile1 from "public/assets/images/testimonial/profile1.jpeg";
import nancy from "public/assets/images/testimonial/nancy.jpeg";

import Link from "next/link";

// tostify

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/layout/Navbar";

import globe from "./../../public/Rotating_earth.gif";

import { Mapcontainer } from "../components/map";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const mySwiper = new Swiper(".swiper-container", {
      loop: true,
      direction: "horizontal",
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
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
      }
    });
  };

  const [loading, setLoading] = useState(true);
  const handleOnLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  function scrollToServicesSection() {
    const servicesSection = document.querySelector(".sec2");
    servicesSection.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToForm() {
    const servicesSection = document.querySelector(".sec6");
    servicesSection.scrollIntoView({ behavior: "smooth" });
  }

  // form
  const notify = () =>
    toast("Thank you for contacting! We'll get back to you soon");

  function formSubmit(e) {
    alert("form submitted");
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div>
      <Head>
        <title>Jugrafiya | GIS Development Services</title>
        <meta name="description" content="We map your ideas to reality" />{" "}
        {/* SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="jugrafiya-GIS" />
        <meta
          name="keywords"
          content="Jugrafiya offers top-tier GIS Development and Analysis services to businesses. We specialize in Web, Mobile and Desktop GIS Development and leverage technologies such as Leaflet, Mapbox and ArcGIS Development Suite"
        />{" "}
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Jugrafiya | Home" />
        <meta
          property="og:description"
          content="Explore our portfolio showcasing a range of Web GIS projects and services. We specialize in GIS Development, Web GIS Development, GIS Freelance services, and leverage technologies such as Leaflet, Mapbox, React, Next JS, Django, OpenLayers, GeoServer. We map your ideas to reality. Discover our expertise in delivering high-quality geospatial solutions through web and mobile applications."
        />
        <meta property="og:image" content="/public/assets/images/logo.png" />
        <meta
          property="og:url"
          content="https://jugrafiya-nextjs-dev.netlify.app/"
        />
        <meta property="og:type" content="website" /> {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Jugrafiya | Home" />
        <meta
          name="twitter:description"
          content="We map your ideas to reality"
        />
        <meta name="twitter:image" content="/public/assets/images/logo.png" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
        <script src="https://unpkg.com/swiper/swiper-bundle.js" async></script>
        <script
          src="https://unpkg.com/swiper/swiper-bundle.min.js"
          async
        ></script>
      </Head>

      <section className="sec1 imghome bg-[#FAF9F6] px-[10%] flex globesec h-[90vh] justify-center items-center text-center">
        <div className="flex flex-col w-[50%] globtext">
          <h1 className="heading text-left text-4xl leading-normal mb-2 font-bold text-gray-900">
            GIS Solutions & Services
          </h1>
          <p className="para text-left mt-10 text-xl md:text-lg text-black">
            Jugrafiya specializes in providing top-tier Web GIS Development
            services to businesses. Based in Pakistan, our team of highly
            experienced GIS Engineers specializes in:
          </p>
          <ol className="pl-4 para text-left mt-8 text-xl md:text-lg text-gray-900 list-disc">
            <li>Open-Source GIS Solutions</li>
            <li>Web &amp; Mobile Development</li>
            <li>Complete ArcGIS Suite development</li>
            <li>Automation pipelines</li>
          </ol>

          <div className="flex gap-5 pt-20">
            {/* <button className="button bg-gray-600 hover:bg-[#166785] px-6 py-3 rounded-lg text-white w-[150px]">
              Explore
            </button> */}
            <button
              className="button bg-gray-600 hover:bg-[#166785] px-6 py-3 rounded-lg text-white w-[150px]"
              onClick={scrollToServicesSection}
            >
              Explore
            </button>

            <button
              className="button bg-gray-600 hover:bg-[#166785] px-6 py-3 rounded-lg text-white w-[150px]"
              onClick={scrollToForm}
            >
              Get in touch
            </button>
          </div>
        </div>
      </section>
      <div>
        <Mapcontainer />
      </div>

      <section className="sec2 services bg-white pt-16 pb-5 px-[10%]">
        <div>
          <h2 className="heading text-center text-5xl leading-normal mb-2 font-bold text-gray-600">
            Our Expertise
          </h2>
          <p className="text-gray-600 para text-center text-2xl md:text-lg mx-auto pb-2 my-5">
            We strive to provide our customers with unparalleled service and
            exceed their expectations with our exceptional solutions
          </p>
        </div>
        <div className="service gap-14 container flex justify-center  items-center  mt-7 w-auto">
          <div
            className="appear imgcard hover:shadow-lg img-shadow flex flex-col text-[#565656] border-2 rounded-[20px]  w-[22%] overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <Image
                src={desktop}
                alt="Web GIS Development experties"
                className="serviceimg w-full h-[210.13px]"
              />
            </div>

            <div className="flex flex-col justify-between py-6 px-3">
              <h1 className="text-gray-600 heading text-left text-[18px] font-semibold ">
                Web GIS Development
              </h1>
              <h1 className="text-gray-600 font-normal para w-auto text-left sm:text-sm leading-5">
                GIS web development combines GIS with web technologies to create
                interactive maps and data visualizations.
              </h1>
            </div>
          </div>

          <div
            className="imgcard hover:shadow-lg border-2 flex flex-col text-[#565656] rounded-[20px] w-[22%] overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div>
              <Image
                src={consultancy}
                alt="GIS Consultancy experties"
                className="serviceimg w-full h-[210.13px]"
              />
            </div>

            <div className="flex flex-col justify-between py-6 px-3">
              <h1 className="heading text-left text-[18px] font-semibold text-gray-600">
                GIS Consultancy
              </h1>
              <h1 className="font-normal para w-auto text-left leading-5 text-gray-600">
                We provide expert guidance and support for clients in leveraging
                GIS technology for their business needs.
              </h1>
            </div>
          </div>

          <div
            className="imgcard hover:shadow-lg border-2  flex flex-col  text-[#565656]  rounded-[20px]  w-[22%] overflow-hidden "
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <div>
              <Image
                src={appdev}
                alt=" Mobile GIS App Development experties"
                className="serviceimg w-full h-[230px]"
              />
            </div>

            <div className="mt-[-6%] object-center flex flex-col justify-between py-6 px-3">
              <h1 className=" heading text-left text-[18px] font-semibold text-gray-600">
                Mobile GIS App Development
              </h1>
              <h1 className="font-normal para w-auto text-left leading-5 text-gray-600">
                We create such apps that allow users to access and analyze
                geographic data on mobile devices
              </h1>
            </div>
          </div>

          <div
            className="imgcard hover:shadow-lg border-2   flex flex-col text-[#565656]  rounded-[20px]  w-[22%] overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="1300"
          >
            <div>
              <Image
                src={automation}
                alt=" Automation experties"
                className="serviceimg w-full h-[207px]"
              />
            </div>

            <div className="flex flex-col justify-between py-6 px-3 ">
              <h1 className=" heading text-left text-[18px] font-semibold text-gray-600">
                Automation
              </h1>
              <h1 className=" font-normal para w-auto text-left leading-5 text-gray-600">
                We provides cutting-edge automation solutions that improve
                efficiency and productivity in a variety of industries.
              </h1>
            </div>
          </div>
        </div>

        <div className="service gap-14  container flex items-center justify-center mt-12 pb-16 w-full">
          <div
            className="imgcard hover:shadow-lg border-2 flex flex-col text-[#565656]  rounded-[20px]  w-[22%] overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <Image
                src={analysis}
                alt="GIS Analysis experties"
                className="serviceimg w-full h-[230px]"
              />
            </div>

            <div className="flex flex-col justify-between py-6 px-3 ">
              <h1 className="heading text-left text-[18px] font-semibold text-gray-600">
                GIS Analysis
              </h1>
              <h1 className="font-normal para heading w-auto text-left leading-5 text-gray-600">
                We offers comprehensive GIS analysis services to help clients
                gain insights and make informed decisions about spatial data
              </h1>
            </div>
          </div>

          <div
            className="imgcard hover:shadow-lg border-2  flex flex-col text-[#565656]  rounded-[20px]  w-[22%] overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div>
              <Image
                src={integration}
                alt="Integrations experties"
                className="serviceimg w-full h-[230px]"
              />
            </div>

            <div className="flex flex-col justify-between py-6 px-3 ">
              <h1 className="heading text-left text-[18px] font-semibold text-gray-600">
                Integrations
              </h1>
              <h1 className="font-normal para w-auto text-left leading-5 text-gray-600">
                We provide expert integration services to help clients
                seamlessly integrate GIS technology with their existing systems
                and workflows.
              </h1>
            </div>
          </div>

          <div
            className="imgcard hover:shadow-lg border-2  flex flex-col text-[#565656]  rounded-[20px]  w-[22%] overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <div>
              <Image
                src={database}
                alt="team"
                className="serviceimg img w-fit h-[230.13px]"
              />
            </div>

            <div className="flex flex-col justify-between py-6 px-3 ">
              <h1 className="heading text-left  text-[18px] font-semibold text-gray-600">
                Database Design
              </h1>
              <h1 className="font-normal para w-auto text-left leading-5 text-gray-600">
                We offer professional database design services to help clients
                create efficient and scalable data management solutions
              </h1>
            </div>
          </div>

          <div
            className="imgcard hover:shadow-lg border-2  flex flex-col text-[#565656]  rounded-[20px]  w-[22%] overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="1300"
          >
            <div>
              <Image
                src={remote}
                alt="Remote Sensing GIS"
                className="serviceimg w-full h-[230.13px]"
              />
            </div>

            <div className="flex flex-col justify-between py-6 px-3 ">
              <h1 className="heading text-left text-[18px] font-semibold text-gray-600">
                Remote Sensing
              </h1>
              <h1 className="font-normal para w-auto text-left leading-5 text-gray-600">
                We provide advanced remote sensing solutions for clients to
                gather and analyze data about the Earth's surface from afar.
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-[#FAF9F6] sec3 px-[10%] flex flex-col flex-wrap py-10">
        <div className="pb-4">
          <h2 className="heading text-center text-5xl leading-normal mb-2 font-bold text-gray-600">
            Technologies we love
          </h2>
        </div>
        <div className="flex flex-col ">
          <h1 className="heading text-left text-[18px] font-semibold text-gray-600">
            OpenSource GIS solutions
          </h1>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <div className="techdiv1 flex space-x-36  items-center justify-center mt-6">
            <div
              className=" flex flex-col justify-items-center items-center justify-center gap-1"
              data-aos="fade-right"
            >
              <Image
                src={geoserver}
                alt="goserver web technology OpenSource GIS solutions"
                className="imgtech w-[60px] h-[60px] hover:scale-125 transition-all duration-250"
              />
              <h1 className="text-lg text-gray-600">Geoserver</h1>
            </div>
            <div
              className=" flex flex-col justify-items-center items-center justify-center gap-2"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <Image
                src={leaflet}
                alt="leaflet web technology OpenSource GIS solutions"
                className="imgtech imgset w-[60px] h-[60px] hover:scale-125 transition-all duration-250"
              />
              <h1 className="text-lg imgset text-gray-600">Leaflet</h1>
            </div>
            <div
              className=" flex flex-col justify-items-center items-center justify-center gap-2"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <Image
                src={mapbox}
                alt="mapbox web technology OpenSource GIS solutions"
                className="imgtech imgset w-[60px] h-[60px] hover:scale-125 transition-all duration-250"
              />
              <h1 className="text-lg imgset text-gray-600">Mapbox</h1>
            </div>

            <div
              className="imgset flex flex-col justify-items-center items-center justify-center gap-2"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <Image
                src={openlayer}
                alt="openlayers web technology OpenSource GIS solutions"
                className="imgtech imgset w-[60px] h-[60px] hover:scale-125 transition-all duration-250"
              />
              <h1 className="text-lg imgset text-gray-600">OpenLayers</h1>
            </div>
          </div>
        </div>
        <div className="techdiv2 flex flex-col  py-8">
          <h1 className="heading text-left text-[18px] font-semibold text-gray-600">
            Web & Mobile Dev
          </h1>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <div className="techdiv2 flex space-x-36 justify-center mt-8">
            <div
              className=" flex flex-col justify-items-center items-center justify-center gap-2"
              data-aos="fade-right"
            >
              <Image
                src={react}
                alt="Reactjs web technology Web & Mobile Dev"
                className="imgtech w-[60px] h-[60px] hover:scale-125 transition-all duration-250"
              />
              <h1 className="text-lg text-gray-600">React</h1>
            </div>

            <div
              className="imgset mobiledev flex flex-col justify-items-center items-center justify-center gap-2"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <Image
                src={nextjs}
                alt="Nextjs web technology Web & Mobile Dev"
                className="imgset imgtech w-[60px] h-[60px] hover:scale-125 transition-all duration-250"
              />
              <h1 className="text-lg  imgset text-gray-600">Next.js</h1>
            </div>
            <div
              className="flex flex-col justify-items-center items-center justify-center gap-2"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <Image
                src={django}
                alt="Django web technology Web & Mobile Dev"
                className="imgset imgtech w-[60px] h-[60px] hover:scale-125 transition-all duration-250"
              />
              <h1 className="text-lg  imgset text-gray-600">Django</h1>
            </div>

            <div
              className="flex flex-col justify-items-center items-center justify-center gap-2"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <Image
                src={springboot}
                alt="springboot web technology Web & Mobile Dev"
                className="imgset imgtech w-[60px] h-[60px] hover:scale-125 transition-all duration-250"
              />
              <h1 className="text-lg text-center  leading-5 imgset text-gray-600">
                Java Springboot
              </h1>
            </div>
            <div
              className=" imgset flex flex-col justify-items-center items-center justify-center gap-2"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <Image
                src={reactnative}
                alt="reac native  web technology Web & Mobile Dev "
                className="setnative imgset reactnative w-[60px] h-[60px] hover:scale-125 transition-all duration-250"
              />
              <h1 className="text-lg text-center  leading-5 imgset text-gray-600">
                React Native
              </h1>
            </div>
          </div>
        </div>

        <div className=" arcgistech flex arcgissuite flex-col ">
          <h1 className="heading text-left text-[18px] font-semibold text-gray-600">
            ArcGIS Suite
          </h1>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="flex mt-6">
            <div className="flex w-[65%] flex-wrap flex-col">
              <div className=" flex items-center justify-center gap-20">
                <div
                  className="flex flex-col justify-items-center items-center justify-center gap-2"
                  data-aos="fade-right"
                >
                  <Image
                    src={appstudio}
                    alt="appstudio  ArcGIS Suite web technology"
                    className="imgtech w-[60px] h-[60px] hover:scale-125 transition-all duration-250"
                  />
                  <h1 className="text-lg  text-center text-gray-600">
                    AppStudio
                  </h1>
                </div>
                <div
                  className="flex flex-col justify-items-center items-center justify-center gap-2"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <Image
                    src={operation}
                    alt="operation Dashboard ArcGIS Suite  Web Technology"
                    className="imgtech w-[60px] h-[60px] hover:scale-125 transition-all duration-250"
                  />
                  <h1 className=" text-lg  text-gray-600">
                    Operational Dashboard
                  </h1>
                </div>

                <div
                  className="flex flex-col justify-items-center items-center justify-center gap-2"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <Image
                    src={arcgisbuilder}
                    alt="arcgisbuilder ArcGIS Suite  Web Technology"
                    className=" imgtech w-[60px] h-[60px] hover:scale-125 transition-all duration-250"
                  />
                  <h1 className="text-lg text-center text-gray-600">
                    Experience Builder
                  </h1>
                </div>

                <div
                  className="flex flex-col justify-items-center items-center justify-center gap-2"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <Image
                    src={fieldmap}
                    alt="fieldmap ArcGIS Suite  Web Technology"
                    className="imgtech w-[60px] h-[60px] hover:scale-125 transition-all duration-250"
                  />
                  <h1 className="text-lg text-center text-gray-600">
                    Field Maps
                  </h1>
                </div>
              </div>

              <div className="flex items-center justify-center gap-20 mt-10">
                <div
                  className="flex flex-col items-center justify-start gap-2"
                  data-aos="fade-right"
                >
                  <Image
                    src={quickcapture}
                    alt="quickcapture ArcGIS Suite  Web Technology"
                    className="imgtech w-[60px] h-[60px] hover:scale-125 transition-all duration-250"
                  />
                  <h1 className="text-lg text-center text-gray-600">
                    QuickCapture
                  </h1>
                </div>
                <div
                  className="flex flex-col items-center justify-center gap-2"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <Image
                    src={storymap}
                    alt="storymap ArcGIS Suite  Web Technology"
                    className="w-[60px] h-[60px] hover:scale-125 transition-all duration-250"
                  />
                  <h1 className="settext text-lg text-center text-gray-600">
                    ArcGIS StoryMaps
                  </h1>
                </div>
                <div
                  className="flex flex-col  items-center justify-center gap-2"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <Image
                    src={survey}
                    alt="survey ArcGIS Suite  Web Technology"
                    className="imgtech w-[60px] h-[60px] hover:scale-125 transition-all duration-250"
                  />
                  <h1 className="text-lg text-center text-gray-600">
                    Survey123
                  </h1>
                </div>
                <div
                  className="flex flex-col justify-items-center items-center justify-center gap-2"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <Image
                    src={workforce}
                    alt="workforce ArcGIS Suite  Web Technology"
                    className="imgtech w-[60px] h-[60px] hover:scale-125 transition-all duration-250"
                  />
                  <h1 className="text-center text-lg text-gray-600">
                    Workforce
                  </h1>
                </div>
              </div>
            </div>

            <div className=" grow flex">
              <div
                className=" flex flex-col items-center justify-center gap-2 "
                data-aos="fade-right"
                data-aos-delay="500"
              >
                <Image
                  src={developer}
                  alt="ArcGis development and apis  Web Technology"
                  className="devapi w-[60px] h-[60px] hover:scale-125 transition-all duration-250"
                />
                <h1 className="text-lg text-gray-600">ArcGIS Development</h1>
                <h1 className="text-lg text-gray-600">APIs</h1>
              </div>

              <div
                className="flex items-center justify-center ml-5 mr-5 border-gray-300 border-r-2 border-t-2 border-b-2 w-4"
                data-aos="fade-right"
                data-aos-delay="600"
              ></div>
              <div
                className="flex flex-col justify-center  gap-3 text-gray-600"
                data-aos="fade-right"
                data-aos-delay="700"
              >
                <p>ArcGIS SDK for .Net</p>
                <p>ArcObjects (C#)</p>
                <p>ArcGIS JS API</p>
                <p>ArcPy</p>
                <p>ArcGIS Python API</p>
                <p>ArcGIS SDK For React</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col ">
          <h1 className="heading text-left text-[18px] font-semibold text-gray-600">
            Automation
          </h1>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <div className=" techdiv3 flex space-x-36 justify-center">
            <div
              className=" flex flex-col justify-items-center items-center justify-center gap-2"
              data-aos="fade-right"
            >
              <Image
                src={fme}
                alt="fme -Automation  Web Technology"
                className=" imgtech w-[60px] h-[60px] hover:scale-125 transition-all duration-250"
              />
              <h1 className="text-lg text-gray-600">FME</h1>
            </div>
            <div
              className=" flex flex-col justify-items-center items-center justify-center gap-2"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <Image
                src={python}
                alt="python -Automation  Web Technology"
                className="setautoimg imgtech w-[60px] h-[60px] hover:scale-125 transition-all duration-250"
              />
              <h1 className="text-lg  techsettext text-gray-600">Python</h1>
            </div>
            <div
              className="flex flex-col justify-items-center items-center justify-center gap-2"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <Image
                src={selenium}
                alt="Selenium -Automation  Web Technology"
                className="setautoimg imgtech w-[60px] h-[60px] hover:scale-125 transition-all duration-250"
              />
              <h1 className="text-lg  techsettext text-gray-600">Selenium</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies End */}

      {/* Company stats */}
      <section className="compstatsmobile py-52 bg-white flex flex-row justify-center items-center w-[120%] gap-0">
        <div className="projstar compstatsdiv mr-[-20%] compstats2 py-10  font-semibold text-xl bg-[#166785]  text-white flex justify-center items-center space-x-20 w-full">
          <div className="compstats projdiv flex flex-col space-y-2 items-center justify-center">
            <RiProjectorLine className="w-14 h-14" />
            <div className="flex items-center justify-center">
              {/* <CountUp  start={0} end={400} duration={2} redraw={true}></CountUp> */}
              <h1>400+</h1>
            </div>
            <h1 className="projectcompleted font-normal heading ">
              Project Completed
            </h1>
          </div>
          <div className="ratingdiv flex flex-col space-y-2 items-center justify-center justify-items-center">
            <MdStarRate className="w-14 h-14" />
            <div className="flex">
              {/* <CountUp start={0} end={300} duration={5}></CountUp> */}
              <h1 className="projects">300+</h1>
            </div>
            <h1 className="font-normal heading">5 Start Ratings</h1>
          </div>
        </div>
        <div className="compstatsdiv py-10  font-semibold text-xl bg-[#166785]  text-white flex justify-center items-center space-x-20 w-full">
          <div className="statsclient ml-[-70%] compstats flex flex-col space-y-2 items-center">
            <RiCustomerService2Fill className="w-14 h-14" />
            <div className="flex">
              {/* <CountUp start={0} end={350} duration={5}></CountUp> */}
              <h1>350+</h1>
            </div>
            <h1 className="font-normal heading">No of Clients</h1>
          </div>
          <div className="compdiv compstats flex flex-col space-y-2 items-center">
            <TbWorld className="w-14 h-14" />
            <div className="flex items-center">
              {/* <CountUp start={0} end={25} duration={5}></CountUp> */}
              <h1>25+</h1>
            </div>
            <h1 className="countries statscountriestext font-normal heading ">
              No of Countries
            </h1>
          </div>
        </div>
      </section>

      {/* Domain */}

      <section className="sec4 services bg-[#FAF9F6] pt-20  pb-5 px-[10%]">
        <div>
          <h2 className="heading text-center text-4xl leading-normal mb-2 font-bold text-gray-600  ">
            Expertise across various domains
          </h2>
          <p className="text-gray-600 para text-center text-2xl md:text-lg mx-auto pb-2 my-5">
            We have experience in empowering businesses with innovative
            solutions in diverse domains
          </p>
        </div>
        <div className="service container flex  items-center justify-between mt-3 w-auto">
          <div
            className="domaincard hover:shadow-lg border-2 flex flex-col text-[#565656]  rounded-[20px] "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <Image
                src={utility}
                alt="Utilities (Electricity) Services: Manage electricity networks, streamline asset management, and analyze energy distribution with ease."
                className="domainimg rounded-t-2xl w-full h-[280px]"
              />
            </div>

            <div className="flex flex-col justify-between py-6 px-4 ">
              <h1 className="heading text-left text-[18px] font-semibold text-gray-600">
                Utilities (Electricity)
              </h1>
              <h1 className="font-normal para heading w-auto text-left leading-5 text-gray-600">
                Manage your electricity networks, streamline asset management,
                and analyze energy distribution with ease.
              </h1>
            </div>
          </div>

          <div
            className="domaincard hover:shadow-lg border-2  flex flex-col text-[#565656]  rounded-[20px]   "
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div>
              <Image
                src={realestate}
                alt="Real Estate Services: Visualize and analyze property data, make informed decisions on property development, site selection, and market analysis."
                width={460}
                className="domainimg rounded-t-2xl h-[280px]"
              />
            </div>

            <div className="flex flex-col justify-between py-6 px-2">
              <h1 className="heading text-left text-[18px] font-semibold text-gray-600">
                Real Estate
              </h1>
              <h1 className="font-normal para w-auto text-left leading-5 text-gray-600">
                Visualize and analyze property data, make informed decisions on
                property development, site selection, and market analysis.
              </h1>
            </div>
          </div>

          <div
            className="domaincard hover:shadow-lg border-2   flex flex-col text-[#565656]  rounded-[20px] "
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <div>
              <Image
                src={oilgas}
                width={460}
                alt="Oil & Gas Services: Track assets, assess risks, manage pipelines, and visualize data to optimize your operations."
                className="domainimg rounded-t-2xl h-[280px]"
              />
            </div>

            <div className="flex flex-col justify-between py-6 px-4 ">
              <h1 className="heading text-left text-[18px] font-semibold text-gray-600">
                Oil & Gas
              </h1>
              <h1 className="font-normal para w-auto text-left leading-5 text-gray-600">
                Track assets, assess risks, manage pipelines and visualize data
                to optimize your operations.
              </h1>
            </div>
          </div>
        </div>
        <div className="service container flex items-center justify-between mt-5 w-full">
          <div
            className="domaincard hover:shadow-lg border-2  flex flex-col text-[#565656]  rounded-[20px]   "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <Image
                src={tourism}
                width={460}
                alt="Tourism Services: Enhance visitor experience and optimize tourism marketing with interactive maps and location-based services."
                className="domainimg rounded-t-2xl h-[280px]"
              />
            </div>

            <div className="flex flex-col justify-between py-6 px-4 ">
              <h1 className="heading text-left text-[18px] font-semibold text-gray-600">
                Tourism
              </h1>
              <h1 className="font-normal para w-auto text-left leading-5 text-gray-600">
                Enhance the visitor experience, and plan your tourism marketing
                with interactive maps and location-based services.
              </h1>
            </div>
          </div>

          <div
            className="domaincard hover:shadow-lg border-2  flex flex-col text-[#565656]  rounded-[20px]  "
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div>
              <Image
                src={telecom}
                width={460}
                alt="Telecom Services: Optimize network planning, site selection, and asset management for your telecom business. Analyze market trends and customer behavior with ease."
                className="domainimg rounded-t-2xl h-[280px]"
              />
            </div>

            <div className="flex flex-col justify-between py-6 px-4 ">
              <h1 className="heading text-left  text-[18px] font-semibold text-gray-600">
                Telecom
              </h1>
              <h1 className="font-normal para w-auto text-left leading-5 text-gray-600">
                Optimize your network planning, site selection, and asset
                management for your telecom business. Analyze market trends and
                customer behavior with ease.
              </h1>
            </div>
          </div>

          <div
            className="domaincard hover:shadow-lg border-2  flex flex-col text-[#565656]  rounded-[20px]   "
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <div>
              <Image
                src={agri}
                alt="Agriculture GIS Expertise and Services: Optimize crop management, yield and soil analysis, land use planning, and resource management with our advanced GIS solutions."
                className="domainimg w-full rounded-t-2xl h-[280px]"
              />
            </div>

            <div className="flex flex-col justify-between py-6 px-4 ">
              <h1 className="heading text-left text-[18px] font-semibold text-gray-600">
                Agriculture
              </h1>
              <h1 className="font-normal para w-auto text-left leading-5 text-gray-600">
                Optimize crop management, yield and soil analysis, land use
                planning, and resource management.
              </h1>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center mt-16">
          <button className="button bg-gray-600 hover:bg-[#166785] px-6 py-3 rounded-lg text-white w-[150px] font-medium">
            Learn More
          </button>
        </div> */}{" "}
      </section>

      <section className="bg-white sec5 testimonial flex justify-center items-center h-screen md:-mx-4 px-4 py-8">
        <div className="w-full bg-[#166785] text-white  shadow-xl pb-4 overflow-hidden relative">
          {/* <div className="w-full  bg-gradient-to-r from-gray-100 via-gray-500 to-[#166785] shadow-xl pb-4 overflow-hidden relative"> */}

          <div className="swiper-container w-100">
            <div className="swiper-wrapper ">
              <div className="swiper-slide px-20 flex items-center justify-center">
                <div className="py-4">
                  <div className="flex justify-center py-4 mt-10">
                    <figure className="max-w-screen-md mx-auto">
                      <blockquote>
                        <p className="testimonial-para text-2xl md:text-lg font-normal text-white dark:text-white ">
                          "We are a GIS technology company working in real
                          estate in East Africa. When we began product
                          development, our biggest challenge was building a team
                          skilled in both software development, geospatial
                          systems and one that had experience working in Real
                          Estate. Jugrafiya happened to be the perfect match.
                          They understood our vision to empower property
                          investors with information through the digitization of
                          the property buying process. Their approach is
                          pleasantly different from other developers and there
                          is a sense of bonfide job satisfaction. Jugrafiya has
                          been part of the creative process of AerialGIS from
                          ideation to execution and have assisted to build
                          products that are used widely in the regional real
                          estate sector. We are excited to continue our
                          relationship with them."
                        </p>
                      </blockquote>
                      <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        <Image
                          src={nancy}
                          className="w-8 h-8 rounded-full"
                          alt="profile pic"
                        />
                        <div className="flex items-center divide-x-2 divide-white dark:divide-gray-700">
                          <div className="pr-3 font-medium text-white dark:text-white">
                            Nancy wachiuri
                          </div>
                          <div className="pl-3 text-sm font-medium text-white dark:text-white">
                            AerialGIS
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="swiper-slide px-20 flex items-center justify-center">
                <div className="py-6 mt-10">
                  <figure className="max-w-screen-md mx-auto">
                    <blockquote>
                      <p className="testimonial-para text-2xl md:text-lg font-normal text-white dark:text-white">
                        "I approached Jugrafiya to help design a website for me,
                        and I was very impressed by their level of
                        professionalism. They took their time to understand my
                        requirements and delivered on time. They were very open
                        and accommodating to having further feedback sessions
                        with me, which were very helpful to help refine and
                        update the website. Nothing was ever too much to ask,
                        and they were very easy to work with. Jugrafiya has been
                        a pleasure to work with, and I’m very happy with the end
                        product. They are approachable, resourceful,
                        enthusiastic, and very good at what they do. I look
                        forward to working with Jugrafiya in the future. I
                        highly recommend Jugrafiya to anyone."
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                      <Image
                        src={profile1}
                        className="w-8 h-8 rounded-full"
                        alt="profile pic"
                      />
                      <div className="flex items-center divide-x-2 divide-white dark:divide-gray-700">
                        <div className="pr-3 font-medium text-white dark:text-white">
                          Jojo Koomson
                        </div>
                        <div className="pl-3 text-sm font-medium text-white dark:text-white">
                          Gemceak LTD
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className="swiper-button-prev text-xs rounded text-white mx-10 hidden md:block"></div>
            <div className="swiper-button-next text-xs rounded text-white mx-10 hidden md:block "></div>
            <div className="swiper-pagination w-5 text-white hidden md:block"></div>
          </div>
        </div>
      </section>

      <section className="sec6 form bg-[#FAF9F6] py-10 pb-8">
        <section className="px-[10%] ">
          <div className="formsec flex justify-items-center ">
            <div className="bg-[#FAF9F6] setform  pb-8 pt-[3.6%] w-[50%] flex flex-col gap-6 ">
              <h1 className="testheading text-5xl tracking-wide  font-bold text-left pb-5 text-gray-600">
                Get In Touch
              </h1>

              <div className="text-left ">
                <AiOutlineMail className="w-8 h-8" />

                <h1 className="mt-2 italic text-xl text-gray-600 text-left">
                  muhammad.tayyab@jugrafiya.com
                </h1>

                <div className="flex justify-items-center ">
                  <h1 className="my-3 text-xl  text-gray-600">
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
                <h1 className="text-xl  text-gray-600">
                  Co-founder and Engineering Manager
                </h1>
              </div>
              <div className="mt-2">
                <ImOffice className="w-8 h-8" />
                <div className="mt-4 text-gray-600  leading-relaxed text-xl">
                  Jugrafiya Pvt Ltd, Joyco extension, Joyland City Walk,
                  <br />
                  near Ayub National Park, Rawalpindi, Pakistan
                  <br />
                  <div className="flex items-center gap-2">
                    <BsFillTelephoneFill className="w-7 h-7" />
                    <h1 className="pt-2">+92-336-5829922</h1>
                  </div>
                  <div className="pt-2 flex  items-center justify-items-center gap-2">
                    <Link
                      href="https://www.linkedin.com/company/jugrafiya/"
                      target="_blank"
                      className="flex items-center justify-items-center gap-1"
                    >
                      <AiFillLinkedin className="cursor-pointer w-8 h-8 mx-2" />
                      <h1 className="pt-2 underline underline-offset-1">
                        Jugrafiya LinkedIn
                      </h1>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="setform w-[50%] ">
              <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md  justify-start contact_mobile">
                <form
                  method="POST"
                  action="https://www.formbackend.com/forms/0f3030d8719b702f/test"
                  className="space-y-8 mt-10"
                  onSubmit={handleSubmit}
                >
                  <div className=" ">
                    <label htmlFor="name"></label>
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      value={name}
                      className="input1 text-xl w-full py-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block  p-2.5  "
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email"></label>
                    <input
                      type="email"
                      name="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={email}
                      className="input2 py-4 block p-3 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message"></label>
                    <textarea
                      type="text"
                      name="message"
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                      value={message}
                      rows="6"
                      className="textarea_home block p-2.5 w-full text-xl text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div>
                    <button // onClick={notify}
                      type="submit"
                      onClick={(e) => {
                        handleSubmit(e);

                        notify();
                      }}
                      className="button bg-gray-600 hover:bg-[#166785] px-6 py-3 rounded-lg text-white text-lg w-full"
                    >
                      Send
                    </button>
                    <ToastContainer />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

import React, {useEffect} from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

// library
import AOS from "aos";
import "aos/dist/aos.css";

import godevelapp from "../../public/portfolio/godevelapp.png";
import godevellogo from "./../../public/portfolio/godevellogo.png";
import adventuregoro from "./../../public/portfolio/adentureguru.png";
import aerialgis from "./../../public/portfolio/aerialgis.png";
import aerialgislogo from "./../../public/portfolio/aerialgislogo.png";
import allglobe from "./../../public/portfolio/allglobe.png";
import churchpoints from "./../../public/portfolio/churchpoints.png";
import yawater from "./../../public/portfolio/yawater.png";
import disastermap from "./../../public/portfolio/disastermap.png";

import churchlogo from "./../../public/portfolio/churchlogo.png";
import adventurelogo from "./../../public/portfolio/adenturegurulogo.png";
import allglobelogo from "./../../public/portfolio/allglobelogo.png";
import yawaterlogo from "./../../public/portfolio/yawaterlogo.png";
import mapimg from "./../../public/portfolio/clientelmap.png";
import internetcoverage from "./../../public/portfolio/Internet-coverage-tribal-areas.jpeg";
import prindin from "./../../public/portfolio/Pridin-Consulting-Dashboard.jpeg";
import studentsystem from "./../../public/portfolio/Student-Management-System.jpeg";
import towncouncil from "./../../public/portfolio/Town-Council-WebGIS.jpeg";

import {useState} from "react";

function Portfolio() {
    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);

    return (
        <>
            <Head>
                <title>jugrafiya | portfolio</title>
                <meta charSet="utf-8"/>

                <meta name="description" content="Jugrafiya offers top-tier Web Gis GIS Development and Analysis services to businesses. We specialize in Web, Mobile and Desktop web GIS Development and leverage technologies such as Leaflet, Mapbox and ArcGIS Development Suite"/> {/* SEO meta tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="robots" content="index, follow"/>
                <meta name="author" content="jugrafiya-GIS"/>
                <meta name="keywords" content="Web GIS, GIS Developer, GIS Development, GIS Freelance, Leaflet, Mapbox, React, Next JS, Django, OpenLayers, GeoServer, GIS services, GIS maps, spatial data"/> {/* Open Graph meta tags */}
                <meta property="og:title" content="Jugrafiya | portfolio"/>
                <meta property="og:description" content="Discover our portfolio of Web GIS projects and services. We are a team of experienced GIS Developers specializing in GIS Development, Web GIS Development, and GIS Freelance services. We leverage technologies such as Leaflet, Mapbox, React, Next JS, Django, OpenLayers, and GeoServer to deliver innovative GIS solutions. Explore our GIS maps, web services, and gain valuable insights from our spatial data expertise. Contact us for professional GIS services in Pakistan and beyond."/>

                <meta property="og:image" content="/public/assets/images/logo.png"/>
                <meta property="og:url" content="https://jugrafiya-nextjs-dev.netlify.app/portfolio"/>
                <meta property="og:type" content="website"/> {/* Twitter meta tags */}
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content="Jugrafiya | Home"/>
                <meta name="twitter:description" content="Discover our portfolio of Web GIS projects and services. We are a team of experienced GIS Developers specializing in GIS Development, Web GIS Development, and GIS Freelance services. We leverage technologies such as Leaflet, Mapbox, React, Next JS, Django, OpenLayers, and GeoServer to deliver innovative GIS solutions. Explore our GIS maps, web services, and gain valuable insights from our spatial data expertise. Contact us for professional GIS services in Pakistan and beyond."/>
                <meta name="twitter:image" content="/public/assets/images/logo.png"/>
            </Head>
            <section>
                <div className=" flex flex-col items-center justify-center ">
                    <div className="bg-[#FAF9F6] w-full flex justify-center items-center">
                        <h1 className="portfolio_header text-left heading text-6xl md:text-4xl font-bold text-gray-600">
                            Portfolio
                        </h1>
                    </div>
                    <div className="space-x-7 flex justify-center py-10  bg-[#FAF9F6] w-full flex-wrap ">
                        <div className="flex flex-col  items-start content_div appear "
                            // data-aos="fade-right"
                            // data-aos-delay="300"
                        >
                            <div className="flex justify-center items-center ">
                                <Image src={godevellogo}
                                    alt=" GoDevelApp GIS App logo"
                                    className="w-10 h-10 "/>
                                <h1 className="text-xl font-medium px-3 portfolio_heading">
                                    GoDevelApp
                                </h1>
                            </div>
                            <div className="flex flex-col items-start max-w-md mx-auto">
                                <p className="pt-3 portfolio_para">
                                    GoDevelApp is a powerful tool for development appraisal and
                                                      property sourcing. It offers essential information, options,
                                                      and solutions for proposed projects, taking into account
                                                      council and public body concerns. It includes a detailed
                                                      development appraisal feature and provides comprehensive
                                                      reports on build costs. The tool also offers user-friendly
                                                      build cost and GDV calculators based on regional data.
                                </p>
                                <h1 className="text-blue-900 cursor-pointer font-medium py-2">
                                    <Link href="https://app.godevelapp.co.uk/" rel="noopener noreferrer" target="_blank">
                                        Visit!
                                    </Link>
                                </h1>
                            </div>
                        </div>

                        <div className="appear  " data-aos="fade-left" data-aos-delay="300">
                            <Image src={godevelapp}
                                alt=" GoDevelApp GIS App image"
                                className="w-[340px] h-[190px] portfolio_img portfoil_imgset"/> {/* <ReactIntense
                src={godevelapp}
                className="w-[340px] h-[190px] portfolio_img portfoil_imgset"
              /> */} </div>
                    </div>
                    <div className="space-x-7 flex justify-center py-10  bg-white w-full div_reverse flex-wrap portfolio_div">
                        <div className="appear" data-aos="fade-right" data-aos-delay="100">
                            <Image src={adventuregoro}
                                alt="Adventure Guru GIS web App image"
                                className="w-[340px] h-[190px] portfolio_img"/>
                        </div>
                        <div className="flex flex-col  items-start content_div appear"
                            // data-aos="fade-left"
                            // data-aos-delay="100"
                        >
                            <div className="flex justify-center items-center ">
                                <Image src={adventurelogo}
                                    alt="Adventure Guru GIS web App logo"
                                    className="w-10 h-10 "/>
                                <h1 className="text-xl font-medium px-3 portfolio_heading">
                                    Adventure Guru
                                </h1>
                            </div>
                            <div className="flex flex-col items-start max-w-md mx-auto ">
                                <p className="pt-3 portfolio_para">
                                    Adventure Guru is a inclusive video-based adventure guide that
                                                      aims to address the diversity problem in outdoor recreation.
                                                      Unlike other outlets that cater to a narrow demographic,
                                                      Adventure Guru welcomes everyone, regardless of their gear or
                                                      background. By showcasing people of all sizes, colors, ages,
                                                      sexualities, and abilities, the platform inspires individuals
                                                      worldwide to connect with nature and realize that outdoor
                                                      adventures are for everyone.The main purpose of the app is to
                                                      promote inclusivity and diversity in nature-based activities.
                                </p>
                                <h1 className="text-blue-900 cursor-pointer font-medium py-2">
                                    <Link href="https://adventureguru.org/adventure/" rel="noopener noreferrer" target="_blank">
                                        Visit!
                                    </Link>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-[#FAF9F6] space-x-7 flex justify-center py-10  w-full  flex-wrap portfolio_div">
                        <div className="flex flex-col  items-start content_div appear "
                            // data-aos="fade-right"
                            // data-aos-delay="300"
                        >
                            <div className="flex justify-center items-center ">
                                <div className="flex justify-center items-center ">
                                    <Image src={aerialgislogo}
                                        alt="aerialgis GIS web App logo"
                                        className="w-10 h-10 "/>
                                </div>
                                <h1 className="text-xl font-medium px-3 portfolio_heading">
                                    AerialGis
                                </h1>
                            </div>
                            <div className="flex flex-col items-start max-w-md mx-auto">
                                <p className="pt-3 portfolio_para">
                                    AerialGIS is a dynamic platform that revolutionizes the real
                                                      estate industry. With the power of Web GIS technologies, it
                                                      offers an intuitive interface to access comprehensive plot
                                                      information, including availability, reservation, and sold
                                                      statuses. Experience the future of property exploration
                                                      through AerialGIS, where a captivating 3D aerial imagery
                                                      display provides unparalleled insights into the location of
                                                      each plot. Discover the perfect property for your needs with
                                                      AerialGIS today.
                                </p>
                                <h1 className="text-blue-900 cursor-pointer font-medium py-2">
                                    <Link href="https://aerialgis.com/project?id=2b48f80e-e896-4305-b630-2ba26527b0fb" target="_blank">
                                        Visit!
                                    </Link>
                                </h1>
                            </div>
                        </div>
                        <div className="appear " data-aos="fade-left" data-aos-delay="100">
                            <Image src={aerialgis}
                                alt="aeriagis GIS web App image"
                                className="w-[340px] h-[190px] portfolio_img portfoil_imgset"/>
                        </div>
                    </div>

                    <div className="  bg-white space-x-7 flex justify-center py-10  w-full div_reverse flex-wrap portfolio_div">
                        <div className="appear" data-aos="fade-right" data-aos-delay="100">
                            <Image src={allglobe}
                                alt="Orbit3LABS GIS web App image"
                                className="w-[340px] h-[190px] portfolio_img portfoil_imgset"/>
                        </div>
                        <div className="flex flex-col  items-start content_div appear"
                            // data-aos="fade-right"
                            // data-aos-delay="300"
                        >

                            <div className="flex justify-center items-center ">
                                <Image src={allglobelogo}
                                    alt="Orbit3LABS GIS web App logo"
                                    className="w-10 h-10 "/>
                                <h1 className="text-xl font-medium px-3 portfolio_heading">
                                    ORBIT3LABS
                                </h1>
                            </div>
                            <div className="flex flex-col items-start max-w-md mx-auto">
                                <p className="pt-3 portfolio_para">
                                    This WebGIS app was developed for Orbit3Labs that brings you
                                                      real-time insights into Surface Urban Heat Island (SUHI)
                                                      values for major cities worldwide. With an intuitive
                                                      interface, the displays a color-based classification system
                                                      indicating whether SUHI values are high, low, or normal.
                                                      Additionally, it provides detailed inner and outer boundaries
                                                      for each city, ensuring accurate data representation. Explore
                                                      the impact of urban heat islands and make informed decisions
                                                      with our powerful SUHI visualization tool
                                </p>
                                <h1 className="text-blue-900 cursor-pointer font-medium py-2">
                                    <Link href="http://20.245.232.60/" rel="noopener noreferrer" target="_blank">
                                        Visit!
                                    </Link>
                                </h1>
                            </div>
                        </div>

                    </div>
                    <div className="space-x-7 flex justify-center py-10  bg-[#FAF9F6] w-full  flex-wrap portfolio_div ">

                        <div className="flex flex-col  items-start content_div appear">
                            <div className="flex justify-center items-center ">
                                <Image src={yawaterlogo}
                                    alt="yawater GIS web App logo"
                                    className="w-8 h-8 bg-gray-700"/>
                                <h1 className="text-xl font-medium px-3  portfolio_heading ">
                                    Yawater
                                </h1>
                            </div>
                            <div className="flex flex-col items-start max-w-md mx-auto">
                                <p className="pt-3 portfolio_para  ">
                                    This web app was created to inform people about the existence
                                                      of powerful water sources on our planet that can greatly
                                                      benefit the human body. It is inspired by the book "ONLY THE
                                                      TRUTH CAN SET YOU FREE, THE NEWEST TESTAMENT" written by Omar
                                                      Mashiach White. The main purpose of the website is to share
                                                      the valuable treasures of the world and to actively combat the
                                                      wickedness that poses a threat to nature.
                                </p>
                                <h1 className="text-blue-900 cursor-pointer font-medium py-2">
                                    <Link href="https://www.yawater.com/" rel="noopener noreferrer" target="_blank">
                                        Visit!
                                    </Link>
                                </h1>
                            </div>
                        </div>
                        <div className="appear" data-aos="fade-left" data-aos-delay="100">
                            <Image src={yawater}
                                alt="Yawater GIS web App image"
                                className="w-[340px] h-[190px] portfolio_img"/>
                        </div>
                    </div>
                    <div className="  bg-white space-x-7 flex justify-center py-10   w-full div_reverse flex-wrap portfolio_div">
                        <div className="appear" data-aos="fade-right" data-aos-delay="100">
                            <Image src={churchpoints}
                                alt="crosschurchpoints GIS web App image"
                                className="w-[340px] h-[190px] portfolio_img portfoil_imgset"/>
                        </div>
                        <div className="flex flex-col  items-start content_div appear">
                            <div className="flex justify-center items-center ">
                                <Image src={churchlogo}
                                    alt="Churchpoints GIS web App logo"
                                    className="w-10 h-10 "/>
                                <h1 className="text-xl font-medium px-3 portfolio_heading">
                                    CrosspointsChurch
                                </h1>
                            </div>
                            <div className="flex flex-col items-start max-w-md mx-auto">
                                <p className="pt-3 portfolio_para">
                                    Cross Points Church, located in Kansas City, has created an
                                                      innovative platform designed to streamline and facilitate
                                                      various church tasks for the local community. This
                                                      user-friendly platform enables nearby citizens to log in and
                                                      actively participate in important activities such as prayer,
                                                      sharing, and caring. By updating their task statuses within
                                                      the platform, individuals contribute to a collective effort
                                                      that can be visualized on a web map featuring a sophisticated
                                                      graduated color scheme. Experience the power of community
                                                      engagement and collaboration with Cross Points Church's
                                                      cutting-edge task monitoring and distribution platform.
                                </p>
                                <h1 className="text-blue-900 cursor-pointer font-medium py-2">
                                    <Link href="https://3for30.crosspointschurch.com/" rel="noopener noreferrer" target="_blank">
                                        Visit!
                                    </Link>
                                </h1>
                            </div>
                        </div>

                    </div>
                    <div className=" bg-[#FAF9F6] space-x-7 flex justify-center py-10 w-full  flex-wrap portfolio_div ">

                        <div className="flex flex-col  items-start content_div appear "
                            // data-aos="fade-left"
                            // data-aos-delay="300"
                        >
                            <div className="flex justify-center items-center ">
                                <h1 className="text-xl font-medium px-3 portfolio_heading">
                                    MyDisasterMap
                                </h1>
                            </div>
                            <div className="flex flex-col items-start max-w-md mx-auto">
                                <p className="pt-3 portfolio_para  ">
                                   My DisasterMap" is a powerful Web GIS App designed to empower users in reporting and tracking various categories of disasters. With its intuitive interface, users can quickly report disasters and provide crucial details such as location and specifics. The app also ensures seamless communication by notifying nearby users about reported disasters. By visualizing the reported incidents on an interactive map, users can stay informed and make informed decisions during critical situations.
                                </p>
                            </div>
                        </div>
                        <div className="appear" data-aos="fade-left" data-aos-delay="100">
                            <Image src={disastermap}
                                alt="MyDisaster GIS web App image"
                                className="w-[340px] h-[190px] portfolio_img"/>
                        </div>
                    </div>
                    <div className="space-x-7 flex justify-center py-10  bg-[#FAF9F6] w-full flex-wrap div_reverse portfolio_div ">
                        <div className="appear" data-aos="fade-left" data-aos-delay="100">
                            <Image src={prindin}
                                alt="prindin-consulting-Dashboard image"
                                className="w-[340px] h-[190px] portfolio_img"/>
                        </div>
                        <div className="flex flex-col  items-start content_div appear "
                            // data-aos="fade-left"
                            // data-aos-delay="300"
                        >
                            <div className="flex justify-center items-center ">
                                <h1 className="text-xl font-medium px-3 portfolio_heading">
                                    Pridin Consulting Dashboard
                                </h1>
                            </div>
                            <div className="flex flex-col items-start max-w-md mx-auto">
                                <p className="pt-3 portfolio_para  ">
                                    The Pridin Consulting Dashboard is a sophisticated web portal designed specifically for Pridin Consulting Ltd. Its primary objective is to efficiently monitor tank locations throughout the country. This application serves as a vital tool for investors, providing them with timely updates and comprehensive overviews of their investments. Developed in response to the challenges posed by the COVID-19 pandemic, the dashboard incorporates advanced reporting capabilities, allowing users to apply filters based on specific sites and locations, thereby enhancing the overall reporting experience.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="space-x-7 flex justify-center py-10  bg-[#FAF9F6] w-full flex-wrap  portfolio_div ">

                        <div className="flex flex-col  items-start content_div appear "
                            // data-aos="fade-left"
                            // data-aos-delay="300"
                        >
                            <div className="flex justify-center items-center ">
                                <h1 className="text-xl font-medium px-3 portfolio_heading">
                                    Internet Coverage - Tribal Areas
                                </h1>
                            </div>
                            <div className="flex flex-col items-start max-w-md mx-auto">
                                <p className="pt-3 portfolio_para  ">
                                    This cutting-edge web-based Geographic Information System (WebGIS) application has been developed to address the internet connectivity needs in tribal areas. By leveraging various band spectrums, this solution offers extensive coverage for wireless internet networks. The application boasts a wide range of reporting tools, enabling users to analyze and evaluate the network's reach and performance.
                                </p>
                            </div>
                        </div>
                        <div className="appear" data-aos="fade-left" data-aos-delay="100">
                            <Image src={internetcoverage}
                                alt="interent-coverage-tribal-areas web map image"
                                className="w-[340px] h-[190px] portfolio_img"/>
                        </div>
                    </div>
                    <div className="space-x-7 flex justify-center py-10  bg-[#FAF9F6] w-full flex-wrap div_reverse portfolio_div ">
                        <div className="appear" data-aos="fade-left" data-aos-delay="100">
                            <Image src={towncouncil}
                                alt="towncouncil webGis web app image"
                                className="w-[340px] h-[190px] portfolio_img"/>
                        </div>
                        <div className="flex flex-col  items-start content_div appear ">
                            <div className="flex justify-center items-center ">
                                <h1 className="text-xl font-medium px-3 portfolio_heading">
                                    Town Council WebGIS
                                </h1>
                            </div>
                            <div className="flex flex-col items-start max-w-md mx-auto">
                                <p className="pt-3 portfolio_para  ">
                                    The Town Council WebGIS is a comprehensive mapping tool developed exclusively for the Bletchley and Fenny Stratford Town Council. Its primary function is to facilitate the identification and highlighting of various landmarks owned by the council. This user-friendly web-based Geographic Information System (WebGIS) empowers council members to efficiently manage and showcase their properties and assets.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className=" bg-[#FAF9F6] space-x-7 flex justify-center py-10   w-full  flex-wrap portfolio_div">

                        <div className="flex flex-col  items-start content_div appear ">
                            <div className="flex justify-center items-center ">
                                <h1 className="text-xl font-medium px-3 portfolio_heading">
                                    Student Management System
                                </h1>
                            </div>
                            <div className="flex flex-col items-start max-w-md mx-auto">
                                <p className="pt-3 portfolio_para  ">
                                    The Student Management System is an advanced mapping application designed for Indian Hills. It serves as a centralized platform for monitoring and assessing the status of enrolled and accepted students across all branches throughout the country. This application streamlines record-keeping processes and enables swift updates and data sharing with business partners. With its comprehensive features, the Student Management System significantly enhances overall student management and administrative efficiency for Indian Hills.
                                </p>
                            </div>
                        </div>
                        <div className="appear" data-aos="fade-left" data-aos-delay="100">
                            <Image src={studentsystem}
                                alt="student management system Dashboard image"
                                className="w-[340px] h-[190px] portfolio_img"/>
                        </div>
                    </div>


                </div>
                <div className="bg-white py-8 flex flex-col justify-center items-center w-[100%] h-[50%]">
                    <div> {" "}
                        <h1 className="pb-10 subheading  text-center heading text-6xl md:text-4xl font-bold text-gray-600">
                            Our Worldwide Clientele
                        </h1>
                    </div>

                    <div className="flex justify-center justify-items-center items-center">
                        <Image src={mapimg}
                            alt="clientel GIS services map Image shows worlwide clients"
                            className="w-[100%] h-[100%]"/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Portfolio;

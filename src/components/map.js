import * as React from "react";
import { useEffect } from "react";
import Head from "next/head";

export const Mapcontainer = () => {
  useEffect(() => {
    const mapboxgl = require("mapbox-gl"); // Import mapbox-gl

    mapboxgl.accessToken =
      "pk.eyJ1IjoiYXJmYWtsIiwiYSI6ImNsYnQzd284eDA5OGUzcHBmc2VjOTJ4dzEifQ.RFRiN_WHNN8c4zO7nt2XLA";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      // style: 'mapbox://styles/mapbox/satellite-v9',
      projection: "globe",
      zoom: 1.5,
      center: [73.08915126688527, 33.56205004346023],
    });

    map.on("style.load", () => {
      map.setFog({});
    });

     const secondPerRevolution = 60;
      const degreesPerSecond = 360 / secondPerRevolution;
      let previousTime = 0;

      function animate(time) {
        const delta = time - previousTime;
        previousTime = time;
        map.rotateTo(map.getBearing() + degreesPerSecond * delta / 1000, {duration: 0});
        requestAnimationFrame(animate);
      }

      map.on('load', () => {
        requestAnimationFrame(animate);
      });

     // enable map so that user can interact with it
    map.dragRotate.enable();
    map.touchZoomRotate.enableRotation();
    




    // const secondsPerRevolution = 120;

    // const maxSpinZoom = 5;

    // const slowSpinZoom = 3;

    // let userInteracting = true;
    // let spinEnabled = true;

    // function spinGlobe() {
    //   const zoom = map.getZoom();
    //   if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
    //     let distancePerSecond = 360 / secondsPerRevolution;
    //     if (zoom > slowSpinZoom) {
    //       const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
    //       distancePerSecond *= zoomDif;
    //     }
    //     const center = map.getCenter();
    //     center.lng -= distancePerSecond;

    //     map.easeTo({ center, duration: 1000, easing: (n) => n });
    //   }
    // }

    // map.on("mousedown", () => {
    //   userInteracting = true;
    // });

    // map.on("mouseup", () => {
    //   userInteracting = false;
    //   spinGlobe();
    // });

    // map.on("dragend", () => {
    //   userInteracting = false;
    //   spinGlobe();
    // });
    // map.on("pitchend", () => {
    //   userInteracting = false;
    //   spinGlobe();
    // });
    // map.on("rotateend", () => {
    //   userInteracting = false;
    //   spinGlobe();
    // });

    // map.on("moveend", () => {
    //   spinGlobe();
    // });

    // spinGlobe();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css"
          rel="stylesheet"
        />
        <script src="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js"></script>
      </Head>

      <div id="map" style={{ width: "50%", height: "50vh" }}></div>
    </>
  );
};

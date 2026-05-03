"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSProvider = () => {
    const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    setIsClient(true)
  }, []);

   return <h1>{isClient ? '' : ''}</h1>
};

export default AOSProvider;
"use client";

import Footer from "@/component/Footer";
import Profile from "@/component/Profile";
import React, { Suspense } from "react";

const MyProfilePage = () => {
  
  return (
   <div>
    <Suspense fallback={<p>Loading..</p>}>
    <Profile></Profile>
   </Suspense>
   <Footer></Footer>
   </div>
  );
};

export default MyProfilePage;

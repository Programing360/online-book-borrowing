"use client";

import Profile from "@/component/Profile";
import React, { Suspense } from "react";

const MyProfilePage = () => {
  
  return (
   <Suspense fallback={<p>Loading..</p>}>
    <Profile></Profile>
   </Suspense>
  );
};

export default MyProfilePage;

import { useSession } from "@/lib/auth-client";
import { CircleUser, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Profile = () => {
  const { data } = useSession();
  const user = data?.user;
  return (
    <div
      data-aos="fade-down"
      suppressHydrationWarning
      className="shadow-2xl rounded-2xl flex flex-col items-center justify-center mx-auto w-full max-w-2xl p-4 sm:p-6 bg-white dark:text-black"
    >
      <div className="w-full text-purple-400">
        <Link href={"/"}>
          <House />
        </Link>
      </div>
      {user?.image ? (
        <Image
          src={user?.image || ""}
          alt="profile"
          width={70}
          height={70}
          className="rounded-full"
        ></Image>
      ) : (
        <CircleUser size={80} />
      )}

      <h3 className="text-xl font-bold text-center">{user?.name}</h3>
      <p>{user?.email}</p>
      {user ? (
        <Link href={"/myProfile/updateProfile"}>
          <button className="btn bg-purple-500 mt-4 text-white">Update</button>
        </Link>
      ) : (
        <Link href={"/login"}>
          <button className="btn bg-purple-500 mt-4 text-white">Update</button>
        </Link>
      )}

      <div className=" w-full mt-8 overflow-x-auto">
        <div className="min-w-[500px] flex md:gap-28 gap-4 justify-center items-center leading-9">
          <div className="md:ml-20 ml-4 font-semibold w-full space-y-4">
            <h3>Id</h3>
            <h3>Name</h3>
            <h3>Email</h3>
            <h3>Email Verified</h3>
            <h3>Image Url</h3>
            <h3>Created At</h3>
            <h3>Updated At</h3>
          </div>
          <div className="space-y-3 break-al">
            <p>{user?.id}</p>
            <p>{user?.name}</p>
            <p>{user?.email}</p>
            {user?.emailVerified === false ? (
              <p className="bg-red-100 text-red-600 w-10 text-center rounded-xl">
                No
              </p>
            ) : (
              <p className="bg-green-100 text-green-600 w-10 text-center rounded-xl">
                True
              </p>
            )}

            <p className="">{user?.image.toString()}</p>
            {new Date(user?.createdAt).toLocaleDateString()}
            <p>{new Date(user?.updatedAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

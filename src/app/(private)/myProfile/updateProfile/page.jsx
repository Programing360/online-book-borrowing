"use client";
import { authClient, useSession } from "@/lib/auth-client";
import { ArrowLeft, CircleUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const UpdatePage = () => {
  const { data } = useSession();
  const user = data?.user;
  const { register, handleSubmit } = useForm();

  const handleUpdateForm = async (userData) => {
    const file = userData.image;
    const name = userData.name;
    await authClient.updateUser({
      image: file,
      name: name,
    });

  };
  return (
    <div className="shadow-2xl rounded-2xl p-6 flex flex-col items-center md:container mx-auto md:w-5/12 bg-white dark:text-black">
      <Link className="text-start w-full" href={"/myProfile"}>
        <ArrowLeft size={30}></ArrowLeft>
      </Link>
      {user?.image ? (
        <Image
          src={user?.image}
          alt="profile"
          width={80}
          height={80}
          className="rounded-full object-cover border"
        />
      ) : (
        <CircleUser size={80} />
      )}

      <h3 className="text-xl font-bold text-center">{user?.name}</h3>
      <p>{user?.email}</p>

      <form className="mt-4 space-y-2" onSubmit={handleSubmit(handleUpdateForm)}>
        <div>
          <label className="label">Profile Image</label>
          <input
            type="text"
            {...register("image", { required: true })}
            className="border rounded py-1 w-full"
            placeholder="Enter image URL"
          />
        </div>
        <div className="">
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Type here"
            className="input w-full dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="btn bg-purple-600 text-white w-full hover:bg-purple-700 mt-6"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdatePage;

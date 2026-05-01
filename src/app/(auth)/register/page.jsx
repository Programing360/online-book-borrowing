"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { Router } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterForm = async (userData) => {
    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.photoUrl,
      fetchOptions: {
        onSuccess: () => {
          Router.push("/");
        },
      }, 
    });
    if (error) {
      toast.error(error.message || "Something is wrong");
    }
    if (data?.user) {
      toast.success("User register Successful");
    }
    console.log(data, error);
  };

  return (
    <div className="">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="card bg-base-100 w-full  shrink-0 shadow-2xl p-4 md:p-10">
            <div className="text-center">
              <h1 className="text-2xl md:text-5xl font-bold text-amber-950">
                Register your account
              </h1>
            </div>
            <hr className="mt-6 text-gray-400" />
            <div className="card-body md:w-[400px] mx-auto">
              <form onSubmit={handleSubmit(handleRegisterForm)}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    className="input w-full outline-0"
                    placeholder="Write your Name"
                  />
                  <label className="label">Photo URL</label>
                  <input
                    type="url"
                    {...register("photoUrl", { required: true })}
                    className="input w-full outline-0"
                    placeholder="Enter your Photo URL"
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="input w-full outline-0"
                    placeholder="Write your Email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    className="input w-full outline-0"
                    placeholder="write your Password"
                  />
                  {errors && <p>password must be 8 character.</p>}
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn bg-amber-800 text-white mt-4">
                    Login
                  </button>
                  <p className="text-center">
                    Already Have an account?{" "}
                    <Link href={"/login"} className="text-red-400">
                      Login
                    </Link>
                  </p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

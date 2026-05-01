"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const handleLoginForm = async (userData) => {
    const { data, error } = await authClient.signIn.email({
      email: userData.email, // required
      password: userData.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(data, error);
  };

  return (
    <div className="">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="card bg-base-100 w-full  shrink-0 shadow-2xl p-10">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-amber-950">
                Login your account
              </h1>
            </div>
            <hr className="mt-6 text-gray-400" />
            <div className="card-body w-[400px] mx-auto">
              <form onSubmit={handleSubmit(handleLoginForm)}>
                <fieldset className="fieldset">
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

export default LoginPage;

"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLoginForm = async (userData) => {
    const { data, error } = await authClient.signIn.email({
      email: userData.email, // required
      password: userData.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message || "Something is wrong");
    }
    if (data?.user) {
      toast.success("User register Successful");
    }
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    if(data){
      toast.success('Login Successful')
    }

  };

  return (
    <div className="w-full ">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl p-4 md:p-10">
            <div className="text-center">
              <h1 className="text-2xl md:text-5xl font-bold text-amber-950 dark:text-white">
                Login your account
              </h1>
            </div>
            <hr className="mt-6 text-gray-400" />
            <div className="card-body w-90 md:w-[400px] mx-auto">
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
                  {errors.password && <p>password must be 8 character.</p>}
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn bg-amber-800 text-white mt-4">
                    Login
                  </button>
                  <p className="text-center">
                    Don't Have an account?{" "}
                    <Link href={"/register"} className="text-red-400">
                      Register
                    </Link>
                  </p>
                </fieldset>
              </form>
              <button
                onClick={handleGoogleSignIn}
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

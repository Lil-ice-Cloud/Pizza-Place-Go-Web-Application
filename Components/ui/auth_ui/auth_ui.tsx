"use client";

import { useState } from "react";

export default function AuthUI() {
    const [isLoginMode, setIsLoginMode] = useState(true);

    return (
        <>

            <div className="
            mx-auto
            w-107.5
            bg-black
            p-8
            rounded-2xl
            shadow-lg
            ">
                <div>
                    {/* Header Layout */}
                    <div className="
                    flex
                    justify-center
                    mb-4
                    ">
                        <h2 className="
                        text-3xl
                        font-semibold
                        text-center
                        text-orange-400
                        ">
                            {isLoginMode ? "Login" : "Sign Up"}
                        </h2>
                    </div>

                    {/* Switch Tab controls */}
                    <div className="
                    relative
                    flex
                    h-12
                    mb-6
                    border
                    border-gray-950
                    rounded-full
                    overflow-hidden
                    ">
                        <button
                            type="button"
                            onClick={() => setIsLoginMode(true)}
                            className={`
                            w-1/2 
                            text-lg 
                            font-medium 
                            transition-all 
                            duration-300 
                            z-10 ${isLoginMode ? "text-white" : "text-orange-400"}`}
                        >
                            Logging
                        </button>

                        <button
                            type="button"
                            onClick={() => setIsLoginMode(false)}
                            className={`
                            w-1/2 
                            text-lg 
                            font-medium 
                            transition-all 
                            duration-300 
                            z-10 ${isLoginMode ? "text-orange-400" : "text-white"}`}
                        >
                            Sign Up
                        </button>

                        {/* Sliding background indicator capsule */}
                        <div className={`
                        absolute 
                        top-0 
                        h-full 
                        w-1/2 
                        rounded-full 
                        bg-gradient-to-r 
                        from-orange-600 
                        via-orange-700
                        to-orange-400
                        transition-all 
                        duration-300 ${isLoginMode ? "left-0" : "left-1/2"}`}
                        ></div>
                    </div>
                </div>

                {/* Form Section */}
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    {!isLoginMode && (
                        <input
                            type="text"
                            placeholder="Name"
                            required
                            className="
                            w-full
                            p-3
                            border-b-2
                            border-gray-300
                            outline-none
                            focus:border-cyan-500
                            placeholder-gray-500
                            text-black
                            "
                        />
                    )}

                    <input
                        type="email"
                        placeholder="Email Address"
                        required
                        className="
                        w-full
                        p-3
                        border-b-2
                        border-gray-300
                        outline-none
                        focus:border-cyan-500
                        placeholder-gray-500
                        text-black
                        "
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        required
                        className="
                        w-full
                        p-3
                        border-b-2
                        border-gray-300
                        outline-none
                        focus:border-cyan-500
                        placeholder-gray-500
                        text-black
                        "
                    />

                    {!isLoginMode && (
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            required
                            className="
                            w-full
                            p-3
                            border-b-2
                            border-gray-300
                            outline-none
                            focus:border-cyan-500
                            placeholder-gray-500
                            text-black
                            "
                        />
                    )}

                    {/* Forget password shows ONLY when logging in */}
                    {isLoginMode && (
                        <div className="text-right">
                            <p className="
                            text-orange-400
                            hover:underline
                            cursor-pointer
                            text-sm
                            ">
                                Forget Password
                            </p>
                        </div>
                    )}

                    {/* Submit Button */}
                    <p>
                        <button
                            type="submit"
                            className="
                            w-full
                            p-3
                            bg-gradient-to-r
                            from-orange-600
                            via-orange-700
                            to-orange-400
                            text-white
                            rounded-full
                            text-lg
                            font-medium
                            hover:opacity-90
                            transition
                            "
                        >
                            {isLoginMode ? "Log In" : "Sign Up"}
                        </button>
                    </p>

                    {/* Switch navigation helper */}
                    <p className="
                    text-center
                    text-sm
                    text-gray-600
                    ">
                        {isLoginMode ? "Don't have an Account? " : "Already have an Account? "}
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsLoginMode(!isLoginMode);
                            }}
                            className="
                            text-orange-400
                            hover:underline
                            font-medium
                            "
                        >
                            {isLoginMode ? "SignUp Now" : "Login"}
                        </a>
                    </p>
                </form>
            </div>
        </>
    );
}

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const Login = () => {
    return (
        <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Or{' '}
                    <Link href="/signup"
                        className="font-semibold text-pink-600 hover:text-pink-500 cursor-pointer">Sign Up
                    </Link>
                </p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border py-2 text-gray-900 placeholder-gray-400 focus:ring-pink-600 focus:border-pink-600 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <Link href="/forgot"
                                    className="font-semibold text-pink-600 hover:text-pink-500 cursor-pointer">Forgot password?
                                </Link>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border py-2 text-gray-900 placeholder-gray-400 focus:ring-pink-600 focus:border-pink-600 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-pink-600 text-white font-semibold rounded-md shadow-md hover:bg-pink-500 focus:ring-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-100"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <span className="font-semibold text-pink-600 hover:text-pink-500 cursor-pointer">
                        Start a 14-day free trial
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;


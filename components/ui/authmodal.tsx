"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex items-center gap-2 justify-center">
      <button
        onClick={openModal}
        type="button"
        className="text-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none ring-1 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
      >
        Login
      </button>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center whitespace-nowrap"
      >
        Sign Up
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal */}
          <div
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-blue-200/20 bg-white/10 bg-blue-50/10 p-6 shadow-xl backdrop-blur-xl dark:border-blue-500/20 dark:bg-blue-900/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-500 transition-colors hover:bg-gray-200/20 hover:text-gray-700 focus:outline-none"
            >
              <X size={20} />
            </button>

            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Welcome
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Sign in to your account or create a new one
              </p>
            </div>

            {/* Custom Tabs */}
            <div className="w-full">
              {/* Tab Headers */}
              <div className="mb-6 grid w-full grid-cols-2 overflow-hidden rounded-lg bg-gray-100/30 p-1 dark:bg-gray-800/30">
                <button
                  onClick={() => setActiveTab("login")}
                  className={`py-2 text-sm font-medium transition-all ${
                    activeTab === "login"
                      ? "rounded-md bg-white shadow-sm dark:bg-gray-700 dark:text-white"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setActiveTab("signup")}
                  className={`py-2 text-sm font-medium transition-all ${
                    activeTab === "signup"
                      ? "rounded-md bg-white shadow-sm dark:bg-gray-700 dark:text-white"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {/* Login Tab Content */}
              <div
                className={`space-y-4 ${activeTab === "login" ? "block" : "hidden"}`}
              >
                <div className="space-y-2">
                  <label
                    htmlFor="email-login"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    id="email-login"
                    type="email"
                    placeholder="m@example.com"
                    className="w-full rounded-md border border-blue-200/30 bg-white/20 px-3 py-2 text-gray-900 placeholder-gray-500 backdrop-blur-sm focus:border-blue-300/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 dark:border-blue-500/30 dark:text-white dark:placeholder-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="password-login"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <input
                    id="password-login"
                    type="password"
                    className="w-full rounded-md border border-blue-200/30 bg-white/20 px-3 py-2 text-gray-900 placeholder-gray-500 backdrop-blur-sm focus:border-blue-300/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 dark:border-blue-500/30 dark:text-white dark:placeholder-gray-400"
                  />
                </div>
                <div className="text-right">
                  <a
                    href="#"
                    className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400"
                  >
                    Forgot password?
                  </a>
                </div>
                <button className="w-full rounded-md bg-gradient-to-r from-blue-400 to-blue-600 py-2 font-medium text-white shadow-md transition-all hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Login
                </button>
              </div>

              {/* Signup Tab Content */}
              <div
                className={`space-y-4 ${activeTab === "signup" ? "block" : "hidden"}`}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      First name
                    </label>
                    <input
                      id="first-name"
                      placeholder="John"
                      className="w-full rounded-md border border-blue-200/30 bg-white/20 px-3 py-2 text-gray-900 placeholder-gray-500 backdrop-blur-sm focus:border-blue-300/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 dark:border-blue-500/30 dark:text-white dark:placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Last name
                    </label>
                    <input
                      id="last-name"
                      placeholder="Doe"
                      className="w-full rounded-md border border-blue-200/30 bg-white/20 px-3 py-2 text-gray-900 placeholder-gray-500 backdrop-blur-sm focus:border-blue-300/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 dark:border-blue-500/30 dark:text-white dark:placeholder-gray-400"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email-signup"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    id="email-signup"
                    type="email"
                    placeholder="m@example.com"
                    className="w-full rounded-md border border-blue-200/30 bg-white/20 px-3 py-2 text-gray-900 placeholder-gray-500 backdrop-blur-sm focus:border-blue-300/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 dark:border-blue-500/30 dark:text-white dark:placeholder-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="password-signup"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <input
                    id="password-signup"
                    type="password"
                    className="w-full rounded-md border border-blue-200/30 bg-white/20 px-3 py-2 text-gray-900 placeholder-gray-500 backdrop-blur-sm focus:border-blue-300/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 dark:border-blue-500/30 dark:text-white dark:placeholder-gray-400"
                  />
                </div>
                <button className="w-full rounded-md bg-gradient-to-r from-blue-400 to-blue-600 py-2 font-medium text-white shadow-md transition-all hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Create Account
                </button>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                ⚠️ i have disabled Login feature is disabled for MVP due to
                potential Supabase security risks and costs
              </p>
            </div>

            <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
              By continuing, you agree to our
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
              >
                {" "}
                Terms of Service{" "}
              </a>
              and
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
              >
                {" "}
                Privacy Policy
              </a>
              .
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

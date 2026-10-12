
"use client";

import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signUp.email({
      ...user,
    });

    if (data) {
      toast.success("সফলভাবে সাইন আপ হয়েছে!", {
        style: {
          border: "1px solid #dc2626",
          padding: "16px",
          color: "#991b1b",
        },
        iconTheme: {
          primary: "#dc2626",
          secondary: "#FFFAEE",
        },
      });
    }

    if (error) {
      toast.error("সাইন আপ করতে সমস্যা হয়েছে।");
    }
  };

  const handleGoogleSignUp = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-red-50 via-white to-rose-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-red-100 bg-white shadow-2xl shadow-red-100/60 md:grid-cols-2">

          {/* Left Side - Branding */}
          <div className="relative hidden overflow-hidden bg-linear-to-br from-red-800 via-red-600 to-rose-500 p-8 text-white md:flex md:flex-col md:justify-between lg:p-12">

            {/* Decorative Circles */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10" />
            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/10" />

            <div className="relative z-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-xl">
                <img
                  src="/logo.webp"
                  alt="Bangla News 24 Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
                Bangla News 24
              </h1>

              <p className="mt-3 text-sm leading-6 text-white/85 lg:text-base">
                বাংলা নিউজ পোর্টাল • নির্ভরযোগ্য সংবাদ
              </p>
            </div>

            <div className="relative z-10">
              <div className="mb-5 h-px w-20 bg-white/40" />

              <p className="text-sm font-medium text-white/90">
                সত্য ও নির্ভরযোগ্য সংবাদ
              </p>

              <p className="mt-1 text-xs text-white/70">
                দেশ ও বিশ্বের সর্বশেষ খবর এক নজরে
              </p>
            </div>
          </div>

          {/* Right Side - Sign Up */}
          <div className="p-6 sm:p-8 lg:p-12">

            {/* Mobile Logo */}
            <div className="mb-7 flex flex-col items-center md:hidden">
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-red-50 p-2 shadow-md">
                <img
                  src="/logo.webp"
                  alt="Bangla News 24 Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <h1 className="mt-3 text-xl font-extrabold text-red-700">
                Bangla News 24
              </h1>

              <p className="mt-1 text-xs text-gray-500">
                নির্ভরযোগ্য সংবাদ • ২৪/৭
              </p>
            </div>

            {/* Heading */}
            <div className="mb-7 text-center md:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Create Account
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                সাইন আপ
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                নতুন অ্যাকাউন্ট তৈরি করুন এবং সর্বশেষ সংবাদ পেতে শুরু করুন।
              </p>
            </div>

            {/* Sign Up Form */}
            <form onSubmit={onSubmit} className="space-y-4">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  নাম
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
                  placeholder="আপনার নাম লিখুন"
                />
              </div>

              {/* Image URL */}
              <div>
                <label
                  htmlFor="image"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  প্রোফাইল ছবির URL
                  <span className="ml-1 text-xs font-normal text-gray-400">
                    (ঐচ্ছিক)
                  </span>
                </label>

                <input
                  id="image"
                  name="image"
                  type="url"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  ইমেইল
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
                  placeholder="yourname00@gmail.com"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  পাসওয়ার্ড
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  minLength={6}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
                  placeholder="কমপক্ষে ৬ অক্ষর"
                />
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-red-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl active:translate-y-0"
              >
                সাইন আপ করুন
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />

              <span className="text-xs font-medium text-gray-400">
                অথবা
              </span>

              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Google Sign Up */}
            <button
              onClick={handleGoogleSignUp}
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-700 shadow-sm transition-all duration-300 hover:border-red-200 hover:bg-red-50 hover:shadow-md"
            >
              {/* Google Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="h-5 w-5"
              >
                <path
                  fill="#FFC107"
                  d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20c10 0 19-7.3 19-20 0-1.2-.1-2.3-.4-3.5z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.4 4.3-17.7 10.7z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.1 0 9.7-1.9 13.2-5l-6.1-5.1C29.4 35.3 26.9 36 24 36c-5.3 0-9.7-3.3-13.3-8l-6.5 5C9.5 39.3 16.2 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.2 5.5l6.1 5.1C36.8 39.1 44 34 44 24c0-1.2-.1-2.3-.4-3.5z"
                />
              </svg>

              Google দিয়ে সাইন আপ করুন
            </button>

            {/* Footer */}
            <p className="mt-7 text-center text-xs leading-5 text-gray-400">
              অ্যাকাউন্ট তৈরি করার মাধ্যমে আপনি আমাদের সেবার শর্তাবলীতে
              সম্মত হচ্ছেন।
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;

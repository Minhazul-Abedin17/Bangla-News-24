"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-red-50 via-white to-rose-100 px-4 py-10 sm:px-6">
      <div className="w-full max-w-3xl text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Link href="/" className="group">
            <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-md ring-1 ring-red-100 transition-all duration-200 group-hover:shadow-lg">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-red-50 p-1.5">
                <img
                  src="/logo.webp"
                  alt="Bangla News 24"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="text-left">
                <h2 className="text-lg font-extrabold text-red-700">
                  Bangla News 24
                </h2>

                <p className="text-[11px] font-medium text-gray-500">
                  বাংলা নিউজ পোর্টাল
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* 404 Card */}
        <div className="overflow-hidden rounded-3xl border border-red-100 bg-white p-6 shadow-xl shadow-red-100/50 sm:p-10 md:p-14">
          {/* 404 Number */}
          <div className="relative">
            <h1 className="select-none text-[100px] font-black leading-none tracking-tighter text-red-600 sm:text-[150px] md:text-[190px]">
              404
            </h1>

            {/* Decorative text */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="rounded-full bg-white/90 px-4 py-2 shadow-md ring-1 ring-red-100">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-600 sm:text-sm">
                  Page Missing
                </span>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="mx-auto max-w-xl">
            <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
              এই পাতাটি খুঁজে পাওয়া যায়নি
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
              দুঃখিত! আপনি যে সংবাদ বা পেজটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে,
              পরিবর্তন করা হয়েছে অথবা URL-টি সঠিক নয়।
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            {/* Home */}
            <Link
              href="/"
              className="rounded-xl bg-red-600 px-7 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-red-700 hover:shadow-lg active:scale-95"
            >
              🏠 হোম পেজে যান
            </Link>

            {/* Go Back */}
            <button
              onClick={() => router.back()}
              className="rounded-xl border border-gray-200 bg-white px-7 py-3 text-sm font-bold text-gray-700 shadow-sm transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600 active:scale-95"
            >
              ← আগের পেজে ফিরে যান
            </button>
          </div>

          {/* Helpful links */}
          <div className="mt-10 border-t border-gray-100 pt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              আপনি চাইলে
            </p>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
              <Link
                href="/"
                className="font-medium text-gray-500 transition hover:text-red-600"
              >
                সর্বশেষ সংবাদ
              </Link>

              <Link
                href="/politics"
                className="font-medium text-gray-500 transition hover:text-red-600"
              >
                রাজনীতি
              </Link>

              <Link
                href="/"
                className="font-medium text-gray-500 transition hover:text-red-600"
              >
                জনপ্রিয় সংবাদ
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} Bangla News 24 • সত্য ও নির্ভরযোগ্য সংবাদ
        </p>
      </div>
    </main>
  );
};

export default NotFound;

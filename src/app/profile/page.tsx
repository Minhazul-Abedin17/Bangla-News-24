"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";

const ProfilePage = () => {
  const [show, setShow] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };

    await authClient.updateUser({
      name: newUserData.name,
      image: newUserData.image,
    });

    setShow(false);
  };

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const handleProfileShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-red-50 via-white to-rose-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            Account
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            My Profile
          </h1>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Manage your account information and profile settings
          </p>
        </div>

        {/* Profile Card */}
        <section className="overflow-hidden rounded-3xl border border-red-100 bg-white shadow-xl shadow-red-100/50">
          {/* Cover */}

          {/* Cover */}

          <div className="relative h-32 overflow-hidden bg-linear-to-r from-red-800 via-red-600 to-rose-500 sm:h-40">
            {/* Decorative background */}
            <div className="absolute -right-12 -top-16 h-40 w-40 rounded-full bg-white/10" />
            <div className="absolute right-32 -bottom-24 h-48 w-48 rounded-full bg-white/10" />

            {/* Branding */}
            <div className="absolute inset-0 flex items-center">
              <div className="ml-44 flex items-center gap-3 sm:ml-52 sm:gap-4 md:ml-56">
                {/* Logo */}
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-2 shadow-lg sm:flex sm:h-14 sm:w-14 md:h-16 md:w-16">
                  <img
                    src="/logo.webp"
                    alt="Bangla News 24 Logo"
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Brand Text */}
                <div className="text-white">
                  <h2 className="text-lg font-extrabold tracking-tight sm:text-2xl md:text-3xl">
                    Bangla News 24
                  </h2>
                  <p className="mt-1 text-sm font-bold">24/7 News Portal</p>

                  <p className="mt-0.5 text-[10px] font-medium text-white/85 sm:text-xs md:text-sm">
                    বাংলা নিউজ পোর্টাল • নির্ভরযোগ্য সংবাদ
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="relative px-5 pb-7 sm:px-8 lg:px-10">
            {/* Avatar */}
            <div className="-mt-16 mb-5 flex justify-center sm:-mt-20 sm:justify-start">
              <Link href="/profile">
                <div className="rounded-full bg-white p-1.5 shadow-xl">
                  <div className="h-28 w-28 overflow-hidden rounded-full ring-4 ring-red-500 sm:h-36 sm:w-36">
                    <img
                      src={user?.image || "/default-avatar.png"}
                      alt={user?.name || "User"}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* User Info */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  {user?.name || "User"}
                </h2>

                <p className="mt-1 text-gray-500">
                  {user?.email || "No email available"}
                </p>

                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Active Account
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-end">
                <button
                  onClick={handleProfileShow}
                  className="rounded-xl bg-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-red-700 hover:shadow-lg active:scale-95"
                >
                  {show ? "Close Editor" : "Edit Profile"}
                </button>

                <button
                  onClick={handleSignOut}
                  className="rounded-xl border border-red-200 bg-white px-6 py-2.5 text-sm font-semibold text-red-600 transition-all duration-200 hover:bg-red-50 active:scale-95"
                >
                  Sign Out
                </button>
              </div>
            </div>

            {/* Account Information */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {/* Email */}
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition hover:border-red-200 hover:bg-red-50/40">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Email Address
                </p>

                <p className="mt-2 break-all font-semibold text-gray-800">
                  {user?.email || "N/A"}
                </p>
              </div>

              {/* Email Verification */}
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition hover:border-red-200 hover:bg-red-50/40">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Email Verification
                </p>

                <p
                  className={`mt-2 font-semibold ${
                    user?.emailVerified ? "text-green-600" : "text-orange-500"
                  }`}
                >
                  {user?.emailVerified ? "Verified" : "Not Verified"}
                </p>
              </div>

              {/* Created At */}
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition hover:border-red-200 hover:bg-red-50/40">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Account Created
                </p>

                <p className="mt-2 font-semibold text-gray-800">
                  {user?.createdAt
                    ? new Date(user.createdAt).toLocaleDateString("en-GB")
                    : "N/A"}
                </p>
              </div>

              {/* Updated At */}
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition hover:border-red-200 hover:bg-red-50/40">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Last Updated
                </p>

                <p className="mt-2 font-semibold text-gray-800">
                  {user?.updatedAt
                    ? new Date(user.updatedAt).toLocaleDateString("en-GB")
                    : "N/A"}
                </p>
              </div>
            </div>

            {/* Edit Profile */}
            {show && (
              <div className="mt-8 rounded-2xl border border-red-100 bg-linear-to-br from-red-50 to-white p-5 sm:p-7">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    Edit Profile
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Update your name and profile image.
                  </p>
                </div>

                <form
                  onSubmit={handleUpdateProfile}
                  className="grid gap-5 md:grid-cols-2"
                >
                  {/* Name */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      New Name
                    </label>

                    <input
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                    />
                  </div>

                  {/* Image URL */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      New Profile ImageURL
                    </label>

                    <input
                      name="image"
                      type="url"
                      placeholder="https://example.com/image.jpg"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                    />
                  </div>

                  {/* Submit */}
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-red-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:bg-red-700 hover:shadow-lg active:scale-[0.99]"
                    >
                      Update Profile
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProfilePage;

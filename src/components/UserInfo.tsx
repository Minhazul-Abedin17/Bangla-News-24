
"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="absolute right-2 top-1/2 -translate-y-1/2 sm:right-4">
      {user ? (
        <div className="flex flex-col items-end gap-1.5 sm:gap-2">

          {/* User Name + Profile Image */}
          <div className="flex items-center gap-2 sm:gap-3">
            <h2 className="max-w-[120px] truncate text-xs font-semibold text-gray-700 sm:max-w-[180px] sm:text-sm md:max-w-[220px] md:text-base">
              স্বাগতম,{" "}
              <span className="font-bold text-red-700">
                {user.name}
              </span>
            </h2>

            {/* Profile Image */}
            <Link href={'/profile'}>
            <div className="avatar shrink-0">
              <div className="w-8 rounded-full ring-2 ring-red-600 ring-offset-1 sm:w-9 sm:ring-offset-2 md:w-10">
                <img
                  src={user.image || "/default-avatar.png"}
                  alt={user.name || "User"}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            </Link>
          </div>

          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            className="rounded-md bg-red-700 px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-800 hover:shadow-md active:scale-95 sm:rounded-lg sm:px-5 sm:py-2 sm:text-sm md:px-6"
          >
            সাইন আউট
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Sign In */}
          <Link href={'/signIn'}>
          <button
            className="rounded-md px-2.5 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-red-50 hover:text-red-700 sm:rounded-lg sm:px-4 sm:py-2 sm:text-sm"
          >
            সাইন ইন
          </button>
          </Link>

          {/* Sign Up */}
          <Link href={'/signUp'}>
          <button
            className="rounded-md bg-red-700 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-800 active:scale-95 sm:rounded-lg sm:px-5 sm:py-2 sm:text-sm"
          >
            সাইন আপ
          </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;

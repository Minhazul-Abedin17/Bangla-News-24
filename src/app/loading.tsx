
const Loading = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-red-50 via-white to-rose-100 px-4">
      <div className="w-full max-w-md text-center">

        {/* Logo */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl bg-white p-3 shadow-xl shadow-red-100 sm:h-28 sm:w-28">
          <img
            src="/logo.webp"
            alt="Bangla News 24 Logo"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Brand Name */}
        <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          Bangla News <span className="text-red-600">24</span>
        </h1>

        <p className="mt-2 text-sm font-medium text-gray-500 sm:text-base">
          বাংলা নিউজ পোর্টাল • নির্ভরযোগ্য সংবাদ
        </p>

        {/* Loader */}
        <div className="mx-auto mt-8 w-full max-w-xs">
          <div className="h-1.5 overflow-hidden rounded-full bg-red-100">
            <div className="h-full w-1/2 animate-pulse rounded-full bg-red-600" />
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-2 w-2 animate-bounce rounded-full bg-red-600 [animation-delay:-0.3s]" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-red-600 [animation-delay:-0.15s]" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-red-600" />
          </div>
        </div>

        {/* Loading Text */}
        <p className="mt-5 text-sm font-semibold text-gray-600">
          সংবাদ লোড হচ্ছে...
        </p>

        <p className="mt-2 text-xs text-gray-400">
          অনুগ্রহ করে কিছুক্ষণ অপেক্ষা করুন
        </p>

        {/* Bottom Branding */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-gray-400">
          <span className="h-px w-8 bg-gray-200" />
          <span>সত্য ও নির্ভরযোগ্য সংবাদ</span>
          <span className="h-px w-8 bg-gray-200" />
        </div>
      </div>
    </main>
  );
};

export default Loading;

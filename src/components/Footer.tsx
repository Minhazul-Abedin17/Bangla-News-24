
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-950 text-gray-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 shadow-lg">
                <img
                  src="/logo.webp"
                  alt="Bangla News 24 Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h2 className="text-xl font-extrabold tracking-tight text-white">
                  Bangla News 24
                </h2>

                <p className="mt-0.5 text-xs text-gray-400">
                  বাংলা নিউজ পোর্টাল
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-400">
              দেশ ও বিশ্বের সর্বশেষ সংবাদ, রাজনীতি, অর্থনীতি, খেলাধুলা,
              বিনোদনসহ গুরুত্বপূর্ণ খবর এক নজরে। সত্য ও নির্ভরযোগ্য সংবাদ
              পৌঁছে দেওয়াই আমাদের লক্ষ্য।
            </p>

            {/* Social Buttons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-900 text-sm font-bold text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-red-600 hover:text-white"
              >
                f
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-900 text-sm font-bold text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-red-600 hover:text-white"
              >
                ▶
              </a>

              <a
                href="#"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-900 text-sm font-bold text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-red-600 hover:text-white"
              >
                𝕏
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-900 text-sm font-bold text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-red-600 hover:text-white"
              >
                ◎
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-5 text-base font-bold text-white">
              বিভাগ
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-red-500"
                >
                  সর্বশেষ সংবাদ
                </Link>
              </li>

              <li>
                <Link
                  href="/politics"
                  className="transition-colors hover:text-red-500"
                >
                  রাজনীতি
                </Link>
              </li>

              <li>
                <Link
                  href="/category/sports"
                  className="transition-colors hover:text-red-500"
                >
                  খেলাধুলা
                </Link>
              </li>

              <li>
                <Link
                  href="/category/entertainment"
                  className="transition-colors hover:text-red-500"
                >
                  বিনোদন
                </Link>
              </li>

              <li>
                <Link
                  href="/category/business"
                  className="transition-colors hover:text-red-500"
                >
                  অর্থনীতি
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-base font-bold text-white">
              গুরুত্বপূর্ণ লিংক
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-red-500"
                >
                  হোম
                </Link>
              </li>

              <li>
                <Link
                  href="/profile"
                  className="transition-colors hover:text-red-500"
                >
                  আমার প্রোফাইল
                </Link>
              </li>

              <li>
                <Link
                  href="/signin"
                  className="transition-colors hover:text-red-500"
                >
                  সাইন ইন
                </Link>
              </li>

              <li>
                <Link
                  href="/signup"
                  className="transition-colors hover:text-red-500"
                >
                  সাইন আপ
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-red-500"
                >
                  সর্বাধিক পঠিত
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / About */}
          <div>
            <h3 className="mb-5 text-base font-bold text-white">
              যোগাযোগ
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-red-500">✉</span>

                <div>
                  <p className="text-xs text-gray-500">ইমেইল</p>
                  <p className="mt-1 break-all text-gray-300">
                    info@banglanews24.com
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-red-500">☎</span>

                <div>
                  <p className="text-xs text-gray-500">হটলাইন</p>
                  <p className="mt-1 text-gray-300">
                    +880 1XXX-XXXXXX
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-red-500">⌖</span>

                <div>
                  <p className="text-xs text-gray-500">অফিস</p>
                  <p className="mt-1 leading-5 text-gray-300">
                    চট্টগ্রাম, বাংলাদেশ
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter / Highlight */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-red-900/40 bg-linear-to-r from-red-950 to-gray-900 p-5 sm:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-base font-bold text-white sm:text-lg">
                সর্বশেষ খবরের সাথে থাকুন
              </p>

              <p className="mt-1 text-xs leading-5 text-gray-400 sm:text-sm">
                প্রতিদিনের গুরুত্বপূর্ণ সংবাদ জানতে Bangla News 24-এর সাথে
                যুক্ত থাকুন।
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-red-700 md:w-auto"
            >
              সর্বশেষ সংবাদ দেখুন →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">
          <p className="text-xs text-gray-500 sm:text-sm">
            © {new Date().getFullYear()} Bangla News 24. সর্বস্বত্ব সংরক্ষিত।
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

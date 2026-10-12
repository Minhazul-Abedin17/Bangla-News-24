import Image from "next/image";
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 py-4">
        {/* Center: Logo + Brand + Date */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.webp"
            alt="Bangla News 24 Logo"
            width={50}
            height={50}
            className="h-11 w-11 object-contain"
          />

          <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold tracking-tight text-red-700">
              Bangla News 24
            </h1>

            <p className="text-xs text-neutral-500">{date}</p>
          </div>
        </div>

        {/* Right: Buttons */}
        <UserInfo/>
      </div>

      <NavLinks/>
    </header>
  );
};

export default Header;

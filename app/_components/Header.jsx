"use client";
import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileSideBar from "./MobileSideBar";
import { MenuIcon } from "lucide-react";

const Header = () => {
  const path = usePathname();
  const { user, isSignedIn } = useUser();
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar toggle


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [path]);

  return (
    <header
      className={` w-full px-12 py-4 flex items-center justify-between transition-all duration-300 z-50 ${path === "/"
        ? isScrolled
          ? "bg-white shadow-md  fixed top-0 left-0  w-full"
          : "bg-transparent fixed top-0 left-0  w-full"
        : "bg-white shadow-md"
        }`}

    >
      <Image src={"/logo.svg"} width={70} height={70} alt="logo" />
      <nav>
        <ul className="hidden sm:flex gap-8">
          <Link
            href="/"
            className={`hover:text-gray-500 font-medium cursor-pointer ${path === "/" ? "text-gray-600" : "text-black"
              }`}
          >
            Home
          </Link>
          <Link
            href="/listing"
            className={`hover:text-gray-500 font-medium cursor-pointer ${path === "/listing" ? "text-gray-600" : "text-black"
              }`}
          >
            <li className="hover:text-gray-500 font-medium cursor-pointer ">
              Listing
            </li>
          </Link>
          <Link href='/sell'><li className="hover:text-gray-500 font-medium cursor-pointer ">
            For Sell
          </li></Link>
          <Link href='/rent'><li className="hover:text-gray-500 font-medium cursor-pointer ">
            For Rent
          </li></Link>

          <Link href='/faq'>
            <li className="hover:text-gray-500 font-medium cursor-pointer ">
              Faq
            </li>
          </Link>
          {user && (
            <Link href="/user">
              <li className="hover:text-gray-500 font-medium cursor-pointer ">
                Your Listing
              </li>
            </Link>
          )}
        </ul>
      </nav>
      <div className=" gap-4 hidden sm:flex sm:gap-4">
        <Link href="add-listing">
          <Button>Post Your Add</Button>
        </Link>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Link href="/sign-in">
            <Button variant="outline">Login</Button>
          </Link>
        )}
      </div>
      <div className="sm:hidden">
        <MenuIcon
          className="cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />
      </div>
      <MobileSideBar sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isSignedIn={isSignedIn}
        user={user}></MobileSideBar>
    </header>
  );
};

export default Header;

import React from "react";
import Link from "next/link";
import { footer } from "./config";
import { Button } from "../ui/button";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-border px-4 py-6 sm:flex-row md:px-6 sm:justify-between">
      <p className="text-xs text-gray-500 dark:text-gray-400 z-10">
        Thanks to{" "}
        <Link
          href="https://github.com/Naresh-Khatri/3d-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-gray-300 transition-colors"
        >
          Naresh Khatri
        </Link>
        {" "}for the awesome template ❤️
      </p>
      <SocialMediaButtons />
      <p className="text-xs text-gray-500 dark:text-gray-400 z-10">
        © {year} {config.author}
      </p>
    </footer>
  );
}

export default Footer;

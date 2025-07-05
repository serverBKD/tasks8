"use client";
import { GlobeIcon, YouTubeIcon, GitHubIcon } from "../services/iconos.js";
import Link from "next/link.js";

export default function LinkBar() {
  return (
    <section className="w-full flex flex-wrap gap-2 justify-evenly items-center ">
      <Link
        href="/"
        className="w-28 h-12 flex items-center justify-start px-2 py-4 outline-2 outline-x-link text-x-link rounded-lg shadow-md hover:cursor-pointer hover:bg-x-link/10 transition-all duration-300"
      >
        <GlobeIcon />
        <h3 className="text-xs">SOURCE</h3>
      </Link>
      <Link
        href="/"
        className="w-28 h-12 flex items-center justify-start px-2 py-4 outline-2 outline-x-success text-x-success rounded-lg shadow-md hover:cursor-pointer hover:bg-x-link/10 transition-all duration-300"
      >
        <GitHubIcon />
        <h3 className="text-xs">REPO</h3>
      </Link>
      <Link
        href="/"
        className="w-28 h-12 flex items-center justify-start px-2 py-4 outline-2 outline-x-accent text-x-accent rounded-lg shadow-md hover:cursor-pointer hover:bg-x-link/10 transition-all duration-300"
      >
        <YouTubeIcon />
        <h3 className="text-xs">VIDEO</h3>
      </Link>
    </section>
  );
}

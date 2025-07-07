"use client"
import { GlobeIcon, YouTubeIcon, GitHubIcon } from "../services/iconos.js"
import Link from "next/link.js"

export default function LinkBar() {
  return (
    <section className="box_link_bar">
      <Link href="/" className="link_bar_card text-x-link outline-2 outline-x-link hover:bg-x-link/30">
        <GlobeIcon />
        <h3 className="text-xs">SOURCE</h3>
      </Link>
      <Link href="/" className="link_bar_card text-x-success outline-2 outline-x-success hover:bg-x-success/30">
        <GitHubIcon />
        <h3 className="text-xs">REPO</h3>
      </Link>
      <Link href="/" className="link_bar_card text-x-accent outline-2 outline-x-accent hover:bg-x-accent/30">
        <YouTubeIcon />
        <h3 className="text-xs">VIDEO</h3>
      </Link>
    </section>
  )
}

import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"

import VGlogsBanner from "./vglogs-banner"

// interface HeroProps {
//   items?: NavItem[]
// }

export function Hero() {
  return (
    <>
      <VGlogsBanner />
      <section className="container grid items-center justify-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="justify-center pb-12 pt-40 text-center text-6xl font-extrabold leading-tight tracking-tighter md:text-7xl">
            🏆 Network with Gamers & <br className="hidden sm:inline" />
            Build Your Gaming Resume 🎮
          </h1>
        </div>
        <div className="flex justify-center gap-4">
          <Link
            href={siteConfig.links.playStore}
            target="_blank"
            rel="noreferrer"
            className="disabled-image"
          >
            <Image
              src="/vglogs-google-play-badge.png"
              height={200}
              width={200}
              alt="vGlogs Google Play Badge "
            />
          </Link>
          <Link
            href={siteConfig.links.playStore}
            target="_blank"
            rel="noreferrer"
            className="disabled-image pt-3"
          >
            <Image
              src="/vglogs-apple-store-badge.svg"
              height={165}
              width={165}
              alt="vGlogs App Store Badge "
            />
          </Link>

          {/* <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Documentation
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline" })}
          >
            GitHub
          </Link> */}
        </div>
      </section>
    </>
  )
}

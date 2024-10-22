import Image from "next/image";
import logo from "@/public/logo.svg";
import hero from "@/public/image-hero.png";
import heroLeft from "@/public/image-hero-left.png";
import heroRight from "@/public/image-hero-right.png";

export function Header() {
  return (
    <header className="flex flex-col items-center overflow-hidden">
      <Logo />
      <div className="flex w-full flex-col items-center justify-between overflow-hidden pb-8 pt-16 md:pb-16 xl:flex-row xl:w-[103.6%]">
        <div className="relative w-[115%] md:w-[106%] xl:hidden">
          <Image src={hero} alt="hero image" className="w-full" />
        </div>
        <div className="hidden w-[26.411%] xl:block self-start">
          <Image
            src={heroLeft}
            alt="hero image left"
            className="w-full"
          />
        </div>
        <Content />
        <div className="hidden w-[26.411%] xl:block self-end">
          <Image src={heroRight} alt="hero image right" className="w-full" />
        </div>
      </div>
    </header>
  );
}

function Content() {
  return (
    <div className="mt-12 flex max-w-[475px] flex-col space-y-6 px-8 md:mt-18 xl:mt-0 xl:space-y-8 xl:px-4 xl:py-6">
      <h1 className="text-center text-[2.5rem] font-black leading-[110%] text-slate-900 md:text-5xl xl:text-[4rem]">
        Group Chat <br />
        for Everyone
      </h1>
      <p className="text-center text-slate-600 xl:text-[1.125rem]">
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        <button className="rounded-full bg-cyan-600 px-10 py-4 font-black text-white">
          Download <span className="text-cyan-300">v1.3</span>
        </button>
        <button className="rounded-full bg-purple-600 px-10 py-4 font-black text-white">
          What is it?
        </button>
      </div>
    </div>
  )
}

function Logo() {
  return (
    <div className="mt-12 w-[118px] xl:mt-20">
      <Image src={logo} alt="logo" />
    </div>
  )
}

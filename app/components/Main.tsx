import Image, { StaticImageData } from "next/image";
import imageMan from "@/public/image-man-texting.jpg";
import imageMen from "@/public/image-men-in-meeting.jpg";
import imageWoman from "@/public/image-woman-in-videocall.jpg";
import imageWomen from "@/public/image-women-videochatting.jpg";

export function Main() {
  return (
    <main className="w-full space-y-16 p-8 pb-16 md:p-[44px] md:pt-[56px] lg:px-[80px] lg:pb-18  max-w-[1120px] flex flex-col items-center justify-center mx-auto">
      <div className="flex flex-col items-center">
        <div className="h-20 w-[1px] bg-slate-300" />
        <p className="flex h-14 w-14 items-center justify-center rounded-full border border-[1px] border-slate-300 text-center text-slate-600">
          01
        </p>
      </div>
      <div className="flex flex-wrap gap-4 md:flex-nowrap md:gap-6">
        <Picture src={imageWoman} alt="" />
        <Picture src={imageWomen} alt="" />
        <Picture src={imageMen} alt="" />
        <Picture src={imageMan} alt="" />
      </div>
      <div className="text-center md:px-[88px] max-w-[544px] lg:px-0">
        <p className="text-xs md:text-sm font-black uppercase leading-[110%] text-cyan-600 tracking-[.25rem] lg:text-base">
          built for modern use
        </p>
        <h2 className="mt-4 md:text-4xl text-[2rem] font-black leading-[110%] text-slate-900 md:px-6 lg:text-[2.5rem] lg:px-12">
          Smarter meetings, all in one place
        </h2>
        <p className="mt-8 text-slate-600 lg:text-lg">
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </div>
    </main>
  );
}

function Picture({ src, alt }: { src: StaticImageData; alt: string }) {
  return (
    <div className="w-[calc(50%-8px)] overflow-hidden rounded-lg md:w-auto">
      <Image src={src} alt={alt} />
    </div>
  );
}
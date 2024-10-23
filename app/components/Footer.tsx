export function Footer() {
  return (
    <footer className="w-full">
      <div className="relative z-20 mb-[-28px] flex flex-col items-center">
        <div className="h-20 w-[1px] bg-slate-300" />
        <p className="flex h-14 w-14 items-center justify-center rounded-full border border-[1px] border-slate-300 bg-white text-center text-slate-600">
          02
        </p>
      </div>
      <div className="relative w-full bg-[url('/image-footer.jpg')] bg-center">
        <div className="z-10 flex w-full flex-col items-center bg-[rgba(77,_150,_168,_0.85)]">
          <div className="flex max-w-[504px] flex-col items-center gap-4 p-8 py-16 text-center md:px-0 lg:w-[1120px] lg:max-w-full lg:flex-row lg:items-start lg:justify-center lg:gap-0 lg:py-[112px]">
            <p className="text-[2rem] font-black leading-[110%] text-white md:text-4xl lg:w-[445px] lg:text-start lg:text-[2.5rem]">
              Experience more together
            </p>
            <p className="text-white lg:ml-5 lg:w-[355px] lg:text-start lg:text-lg">
              Stay connected with reliable HD meetings and unlimited one-on-one
              and group video sessions.
            </p>
            <button className="z-20 rounded-full bg-purple-600 px-10 py-4 font-black text-white hover:bg-[#B18BDD] lg:ml-[84px] lg:w-[193px]">
              Download <span className="text-purple-300">v1.3</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

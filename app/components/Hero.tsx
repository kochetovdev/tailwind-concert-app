import Image from "next/image";

const Hero = () => {
  return (
    <article className="flex flex-col items-center justify-center text-zinc-200 h-[calc(100vh - 200px)] min-h-[400px] bg-[url('/assets/images/hero.jpg')] bg-cover bg-center bg-fixed">
      <div className="bg-white/30 py-2 px-4 rounded-xl text-center backdrop-blur-md">
        <div className="relative">
          <Image
            src="/assets/images/logo.png"
            alt="image-logo"
            width={175}
            height={175}
          />
          <div className="flex items-center justify-center mt-[-70px] mb-5">
            <div className="bg-pink-500 w-14 h-14 rounded-full flex items-center justify-center gap-1">
              <div className="h-2 w-1 bg-pink-300 rounded-full animate-wavey"></div>
              <div className="h-3 w-1 bg-pink-200 rounded-full animate-wavey animation-delay-200"></div>
              <div className="h-4 w-1 bg-pink-100 rounded-full animate-wavey animation-delay-[150ms]"></div>
              <div className="h-3 w-1 bg-pink-200 rounded-full animate-wavey animation-delay-300"></div>
              <div className="h-2 w-1 bg-pink-300 rounded-full animate-wavey animation-delay-[75ms]"></div>
            </div>
          </div>
        </div>
        <div className="text-5xl font-bold">
          tw:<span className="text-sky-900">mf</span>
        </div>
      </div>
      <div className="font-bold mt-3 text-sm">
        Keep me updated with news and promotions
      </div>
      <form className="mt-3 flex gap-2">
        <input
          type="email"
          placeholder="Email"
          className="rounded-sm border-white/40 bg-white/30 backdrop-blur-md p-2 font-bold text-sky-900 placeholder-zinc-500 caret-pink-500 outline-pink-500 focus:outline-2"
        />
        <button
          type="submit"
          className="cursor-pointer rounded-sm bg-pink-500 py-2 px-4 font-bold transition-colors hover:bg-sky-900 hover:shadow-lg hover:shadow-black/20"
        >
          Subscribe
        </button>
      </form>
    </article>
  );
};

export default Hero;

const LineUp = () => {
  return (
    <article className="max-w-6xl mx-auto">
      <h2 className="mt-20">Lineup</h2>
      <p>
        Follow the timetable and stage to ensure you don&apos;t miss your favourite
        artists
      </p>
      <div className="relative mt-5 bg-zinc-800 py-4 px-2 rounded-lg text-zinc-200">
        <div className="absolute top-0 left-1/2 w-4 ml-[-8px] h-full rounded-full bg-gradient-to-b from-sky-900 via-cyan-900 to-teal-900">
          <div className="sticky top-1/2">
            <div className="relative h-4 w-4">
              <div className="absolute h-4 w-4 animate-ping rounded-full bg-pink-500 opacity-75"></div>
              <div className="bg-rose-500 rounded-full relative h-4 w-4"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="p-2 bg-zinc-900 rounded-lg my-4">1st July</h4>
          </div>
          <div></div>
          <div className="text-right">
            <div className="font-bold">Jackie Chaston</div>
            <div className="text-zinc-400">6pm - Sage Stage</div>
          </div>
          <div></div>
          <div></div>
          <div>
            <div className="font-bold">Jenifer Connelly</div>
            <div className="text-zinc-400">7pm - Platform 9 1/2</div>
          </div>
          <div></div>
          <div></div>
          <div className="text-right">
            <div className="font-bold">The Slimy Diamonds</div>
            <div className="text-zinc-400">8pm - Main Stage</div>
          </div>
          <div></div>
          <div></div>
          <div className="text-left">
            <div className="font-bold">Corduary Gary</div>
            <div className="text-zinc-400">9pm - Main Stage</div>
          </div>
          <div></div>
          <div></div>
          <div>
            <h4 className="p-2 bg-zinc-900 rounded-lg my-4">2st July</h4>
          </div>
          <div></div>
          <div className="text-right">
            <div className="font-bold">Ken&apos;s Showing Off</div>
            <div className="text-zinc-400">9.30pm - Main Stage</div>
          </div>
          <div></div>
          <div></div>
          <div>
            <div className="font-bold">Sonic Levitation</div>
            <div className="text-zinc-400">6pm - Sage Stage</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default LineUp;

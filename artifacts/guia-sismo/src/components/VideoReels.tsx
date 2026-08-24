type VideoItem = {
  id: string;
  youtubeId: string;
  tag: string;
  title: string;
  caption: string;
};

export function VideoReels({
  heading,
  text,
  items,
}: {
  heading: string;
  text: string;
  items: VideoItem[];
}) {
  return (
    <section className="mt-2 mb-10">
      <h2 className="text-[1.6rem] md:text-3xl font-bold tracking-tight text-foreground mb-3 px-2">
        {heading}
      </h2>
      <p className="text-[1.1rem] text-foreground/75 leading-relaxed max-w-2xl mb-5 px-2">
        {text}
      </p>

      <div className="-mx-4 md:mx-0 px-4 md:px-0 overflow-x-auto snap-x snap-mandatory pb-2">
        <div className="flex gap-3.5 w-max md:w-full md:grid md:grid-cols-2 xl:grid-cols-3 md:overflow-visible">
          {items.map((video) => (
            <article
              key={video.id}
              className="w-[min(78vw,280px)] md:w-auto snap-start shrink-0 bg-card border border-border rounded-[1.25rem] shadow-sm overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[9/16] bg-black">
                <iframe
                  title={video.title}
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <span className="self-start text-[0.7rem] font-bold uppercase tracking-wide text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {video.tag}
                </span>
                <h3 className="text-[1.05rem] font-bold text-foreground leading-snug">
                  {video.title}
                </h3>
                <p className="text-[0.95rem] text-foreground/70 leading-relaxed">
                  {video.caption}
                </p>
                <a
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-2 text-[0.9rem] font-semibold text-primary underline underline-offset-4"
                >
                  Abrir en YouTube
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from 'wouter';
import { Icons } from '../components/icons';
import { guidesCatalog, guidesCatalogContent } from '../content/guidesCatalog';

export function GuidesPage() {
  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-8 pt-8 md:pt-12 pb-8 md:pb-12 animate-gentle opacity-0">
        <h1 className="text-[2.5rem] md:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-foreground mb-5 leading-tight max-w-3xl">
          {guidesCatalogContent.title}
        </h1>
        <p className="text-[1.35rem] md:text-2xl text-foreground/80 leading-relaxed font-medium max-w-2xl mb-10">
          {guidesCatalogContent.subtitle}
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3.5 md:gap-4 list-none p-0 m-0">
          {guidesCatalog.map((guide) => {
            const Icon = Icons[guide.icon as keyof typeof Icons];
            const card = (
              <div
                className={`h-full rounded-[1.25rem] border p-5 md:p-6 flex items-center gap-5 ${
                  guide.comingSoon
                    ? 'bg-secondary/40 border-border/60 opacity-70 cursor-not-allowed'
                    : 'bg-card border-border shadow-sm group-hover:bg-secondary/40 group-hover:shadow-md group-hover:border-primary/20 active:scale-[0.98] md:active:scale-100 transition-all duration-300'
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${
                    guide.comingSoon
                      ? 'bg-muted text-muted-foreground'
                      : 'bg-primary/10 text-primary group-hover:scale-105 transition-transform duration-300'
                  }`}
                >
                  {Icon && <Icon size={28} strokeWidth={2.25} />}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="block text-[1.15rem] font-semibold text-card-foreground">
                      {guide.title}
                    </span>
                    {guide.comingSoon ? (
                      <span className="text-[0.7rem] font-bold uppercase tracking-wide text-muted-foreground">
                        Próximamente
                      </span>
                    ) : null}
                  </div>
                  <p className="text-[0.95rem] text-foreground/70 leading-snug mt-1">
                    {guide.description}
                  </p>
                </div>
              </div>
            );

            return (
              <li key={guide.id}>
                {guide.comingSoon || !guide.path ? (
                  <div aria-disabled="true">{card}</div>
                ) : (
                  <Link href={guide.path} className="block group h-full">
                    {card}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

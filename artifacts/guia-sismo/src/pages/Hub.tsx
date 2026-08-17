import { Icons } from '../components/icons';
import { Disclaimer } from '../components/Disclaimer';
import { Link } from 'wouter';

type HubRoute = {
  id: string;
  title: string;
  icon: string;
  path: string;
  period?: string;
};

type HubContent = {
  title: string;
  subtitle: string;
  routes: HubRoute[];
  later?: {
    heading: string;
    text: string;
    routes: HubRoute[];
  };
};

function RouteGrid({ routes }: { routes: HubRoute[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3.5 md:gap-4">
      {routes.map((route) => {
        const Icon = Icons[route.icon as keyof typeof Icons];
        return (
          <Link key={route.id} href={route.path} className="block group h-full">
            <div className="h-full bg-card hover:bg-secondary/40 hover:shadow-md hover:border-primary/20 active:scale-[0.98] md:active:scale-100 transition-all duration-300 p-5 md:p-6 rounded-[1.25rem] border border-border shadow-sm flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform duration-300">
                {Icon && <Icon size={28} strokeWidth={2.25} />}
              </div>
              <div className="min-w-0">
                {route.period && (
                  <p className="text-[0.75rem] font-bold uppercase tracking-wide text-primary mb-1">
                    {route.period}
                  </p>
                )}
                <span className="text-[1.15rem] font-semibold text-card-foreground">
                  {route.title}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export function HubPage({ content }: { content: HubContent }) {
  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-8 pt-8 md:pt-12 pb-8 md:pb-12 animate-gentle opacity-0">
        <h1 className="text-[2.5rem] md:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-foreground mb-5 leading-tight max-w-3xl">
          {content.title}
        </h1>
        <p className="text-[1.35rem] md:text-2xl text-foreground/80 leading-relaxed font-medium max-w-2xl">
          {content.subtitle}
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 pb-8 flex-1 animate-gentle opacity-0 delay-100">
        <RouteGrid routes={content.routes} />

        {content.later && (
          <section className="mt-12 md:mt-16">
            <h2 className="text-[1.6rem] md:text-3xl font-bold tracking-tight text-foreground mb-3 px-2">
              {content.later.heading}
            </h2>
            <p className="text-[1.1rem] text-foreground/75 leading-relaxed max-w-2xl mb-6 px-2">
              {content.later.text}
            </p>
            <RouteGrid routes={content.later.routes} />
          </section>
        )}
      </div>

      <div className="animate-gentle opacity-0 delay-200">
        <Disclaimer />
      </div>
    </div>
  );
}

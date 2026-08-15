import { Link } from 'wouter';
import { homeContent } from '../content/data';
import { Icons } from '../components/icons';
import { Disclaimer } from '../components/Disclaimer';

export function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <div className="px-6 pt-16 pb-8 animate-gentle opacity-0">
        <h1 className="text-[2.5rem] font-bold tracking-tight text-foreground mb-5 leading-tight">
          {homeContent.title}
        </h1>
        <p className="text-[1.35rem] text-foreground/80 leading-relaxed font-medium">
          {homeContent.subtitle}
        </p>
      </div>

      <div className="px-4 pb-8 flex-1 flex flex-col gap-3.5 animate-gentle opacity-0 delay-100">
        {homeContent.routes.map((route) => {
          const Icon = Icons[route.icon as keyof typeof Icons];
          return (
            <Link key={route.id} href={route.path} className="block group">
              <div className="bg-card hover:bg-secondary/40 active:scale-[0.98] transition-all duration-300 p-5 rounded-[1.25rem] border border-border shadow-sm flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Icon size={28} strokeWidth={2.25} />
                </div>
                <span className="text-[1.15rem] font-semibold text-card-foreground">
                  {route.title}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="animate-gentle opacity-0 delay-200">
        <Disclaimer />
      </div>
    </div>
  );
}

import { useRoute, Link, useLocation } from 'wouter';
import { guidesData, homeContent } from '../content/data';
import { Icons } from '../components/icons';
import { Disclaimer } from '../components/Disclaimer';
import { useEffect, useState } from 'react';

type ModuleData = {
  icon: string;
  title: string;
  summary: string;
  blocks: { heading?: string; text?: string; list?: string[] }[];
};

function ModuleWizard({ modules }: { modules: ModuleData[] }) {
  const [current, setCurrent] = useState<number | null>(null);

  const goTo = (i: number | null) => {
    setCurrent(i);
    window.scrollTo({ top: 0 });
  };

  // List view: same card style as the home screen
  if (current === null) {
    return (
      <div className="my-10 flex flex-col gap-3.5">
        {modules.map((mod, i) => {
          const Icon = Icons[mod.icon as keyof typeof Icons];
          return (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className="w-full text-left group bg-card hover:bg-secondary/40 active:scale-[0.98] transition-all duration-300 p-5 rounded-[1.25rem] border border-border shadow-sm flex items-center gap-5"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform duration-300">
                {Icon && <Icon size={28} strokeWidth={2.25} />}
              </div>
              <span className="text-[1.15rem] font-semibold text-card-foreground leading-snug">
                {mod.title}
              </span>
            </button>
          );
        })}
      </div>
    );
  }

  const module = modules[current];
  const Icon = Icons[module.icon as keyof typeof Icons];

  return (
    <div className="my-10">
      {/* Back to module list */}
      <button
        type="button"
        onClick={() => goTo(null)}
        className="inline-flex items-center gap-2 text-primary font-semibold mb-5 p-2 -ml-2 rounded-xl active:bg-secondary transition-colors"
      >
        <Icons.ArrowLeft size={20} strokeWidth={2.5} />
        <span className="text-[1.05rem]">Todos los módulos</span>
      </button>

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {modules.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ir al módulo ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'w-8 h-2.5 bg-primary' : 'w-2.5 h-2.5 bg-primary/25'
            }`}
          />
        ))}
      </div>

      {/* Module content, styled like a guide page */}
      <div className="flex items-center gap-4 mb-3">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
          {Icon && <Icon size={28} strokeWidth={2.25} />}
        </div>
        <p className="text-[0.95rem] font-bold text-primary uppercase tracking-wide">
          Módulo {current + 1} de {modules.length}
        </p>
      </div>
      <h2 className="text-[2rem] font-bold tracking-tight text-foreground mb-8 leading-tight">
        {module.title}
      </h2>

      <div className="space-y-4">
        {module.blocks.map((block, i) => (
          <div key={i} className="my-10 space-y-5">
            {block.heading && (
              <h3 className="text-[1.4rem] font-bold text-primary">{block.heading}</h3>
            )}
            {block.text && (
              <p className="text-[1.15rem] leading-relaxed text-foreground/90">{block.text}</p>
            )}
            {block.list && (
              <ul className="space-y-4 mt-6">
                {block.list.map((item, j) => (
                  <li key={j} className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-border shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/60 mt-2.5 shrink-0" />
                    <span className="text-[1.15rem] leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Back / Next buttons */}
      <div className="mt-5 flex gap-4">
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          className="flex-1 flex items-center justify-center gap-2 p-5 rounded-[1.25rem] bg-white border border-border font-bold text-[1.1rem] text-foreground shadow-sm active:scale-[0.98] transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none"
        >
          <Icons.ArrowLeft size={22} strokeWidth={2.5} className="text-primary" />
          Atrás
        </button>
        <button
          type="button"
          onClick={() => goTo(current + 1)}
          disabled={current === modules.length - 1}
          className="flex-1 flex items-center justify-center gap-2 p-5 rounded-[1.25rem] bg-primary text-primary-foreground font-bold text-[1.1rem] shadow-sm active:scale-[0.98] transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none"
        >
          Siguiente
          <Icons.ArrowRight size={22} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}

export function Guide() {
  const [match, params] = useRoute('/guia/:id');
  const id = params?.id;
  const guide = id ? guidesData[id] : null;
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (match && !guide) {
      setLocation('/');
    }
  }, [match, guide, setLocation]);

  if (!guide) return null;

  const routes = homeContent.routes;
  const currentIndex = routes.findIndex((r) => r.id === id);
  const prevRoute = currentIndex > 0 ? routes[currentIndex - 1] : null;
  const nextRoute = currentIndex >= 0 && currentIndex < routes.length - 1 ? routes[currentIndex + 1] : null;

  return (
    <div className="flex flex-col min-h-full bg-background">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-background/85 backdrop-blur-xl border-b border-border/50 px-4 py-4 animate-gentle opacity-0">
        <Link href="/" className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity p-2 -ml-2 rounded-xl active:bg-secondary">
          <Icons.ArrowLeft size={22} strokeWidth={2.5} />
          <span className="text-[1.1rem]">Volver al inicio</span>
        </Link>
      </div>

      <div className="px-6 py-10 flex-1">
        <h1 className="text-[2.2rem] font-bold tracking-tight text-foreground mb-10 animate-gentle opacity-0 delay-100 leading-tight">
          {guide.title}
        </h1>

        <div className="animate-gentle opacity-0 delay-200 space-y-4">
          {guide.sections.map((section, index) => {
            switch (section.type) {
              case 'text':
                return (
                  <p key={index} className="text-[1.15rem] leading-relaxed text-foreground/90 my-6">
                    {section.text}
                  </p>
                );
              case 'message':
                return (
                  <div key={index} className="bg-primary/10 rounded-[1.5rem] p-8 my-10 text-center shadow-inner border border-primary/5">
                    <p className="text-[1.35rem] font-bold text-primary leading-snug whitespace-pre-line">
                      {section.emphasis}
                    </p>
                  </div>
                );
              case 'warning':
                return (
                  <div key={index} className="bg-[#FFF5ED] border border-[#FFD8B8] rounded-[1.25rem] p-6 my-8 flex gap-5 items-start shadow-sm">
                    <Icons.AlertTriangle className="text-[#D95F18] shrink-0 mt-0.5" size={28} strokeWidth={2.5} />
                    <p className="text-[1.15rem] text-[#943C08] leading-relaxed font-semibold">
                      {section.text}
                    </p>
                  </div>
                );
              case 'step':
                return (
                  <div key={index} className="my-12 space-y-5">
                    <h2 className="text-[1.4rem] font-bold text-primary">{section.title}</h2>
                    {section.text && (
                      <p className="text-[1.15rem] leading-relaxed text-foreground/90">{section.text}</p>
                    )}
                    {section.list && (
                      <ul className="space-y-4 mt-6">
                        {section.list.map((item, i) => (
                          <li key={i} className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-border shadow-sm">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary/60 mt-2.5 shrink-0" />
                            <span className="text-[1.15rem] leading-relaxed font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              case 'list':
                return (
                  <ul key={index} className="space-y-4 my-8">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-border shadow-sm">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary/60 mt-2.5 shrink-0" />
                        <span className="text-[1.15rem] leading-relaxed font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              case 'grid-list':
                return (
                  <div key={index} className="grid grid-cols-2 gap-3.5 my-8">
                    {section.list.map((item, i) => (
                      <div key={i} className="bg-white p-5 rounded-2xl border border-border shadow-sm text-center flex items-center justify-center">
                        <span className="text-[1.05rem] font-semibold leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                );
              case 'grounding':
                return (
                  <div key={index} className="space-y-6 my-12 bg-secondary/40 p-7 rounded-[1.5rem] border border-secondary">
                    <h3 className="text-[1.4rem] font-bold text-foreground">{section.title}</h3>
                    <p className="text-[1.15rem] text-foreground/90 mb-6">{section.text}</p>
                    <div className="space-y-3.5">
                      {section.list.map((item, i) => (
                        <div key={i} className="flex items-center gap-5 bg-white p-4 rounded-[1.25rem] shadow-sm border border-border/50">
                          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-[1.4rem] shrink-0">
                            {item.count}
                          </div>
                          <p className="text-[1.15rem] font-semibold">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              case 'quotes':
                return (
                  <div key={index} className="space-y-4 my-10">
                    {section.list.map((quote, i) => (
                      <div key={i} className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-border text-center">
                        <p className="text-[1.35rem] text-foreground font-semibold leading-relaxed">
                          "{quote}"
                        </p>
                      </div>
                    ))}
                  </div>
                );
              case 'categories':
                return (
                  <div key={index} className="grid grid-cols-1 gap-4 my-10">
                    {section.items.map((item, i) => {
                      const Icon = Icons[item.icon as keyof typeof Icons];
                      return (
                        <div key={i} className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-border flex gap-5">
                          <div className="w-14 h-14 rounded-full bg-secondary/70 flex items-center justify-center text-primary shrink-0">
                            <Icon size={26} strokeWidth={2.25} />
                          </div>
                          <div className="flex-1 pt-0.5">
                            <h4 className="text-[1.25rem] font-bold mb-2">{item.title}</h4>
                            <p className="text-[1.1rem] text-foreground/80 leading-relaxed">{item.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              case 'modules':
                return <ModuleWizard key={index} modules={section.modules} />;
              case 'next-link':
                return (
                  <Link key={index} href={section.path} className="block group my-10">
                    <div className="bg-primary text-primary-foreground active:scale-[0.98] transition-all duration-300 p-6 rounded-[1.25rem] shadow-sm flex items-center justify-between gap-5">
                      <span className="text-[1.2rem] font-bold">{section.label}</span>
                      <Icons.ArrowRight size={26} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                );
              default:
                return null;
            }
          })}
        </div>

        {/* Prev / Next navigation */}
        <div className="mt-12 pt-8 border-t border-border/60 flex flex-col gap-4">
          {nextRoute && (
            <Link href={nextRoute.path} className="block group">
              <div className="bg-primary text-primary-foreground active:scale-[0.98] transition-all duration-300 p-6 rounded-[1.25rem] shadow-sm flex items-center justify-between gap-5">
                <div className="text-left">
                  <p className="text-[0.9rem] font-semibold uppercase tracking-wide opacity-80">Siguiente</p>
                  <p className="text-[1.15rem] font-bold leading-snug">{nextRoute.title}</p>
                </div>
                <Icons.ArrowRight size={26} strokeWidth={2.5} className="shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          )}
          {prevRoute && (
            <Link href={prevRoute.path} className="block group">
              <div className="bg-white border border-border active:scale-[0.98] transition-all duration-300 p-6 rounded-[1.25rem] shadow-sm flex items-center gap-5">
                <Icons.ArrowLeft size={26} strokeWidth={2.5} className="shrink-0 text-primary group-hover:-translate-x-1 transition-transform duration-300" />
                <div className="text-left">
                  <p className="text-[0.9rem] font-semibold uppercase tracking-wide text-muted-foreground">Anterior</p>
                  <p className="text-[1.15rem] font-bold leading-snug text-foreground">{prevRoute.title}</p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>

      <div className="animate-gentle opacity-0 delay-300">
        <Disclaimer />
      </div>
    </div>
  );
}

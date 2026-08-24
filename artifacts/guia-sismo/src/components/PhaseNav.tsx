import { Link, useLocation } from 'wouter';
import { BookOpen, Map } from 'lucide-react';

const phases = [
  { href: '/antes', label: 'Antes', isActive: (path: string) => path.startsWith('/antes') },
  {
    href: '/durante',
    label: 'Durante',
    isActive: (path: string) => path === '/durante' || path.startsWith('/durante/'),
  },
  {
    href: '/despues',
    label: 'Después',
    isActive: (path: string) => path.startsWith('/despues') || path.startsWith('/guia/'),
  },
];

function isInsideSismosCourse(path: string) {
  return (
    path.startsWith('/antes') ||
    path === '/durante' ||
    path.startsWith('/durante/') ||
    path.startsWith('/despues') ||
    path.startsWith('/guia/')
  );
}

export function PhaseNav() {
  const [path] = useLocation();
  const mapActive = path === '/' || path === '/map' || path.startsWith('/map');
  const guidesActive = path === '/guias' || path.startsWith('/guias/');
  const inSismosCourse = isInsideSismosCourse(path);

  return (
    <nav aria-label="Navegación principal" className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/40">
      <div className="flex items-center justify-center gap-2 py-1.5 px-3 flex-wrap">
        <Link
          href="/"
          aria-current={mapActive ? 'page' : undefined}
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-[3px] text-[0.7rem] leading-none tracking-wide border transition-colors ${
            mapActive
              ? 'bg-primary text-primary-foreground font-bold border-transparent'
              : 'bg-secondary/80 text-muted-foreground font-medium border-transparent hover:text-foreground'
          }`}
        >
          <Map size={12} strokeWidth={2.5} />
          Mapa
        </Link>
        <Link
          href="/guias"
          aria-current={guidesActive ? 'page' : undefined}
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-[3px] text-[0.7rem] leading-none tracking-wide border transition-colors ${
            guidesActive
              ? 'bg-primary text-primary-foreground font-bold border-transparent'
              : 'bg-secondary/80 text-muted-foreground font-medium border-transparent hover:text-foreground'
          }`}
        >
          <BookOpen size={12} strokeWidth={2.5} />
          Guías
        </Link>

        {inSismosCourse ? (
          <div className="inline-flex items-center rounded-full bg-secondary/80 p-[2px]">
            {phases.map((item) => {
              const active = item.isActive(path);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`px-2.5 py-[3px] rounded-full text-[0.7rem] leading-none tracking-wide transition-colors ${
                    active
                      ? 'bg-primary text-primary-foreground font-bold'
                      : 'text-muted-foreground font-medium hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>
    </nav>
  );
}

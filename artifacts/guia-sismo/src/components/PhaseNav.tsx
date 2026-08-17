import { Link, useLocation } from 'wouter';

const items = [
  { href: '/antes', label: 'Antes', isActive: (path: string) => path.startsWith('/antes') },
  { href: '/', label: 'Durante', isActive: (path: string) => path === '/' || path.startsWith('/durante') },
  { href: '/despues', label: 'Después', isActive: (path: string) => path.startsWith('/despues') || path.startsWith('/guia') },
];

export function PhaseNav() {
  const [path] = useLocation();

  return (
    <nav aria-label="Momento del sismo" className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/40">
      <div className="flex justify-center py-1.5 px-3">
        <div className="inline-flex items-center rounded-full bg-secondary/80 p-[2px]">
          {items.map((item) => {
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
      </div>
    </nav>
  );
}

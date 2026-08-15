export function Disclaimer() {
  return (
    <div className="mt-12 p-8 bg-secondary/30 text-muted-foreground text-base leading-relaxed border-t border-border/50 text-center pb-16">
      <p>
        Esta guía proporciona información educativa y no reemplaza las instrucciones de las autoridades, servicios de emergencia, profesionales médicos o profesionales de salud mental. En una emergencia inmediata, busca ayuda de los servicios locales de emergencia.
      </p>
      <p className="mt-8 text-[1.05rem] font-medium text-foreground/70">
        Hecho con <span className="text-primary" aria-label="amor">♥</span> en Colombia
      </p>
      <p className="mt-1">
        <a
          href="https://julianprojects.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
        >
          julianprojects.com
        </a>
      </p>
    </div>
  );
}

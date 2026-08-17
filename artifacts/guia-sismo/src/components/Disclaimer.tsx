import { Github, Mail, MessageCircle, Phone } from 'lucide-react';
import { emergencyContacts } from '../content/data';
import { ShareButton, ShareCard } from './ShareGuide';

export function Disclaimer() {
  const { familyReunification } = emergencyContacts;

  return (
    <footer className="mt-12 bg-secondary/30 text-muted-foreground text-base leading-relaxed border-t border-border/50">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-16 pb-16">
        <section className="text-left mb-10">
          <h2 className="text-center md:text-left text-[1.3rem] md:text-2xl font-bold tracking-tight text-foreground mb-2">
            {emergencyContacts.title}
          </h2>
          <p className="text-center md:text-left text-[0.95rem] leading-relaxed text-foreground/70 mb-6 max-w-2xl">
            {emergencyContacts.note}
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {emergencyContacts.numbers.map((contact) => (
              <li key={contact.number}>
                <a
                  href={`tel:${contact.tel}`}
                  className="flex items-center gap-4 bg-card hover:bg-secondary/40 hover:shadow-md hover:border-primary/20 transition-all duration-300 p-4 rounded-[1.15rem] border border-border shadow-sm h-full"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone size={22} strokeWidth={2.25} aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[1.35rem] font-bold text-foreground leading-none tracking-tight">
                      {contact.number}
                    </p>
                    <p className="text-[0.95rem] font-medium text-foreground/75 mt-1">
                      {contact.label}
                    </p>
                  </div>
                  <span className="hidden sm:inline text-sm font-semibold text-primary shrink-0">
                    Llamar
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 bg-card border border-border rounded-[1.15rem] shadow-sm p-5 md:p-6">
            <p className="text-[1.05rem] font-bold text-foreground mb-1">
              {familyReunification.title}
            </p>
            <p className="text-[0.9rem] text-foreground/70 mb-4">
              {familyReunification.organization} — Restablecimiento de Contactos Familiares
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              <a
                href={familyReunification.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-primary/10 text-primary font-semibold hover:bg-primary/15 transition-colors"
              >
                <MessageCircle size={20} strokeWidth={2.25} aria-hidden="true" />
                <span>WhatsApp {familyReunification.whatsappDisplay}</span>
              </a>
              <a
                href={`mailto:${familyReunification.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-secondary/70 text-foreground font-semibold break-all hover:bg-secondary transition-colors"
              >
                <Mail size={20} strokeWidth={2.25} className="shrink-0 text-primary" aria-hidden="true" />
                <span className="text-[0.95rem]">{familyReunification.email}</span>
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 justify-center md:justify-start">
            <p className="text-[1.05rem] font-semibold text-foreground">
              Compártelo con alguien que lo necesite
            </p>
            <ShareButton />
          </div>
        </section>

        <p className="text-center md:text-left max-w-3xl">
          Esta guía proporciona información educativa y no reemplaza las instrucciones de las autoridades, servicios de emergencia, profesionales médicos o profesionales de salud mental. En una emergencia inmediata, busca ayuda de los servicios locales de emergencia.
        </p>
        <p className="mt-8 text-center md:text-left text-[1.05rem] font-medium text-foreground/70">
          Hecho con <span className="text-primary" aria-label="amor">♥</span> en Colombia
        </p>
        <p className="mt-3 text-center md:text-left text-[1.05rem] font-semibold text-foreground/80 flex items-center justify-center md:justify-start gap-2 flex-wrap">
          <a
            href="https://github.com/Kalugy/Safe-Steps-Guide"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            <Github size={20} strokeWidth={2} aria-hidden="true" />
            <span>Free open source</span>
          </a>
          <span className="text-muted-foreground font-medium">· 2026</span>
        </p>
        <p className="mt-4 text-center md:text-left text-[1rem] leading-relaxed text-foreground/70 max-w-2xl">
          Página informativa y educativa creada con el propósito de brindar información, orientación y recursos útiles para apoyar a las personas afectadas por el desastre natural ocurrido en Colombia.
        </p>

        <div className="mt-10">
          <ShareCard />
        </div>
      </div>
    </footer>
  );
}

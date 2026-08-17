import { useState } from 'react';
import { Check, Copy, MessageCircle, Share2 } from 'lucide-react';
import { shareContent } from '../content/data';

function getShareUrl() {
  const base = import.meta.env.BASE_URL || '/';
  return new URL(base, window.location.origin).href;
}

function getShareMessage() {
  return `${shareContent.text} ${getShareUrl()}`;
}

async function shareGuide() {
  const url = getShareUrl();
  if (navigator.share) {
    try {
      await navigator.share({
        title: shareContent.title,
        text: shareContent.text,
        url,
      });
      return 'shared';
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return 'cancelled';
      }
    }
  }

  try {
    await navigator.clipboard.writeText(getShareMessage());
    return 'copied';
  } catch {
    return 'cancelled';
  }
}

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  const onShare = async () => {
    const result = await shareGuide();
    if (result === 'copied') {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <button
      type="button"
      onClick={onShare}
      className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-[1.05rem] px-5 py-3.5 rounded-[1.15rem] shadow-sm hover:opacity-95 active:scale-[0.98] transition-all duration-300"
    >
      {copied ? <Check size={20} strokeWidth={2.5} /> : <Share2 size={20} strokeWidth={2.5} />}
      {copied ? shareContent.copied : shareContent.buttonLabel}
    </button>
  );
}

export function ShareCard() {
  const [copied, setCopied] = useState(false);

  const onShare = async () => {
    const result = await shareGuide();
    if (result === 'copied') {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    }
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(getShareMessage());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      // Some browsers block clipboard without a secure context.
    }
  };

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(getShareMessage())}`;

  return (
    <div className="bg-primary/10 border border-primary/10 rounded-[1.5rem] p-6 md:p-8 text-center md:text-left">
      <h2 className="text-[1.35rem] md:text-2xl font-bold tracking-tight text-foreground mb-2">
        {shareContent.heading}
      </h2>
      <p className="text-[1.05rem] leading-relaxed text-foreground/80 mb-5 max-w-2xl">
        {shareContent.description}
      </p>
      <div className="flex flex-col sm:flex-row gap-2.5">
        <button
          type="button"
          onClick={onShare}
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-[1.05rem] px-5 py-3.5 rounded-[1.15rem] shadow-sm hover:opacity-95 active:scale-[0.98] transition-all duration-300"
        >
          {copied ? <Check size={20} strokeWidth={2.5} /> : <Share2 size={20} strokeWidth={2.5} />}
          {copied ? shareContent.copied : shareContent.buttonLabel}
        </button>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-card text-foreground font-semibold text-[1.05rem] px-5 py-3.5 rounded-[1.15rem] border border-border shadow-sm hover:bg-secondary/40 transition-colors"
        >
          <MessageCircle size={20} strokeWidth={2.25} className="text-primary" />
          {shareContent.whatsappLabel}
        </a>
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex items-center justify-center gap-2 bg-card text-foreground font-semibold text-[1.05rem] px-5 py-3.5 rounded-[1.15rem] border border-border shadow-sm hover:bg-secondary/40 transition-colors"
        >
          {copied ? <Check size={20} strokeWidth={2.5} className="text-primary" /> : <Copy size={20} strokeWidth={2.25} className="text-primary" />}
          {copied ? shareContent.copied : shareContent.copyLabel}
        </button>
      </div>
    </div>
  );
}

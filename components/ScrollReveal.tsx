"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (elements.length === 0) return;
    document.documentElement.classList.add("reveal-enabled");

    const revealInView = () => {
      const viewH = window.innerHeight;
      elements.forEach((element) => {
        if (element.classList.contains("is-revealed")) return;
        const rect = element.getBoundingClientRect();
        const entersViewport = rect.top <= viewH * 0.9 && rect.bottom >= viewH * 0.05;
        if (entersViewport) {
          const delay = element.dataset.revealDelay;
          if (delay) element.style.transitionDelay = `${delay}ms`;
          element.classList.add("is-revealed");
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const target = entry.target as HTMLElement;
          const delay = target.dataset.revealDelay;
          if (delay) {
            target.style.transitionDelay = `${delay}ms`;
          }

          target.classList.add("is-revealed");
          observer.unobserve(target);
        });
      },
      {
        root: null,
        threshold: 0.12,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    const raf = window.requestAnimationFrame(() => {
      elements.forEach((element) => observer.observe(element));
      revealInView();
    });

    const onScroll = () => revealInView();
    const onHash = () => {
      window.requestAnimationFrame(revealInView);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onHash);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHash);
      observer.disconnect();
    };
  }, []);

  return null;
}


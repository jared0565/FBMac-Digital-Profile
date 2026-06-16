"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X, ExternalLink } from "lucide-react";
import type { Project } from "@/data/portfolio";

/**
 * Accessible, dependency-free screenshot lightbox.
 * Shows a project's desktop + mobile screenshots side-by-side (stacked on
 * small screens). Closes on Esc, backdrop click, or the close button.
 * Animation uses Tailwind transitions to match the rest of the codebase.
 */
export default function Lightbox({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | null>(null);

  const requestClose = useCallback(() => {
    if (closeTimer.current !== null) return;
    setVisible(false);
    closeTimer.current = window.setTimeout(onClose, 200);
  }, [onClose]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    const prevActive = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => closeBtnRef.current?.focus(), 60);

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        requestClose();
        return;
      }
      if (e.key === "Tab") {
        const nodes = dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        );
        if (!nodes || nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (!dialogRef.current?.contains(document.activeElement)) {
          e.preventDefault();
          first.focus();
          return;
        }
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(focusTimer);
      if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
      cancelAnimationFrame(raf);
      document.body.style.overflow = prevOverflow;
      prevActive?.focus?.();
    };
  }, [requestClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={requestClose}
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name}: desktop and mobile screenshots`}
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-lg bg-[#10151d] border border-[#2a3441]/60 shadow-2xl transition-all duration-200 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 p-5 bg-[#10151d]/95 backdrop-blur border-b border-[#2a3441]/60">
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-[#f4efe6] truncate">
              {project.name}
            </h3>
            <p
              className="text-sm font-medium truncate"
              style={{ color: project.color }}
            >
              {project.tagline}
            </p>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={requestClose}
            aria-label="Close screenshots"
            className="shrink-0 p-2 rounded-lg bg-[#171f2a] text-[#b8c0cc] hover:text-[#f4efe6] hover:bg-[#1d2733] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a45e]"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body: desktop + mobile side-by-side, stacked on small screens */}
        <div className="p-5 flex flex-col md:flex-row gap-6 items-center">
          <figure className="w-full md:flex-1 m-0">
            <figcaption className="text-xs font-semibold uppercase tracking-wide text-[#b8c0cc]/80 mb-2">
              Desktop
            </figcaption>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.screenshotDesktop}
              alt={`${project.screenshotAlt} (desktop)`}
              width={1280}
              height={800}
              className="w-full rounded-lg border border-[#2a3441]/60"
            />
          </figure>

          <figure className="w-full md:w-auto md:shrink-0 m-0 flex flex-col items-center">
            <figcaption className="text-xs font-semibold uppercase tracking-wide text-[#b8c0cc]/80 mb-2 self-start md:self-center">
              Mobile
            </figcaption>
            <div className="w-[190px] rounded-[2rem] border-[5px] border-[#2a3441] bg-black p-1 shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.screenshotMobile}
                alt={`${project.screenshotAlt} (mobile)`}
                width={390}
                height={844}
                className="w-full rounded-[1.6rem]"
              />
            </div>
          </figure>
        </div>

        {/* Footer */}
        <div className="p-5 pt-0 flex justify-end">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-[#07090d] transition hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#10151d] focus-visible:ring-[#c9a45e]"
            style={{ backgroundColor: project.color }}
          >
            Visit live site
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}

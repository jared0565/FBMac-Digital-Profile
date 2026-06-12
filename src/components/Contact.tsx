"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import FadeIn from "./FadeIn";

function LinkedInIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#030712]"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-[#f59e0b] text-sm font-semibold tracking-widest uppercase mb-4">
              Connect
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#f9fafb] mb-4">
              Let&apos;s Work Together
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-2xl mx-auto text-[#9ca3af] text-lg">
              Have a project in mind or want to discuss how digital
              transformation can help your business? I am open to freelance
              opportunities, collaborations, and full-time roles.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <a
              href="mailto:fbmacagba@gmail.com"
              className="group flex flex-col items-center p-6 rounded-2xl bg-[#111827] border border-[#374151]/50 hover:border-[#f59e0b]/40 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center mb-4 group-hover:bg-[#f59e0b]/20 transition-colors">
                <Mail className="w-6 h-6 text-[#f59e0b]" />
              </div>
              <span className="text-sm font-semibold text-[#f9fafb] mb-1">
                Email
              </span>
              <span className="text-xs text-[#9ca3af] text-center">
                fbmacagba@gmail.com
              </span>
            </a>

            <a
              href="tel:07429578266"
              className="group flex flex-col items-center p-6 rounded-2xl bg-[#111827] border border-[#374151]/50 hover:border-[#f59e0b]/40 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center mb-4 group-hover:bg-[#f59e0b]/20 transition-colors">
                <Phone className="w-6 h-6 text-[#f59e0b]" />
              </div>
              <span className="text-sm font-semibold text-[#f9fafb] mb-1">
                Phone
              </span>
              <span className="text-xs text-[#9ca3af] text-center">
                07429 578266
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/fbmacagba/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 rounded-2xl bg-[#111827] border border-[#374151]/50 hover:border-[#f59e0b]/40 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center mb-4 group-hover:bg-[#f59e0b]/20 transition-colors">
                <LinkedInIcon size={24} />
              </div>
              <span className="text-sm font-semibold text-[#f9fafb] mb-1">
                LinkedIn
              </span>
              <span className="text-xs text-[#9ca3af] text-center">
                linkedin.com/in/fbmacagba
              </span>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="p-8 rounded-2xl bg-[#111827] border border-[#374151]/50 text-center">
            <MapPin className="w-8 h-8 text-[#f59e0b] mx-auto mb-3" />
            <p className="text-[#f9fafb] font-semibold mb-1">
              Based in London, UK
            </p>
            <p className="text-sm text-[#9ca3af]">
              North London · Strong ties to local community · Flexible for
              on-site, remote, and hybrid roles
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

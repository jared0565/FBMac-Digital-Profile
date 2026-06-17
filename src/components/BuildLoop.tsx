"use client";

import { ArrowDown, RotateCcw } from "lucide-react";

/**
 * Human-led, AI-assisted build loop — an accessible inline SVG workflow diagram.
 * Scales with its container; on narrow screens the wrapper scrolls horizontally
 * so labels stay legible rather than shrinking. Responsible-AI controls are
 * listed as real text below the figure for accessibility.
 */
export default function BuildLoop() {
  const node = {
    fill: "#10151d",
    text: "#f4efe6",
    sub: "#b8c0cc",
  };

  return (
    <figure className="m-0 mb-16" aria-labelledby="buildloop-title">
      <figcaption
        id="buildloop-title"
        className="text-center text-sm font-semibold text-[#c9a45e] mb-1"
      >
        How the work flows
      </figcaption>
      <p className="text-center text-[#b8c0cc] text-sm mb-6 max-w-2xl mx-auto">
        AI assists the build; I own every decision and the release gate. Each
        loop ends in a human approval before anything ships.
      </p>

      <div className="hidden md:block overflow-x-auto rounded-lg border border-[#2a3441]/50 bg-[#0b1018] p-4 sm:p-6">
        <svg
          viewBox="0 0 920 490"
          className="w-full h-auto min-w-[620px]"
          role="img"
          aria-labelledby="buildloop-svgtitle buildloop-svgdesc"
          fontFamily="var(--font-inter), system-ui, sans-serif"
        >
          <title id="buildloop-svgtitle">Human-led, AI-assisted build loop</title>
          <desc id="buildloop-svgdesc">
            A cycle: a PRD/spec feeds an AI-assisted build, which goes to a human
            review and approval gate. Approved work proceeds to test and verify,
            then ships; the cycle then iterates back to the next spec. Rejected
            work at human review returns to the AI-assisted build for revision.
            Failed tests loop back to the AI-assisted build for a bug fix, or all
            the way back to the PRD if a spec gap is discovered. Input validation,
            output verification, least-privilege controls and a human in the loop
            apply throughout.
          </desc>

          <defs>
            <marker
              id="bl-arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="#c9a45e" />
            </marker>
            <marker
              id="bl-arrow-muted"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="#7c8696" />
            </marker>
          </defs>

          {/* ---- forward + loop arrows ---- */}
          {/* PRD -> AI build */}
          <line x1="214" y1="108" x2="368" y2="108" stroke="#c9a45e" strokeWidth="2" markerEnd="url(#bl-arrow)" />
          {/* AI build -> Human review */}
          <line x1="552" y1="108" x2="704" y2="108" stroke="#c9a45e" strokeWidth="2" markerEnd="url(#bl-arrow)" />
          {/* approve: Human review -> Test (down) */}
          <line x1="798" y1="146" x2="798" y2="300" stroke="#c9a45e" strokeWidth="2" markerEnd="url(#bl-arrow)" />
          <text x="812" y="226" fill="#c9a45e" fontSize="13" fontWeight="600">approve</text>
          {/* Test -> Ship (left) */}
          <line x1="704" y1="336" x2="552" y2="336" stroke="#c9a45e" strokeWidth="2" markerEnd="url(#bl-arrow)" />
          {/* iterate: Ship -> PRD (loop back, up-left) */}
          <path
            d="M368,336 L150,336 Q120,336 120,306 L120,148"
            fill="none"
            stroke="#c9a45e"
            strokeWidth="2"
            markerEnd="url(#bl-arrow)"
          />
          <text x="104" y="240" fill="#c9a45e" fontSize="13" fontWeight="600" textAnchor="end">iterate</text>
          {/* reject/revise: Human review -> AI build (dashed arc over the top) */}
          <path
            d="M798,70 C798,22 460,22 460,68"
            fill="none"
            stroke="#7c8696"
            strokeWidth="2"
            strokeDasharray="5 5"
            markerEnd="url(#bl-arrow-muted)"
          />
          <text x="629" y="20" fill="#7c8696" fontSize="13" fontWeight="600" textAnchor="middle">revise</text>

          {/* test fail: Test & Verify -> AI-Assisted Build (bug fix) */}
          <path
            d="M798,370 L798,420 Q798,428 791,428 L469,428 Q462,428 462,420 L462,142"
            fill="none"
            stroke="#7c8696"
            strokeWidth="2"
            strokeDasharray="5 5"
            markerEnd="url(#bl-arrow-muted)"
          />
          <text x="630" y="421" fill="#7c8696" fontSize="12" fontWeight="600" textAnchor="middle">bug fix</text>
          {/* test fail: Test & Verify -> PRD / Spec (spec gap) */}
          <path
            d="M798,370 L798,452 Q798,462 791,462 L57,462 Q50,462 50,452 L50,142"
            fill="none"
            stroke="#7c8696"
            strokeWidth="2"
            strokeDasharray="5 5"
            markerEnd="url(#bl-arrow-muted)"
          />
          <text x="420" y="455" fill="#7c8696" fontSize="12" fontWeight="600" textAnchor="middle">spec gap</text>

          {/* ---- nodes ---- */}
          {/* N1 PRD / Spec (human) */}
          <g>
            <rect x="38" y="74" width="176" height="68" rx="12" fill={node.fill} stroke="#c9a45e" strokeWidth="1.5" />
            <text x="126" y="113" textAnchor="middle" fill={node.text} fontSize="16" fontWeight="700">PRD / Spec</text>
          </g>
          {/* N2 AI-Assisted Build (AI) */}
          <g>
            <rect x="372" y="74" width="180" height="68" rx="12" fill={node.fill} stroke="#6bc7c4" strokeWidth="1.5" />
            <text x="462" y="105" textAnchor="middle" fill={node.text} fontSize="16" fontWeight="700">AI-Assisted</text>
            <text x="462" y="125" textAnchor="middle" fill="#6bc7c4" fontSize="13" fontWeight="600">build</text>
          </g>
          {/* N3 Human Review · gate (human decision) */}
          <g>
            <rect x="706" y="74" width="184" height="68" rx="12" fill={node.fill} stroke="#c9a45e" strokeWidth="2" />
            <text x="798" y="105" textAnchor="middle" fill={node.text} fontSize="16" fontWeight="700">Human Review</text>
            <text x="798" y="125" textAnchor="middle" fill="#c9a45e" fontSize="12.5" fontWeight="600">◆ approval gate</text>
          </g>
          {/* N4 Test & Verify (human) */}
          <g>
            <rect x="706" y="302" width="184" height="68" rx="12" fill={node.fill} stroke="#2a3441" strokeWidth="1.5" />
            <text x="798" y="341" textAnchor="middle" fill={node.text} fontSize="16" fontWeight="700">Test &amp; Verify</text>
          </g>
          {/* N5 Ship (human) */}
          <g>
            <rect x="372" y="302" width="180" height="68" rx="12" fill={node.fill} stroke="#2a3441" strokeWidth="1.5" />
            <text x="462" y="341" textAnchor="middle" fill={node.text} fontSize="16" fontWeight="700">Ship</text>
          </g>
        </svg>
      </div>

      {/* Mobile: vertical stacked flow — whole loop visible, no horizontal scroll */}
      <ol
        className="md:hidden list-none m-0 p-4 rounded-lg border border-[#2a3441]/50 bg-[#0b1018]"
        aria-label="Build loop steps"
      >
        <li
          className="rounded-lg bg-[#10151d] border-2 p-3 text-center"
          style={{ borderColor: "#c9a45e" }}
        >
          <p className="font-bold text-[#f4efe6]">PRD / Spec</p>
        </li>
        <li className="flex justify-center py-1.5" aria-hidden="true">
          <ArrowDown className="w-5 h-5 text-[#c9a45e]" />
        </li>
        <li
          className="rounded-lg bg-[#10151d] border-2 p-3 text-center"
          style={{ borderColor: "#6bc7c4" }}
        >
          <p className="font-bold text-[#f4efe6]">AI-Assisted Build</p>
          <p className="text-xs text-[#6bc7c4]">AI implements</p>
        </li>
        <li className="flex justify-center py-1.5" aria-hidden="true">
          <ArrowDown className="w-5 h-5 text-[#c9a45e]" />
        </li>
        <li
          className="rounded-lg bg-[#10151d] border-2 p-3 text-center"
          style={{ borderColor: "#c9a45e" }}
        >
          <p className="font-bold text-[#f4efe6]">Human Review</p>
          <p className="text-xs text-[#c9a45e]">◆ approval gate</p>
          <p className="mt-2 inline-flex items-center gap-1 text-[11px] text-[#7c8696]">
            <RotateCcw className="w-3 h-3" /> reject → revise build
          </p>
        </li>
        <li className="flex items-center justify-center gap-2 py-1.5">
          <ArrowDown className="w-5 h-5 text-[#c9a45e]" aria-hidden="true" />
          <span className="text-xs font-semibold text-[#c9a45e]">approve</span>
        </li>
        <li className="rounded-lg bg-[#10151d] border border-[#2a3441] p-3 text-center">
          <p className="font-bold text-[#f4efe6]">Test &amp; Verify</p>
          <p className="mt-2 inline-flex items-center gap-1 text-[11px] text-[#7c8696]">
            <RotateCcw className="w-3 h-3" /> bug fix → revise build
          </p>
          <p className="mt-1 inline-flex items-center gap-1 text-[11px] text-[#7c8696]">
            <RotateCcw className="w-3 h-3" /> spec gap → back to PRD
          </p>
        </li>
        <li className="flex justify-center py-1.5" aria-hidden="true">
          <ArrowDown className="w-5 h-5 text-[#c9a45e]" />
        </li>
        <li className="rounded-lg bg-[#10151d] border border-[#2a3441] p-3 text-center">
          <p className="font-bold text-[#f4efe6]">Ship</p>
        </li>
        <li className="flex items-center justify-center gap-1.5 pt-3 text-xs font-semibold text-[#c9a45e]">
          <RotateCcw className="w-3.5 h-3.5" /> iterate → next PRD / Spec
        </li>
      </ol>

      {/* legend + responsible-AI controls (accessible text) */}
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-4 text-xs text-[#b8c0cc]">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c9a45e]" /> Human-led
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6bc7c4]" /> AI-assisted
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Input validation", "Output verification", "Least privilege", "Human in the loop"].map(
            (c) => (
              <span
                key={c}
                className="px-2.5 py-1 text-xs font-medium text-[#b8c0cc] bg-[#10151d] rounded-full border border-[#2a3441]/50"
              >
                {c}
              </span>
            ),
          )}
        </div>
      </div>
    </figure>
  );
}

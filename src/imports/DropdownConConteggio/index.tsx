import svgPaths from "./svg-shvrpcib2t";

function ArrowDown() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow-down-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="arrow-down-01">
          <path d={svgPaths.p1bc80a90} id="Vector" stroke="#141B34" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

export default function DropdownConConteggio() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[16px] py-[12px] relative rounded-[41px] size-full" data-name="dropdown con conteggio">
      <div aria-hidden className="absolute border border-[#e1dfe0] border-solid inset-0 pointer-events-none rounded-[41px]" />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        6 people
      </p>
      <ArrowDown />
    </div>
  );
}
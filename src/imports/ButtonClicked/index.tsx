import svgPaths from "./svg-6m39emec1y";

function Check() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="check">
          <path d={svgPaths.p1c54ec60} id="Vector" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

export default function ButtonClicked() {
  return (
    <div className="bg-[#fffefd] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[22px] size-full" data-name="button clicked">
      <div aria-hidden className="absolute border border-[#e1dfe0] border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Check />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Added
      </p>
    </div>
  );
}
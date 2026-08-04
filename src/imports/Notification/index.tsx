import svgPaths from "./svg-w77at4o8um";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="icon">
          <rect fill="#222222" height="24" rx="12" width="24" />
          <path d={svgPaths.p384c7700} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

export default function Notification() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center pl-[8px] pr-[16px] py-[8px] relative rounded-[34px] size-full" data-name="notification">
      <Icon />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        “name” added to “Lisbon”
      </p>
    </div>
  );
}
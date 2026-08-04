import svgPaths from "./svg-vubmnhtom8";

function Check() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="check">
          <path d={svgPaths.pe36d10} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-white content-stretch flex items-center p-[4px] relative rounded-[24px] shrink-0" data-name="icon">
      <Check />
    </div>
  );
}

export default function ToggleGroupEnabled() {
  return (
    <div className="bg-[#222] content-stretch flex items-center justify-end p-[2px] relative rounded-[34px] size-full" data-name="Toggle group enabled">
      <Icon />
    </div>
  );
}
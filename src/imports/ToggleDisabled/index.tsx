import svgPaths from "./svg-xp7huca2z";

function Check() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="check" opacity="0">
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

export default function ToggleDisabled() {
  return (
    <div className="bg-[#b3b3b3] content-stretch flex items-center p-[2px] relative rounded-[34px] size-full" data-name="Toggle disabled">
      <Icon />
    </div>
  );
}
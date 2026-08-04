import svgPaths from "./svg-00j8af9fkv";

function Check() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="check">
          <path d={svgPaths.p6262c00} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

export default function CheckboxEnabled() {
  return (
    <div className="bg-[#222] content-stretch flex items-center p-[5px] relative rounded-[31px] size-full" data-name="checkbox enabled">
      <Check />
    </div>
  );
}
function MinusSign() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="minus-sign">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="minus-sign">
          <path d="M10 6H2" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
        </g>
      </svg>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[#222] border border-[#222] border-solid content-stretch flex items-center p-[6px] relative rounded-[16px] size-full" data-name="button">
      <MinusSign />
    </div>
  );
}
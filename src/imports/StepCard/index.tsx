import svgPaths from "./svg-lba1yfdlm0";
import imgImage from "./4e8e1697f93bee03a06cd7445b6e479ad066a3ea.png";

function Check() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="check" opacity="0">
          <path d={svgPaths.p35f66700} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex items-center p-[20px] relative rounded-[12px] shrink-0" data-name="image">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#f0f2ff] inset-0 rounded-[12px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img alt="" className="absolute left-[-21.11%] max-w-none size-[147.94%] top-[-23.84%]" src={imgImage} />
        </div>
      </div>
      <Check />
    </div>
  );
}

function TextRow() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[14px] w-full" data-name="Text row">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#222] w-[165px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Dinner, let’s vote
      </p>
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#808080] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        8:00PM
      </p>
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[11.815px]" data-name="clock-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.8154" preserveAspectRatio="none" viewBox="0 0 11.8154 11.8154" width="11.8154">
        <g id="clock-01">
          <path d={svgPaths.p2af27000} fill="#D32D1D" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#fff4f3] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <Clock />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#d32d1d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        58 m left
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[22px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[22px]" />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Jump to Poll
      </p>
    </div>
  );
}

function BottomRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[214.815px]" data-name="bottom row">
      <Badge />
      <Button />
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[213px]" data-name="info">
      <TextRow />
      <BottomRow />
    </div>
  );
}

export default function StepCard() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-dashed content-stretch flex gap-[14px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[18px] size-full" data-name="Step card">
      <Image />
      <Info />
    </div>
  );
}
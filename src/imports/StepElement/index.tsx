import svgPaths from "./svg-aj6ixmvjen";
import imgImage from "./0e34e0f4131fdb052ee4279f04e28e1b3006c1a9.png";

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
      <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none rounded-[12px] size-full" src={imgImage} />
      <Check />
    </div>
  );
}

function TextRow() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[14px] w-full" data-name="Text row">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#222] w-[165px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>{`Dinner at `}</p>
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#808080] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        23:00
      </p>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#f0f2ff] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#4670a5] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Food
      </p>
    </div>
  );
}

function CancelCircle() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="cancel-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="cancel-circle">
          <path d={svgPaths.p111d3480} fill="#D32D1D" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#fff4f3] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <CancelCircle />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#d32d1d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Not Booked
      </p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#fff6e9] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#8a6630] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €€
      </p>
    </div>
  );
}

function BadgeStack() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="badge stack">
      <Badge />
      <Badge1 />
      <Badge2 />
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[213px]" data-name="info">
      <TextRow />
      <BadgeStack />
    </div>
  );
}

export default function StepElement() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex gap-[14px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[18px] size-full" data-name="step element">
      <Image />
      <Info />
    </div>
  );
}
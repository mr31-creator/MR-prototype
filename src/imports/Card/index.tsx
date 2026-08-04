import svgPaths from "./svg-ez7hzsrg85";
import imgImage from "./e57e789c2e5fb32f611ce186062144939a03c771.png";

function Location1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="location-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="location-01">
          <path d={svgPaths.p6844780} fill="#FF4735" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Location() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="location">
      <Location1 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Travessa da Bica, 7
      </p>
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="star">
          <path d={svgPaths.pc3853f0} fill="#5583BE" id="Vector" stroke="#5583BE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#f0f2ff] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <Star />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#5583be] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        4.1
      </p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#fff6e9] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#c4a06a] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €€
      </p>
    </div>
  );
}

function Restaurant() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="restaurant-03">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="restaurant-03">
          <path d="M2 10.5005L3.50036 9" id="Vector" stroke="#006F00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          <path d="M7.5 5.00049L7 5.50049" id="Vector_2" stroke="#006F00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          <path d={svgPaths.p18974f00} id="Vector_3" stroke="#006F00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          <path d="M10 2.5L8.5 4" id="Vector_4" stroke="#006F00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          <g id="Vector_5">
            <path d={svgPaths.p1c6d2900} fill="#006F00" />
            <path d={svgPaths.p191d8800} stroke="#006F00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#eaf9f1] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <Restaurant />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#006f00] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Romantic
      </p>
    </div>
  );
}

function BadgeStack() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="badge stack">
      <Badge />
      <Badge1 />
      <Badge2 />
    </div>
  );
}

function DescriptionSection() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[180px]" data-name="Description section">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[20px] min-w-full relative shrink-0 text-[#222] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Cais Vinte
      </p>
      <Location />
      <BadgeStack />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="relative rounded-[12px] shrink-0 size-[80px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
          <img alt="" className="absolute h-[133.75%] left-[-0.69%] max-w-none top-[-25.47%] w-[100.35%]" src={imgImage} />
        </div>
      </div>
      <DescriptionSection />
    </div>
  );
}

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

function Checkbox() {
  return (
    <div className="bg-[#222] content-stretch flex items-center p-[5px] relative rounded-[31px] shrink-0" data-name="checkbox">
      <Check />
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white border-[#222] border-[1.2px] border-solid content-stretch flex items-center justify-between pl-[12px] pr-[16px] py-[12px] relative rounded-[24px] size-full" data-name="card">
      <Frame />
      <Checkbox />
    </div>
  );
}
import svgPaths from "./svg-ui1uah2old";
import imgImage99 from "./89ff8e2e3ae3d81e54dc833d6ecde33d60f076a4.png";
import imgImage from "./3869b8c6a330fc2bc9b1626e3421f5ff5944ba22.png";
import imgImage1 from "./90bdadef871284bd0862c7e837248275b3f6e646.png";
import imgImage2 from "./749863670c41f2a7f38aa36fecfa78fa25e721ac.png";
import imgImage3 from "./a8e422fb6c09ee23ad53ec5055fc0195dc54bba3.png";
import imgImage4 from "./f71ff927d4ada37d6ed2d954908e7505fb38b535.png";
import imgImage5 from "./e57e789c2e5fb32f611ce186062144939a03c771.png";
import imgImage6 from "./488e711eafd074fe27a5095c94328c64ffa43ebd.png";
import imgImage7 from "./2e4a2450ea8efeada828e329ea3bcaba814dfc66.png";
import imgImage8 from "./74eba529b810b4b53bd73de2933868c973e5b9f9.png";
import imgImage9 from "./ca49743a65d02d8ea7f712698cea449ded3d5232.png";

function GrabberSection() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center left-0 px-[84px] py-[4px] top-0 w-[402px]" data-name="grabber section">
      <div className="bg-[#c4c4c4] h-[4px] relative rounded-[14px] shrink-0 w-[47.235px]" data-name="grabber" />
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-white border-[#222] border-[1.65px] border-solid h-[88px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="icon">
      <div className="absolute left-[3.85px] size-[77px] top-[3.85px]" data-name="image 99">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage99} />
      </div>
    </div>
  );
}

function Category() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-[88px]" data-name="Category">
      <Icon />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] text-center w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Food
      </p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-white border-[#e1dfe0] border-[1.1px] border-solid h-[88px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="icon">
      <div className="absolute left-[2.2px] size-[82.5px] top-[1.1px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Category1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-[88px]" data-name="Category">
      <Icon1 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#333] text-[14px] text-center w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Experiences
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-white border-[#e1dfe0] border-[1.1px] border-solid h-[88px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="icon">
      <div className="absolute left-[4.4px] size-[78.1px] top-[3.3px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Category2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-[88px]" data-name="Category">
      <Icon2 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#333] text-[14px] text-center w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Stays
      </p>
    </div>
  );
}

function CategorySelector() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Category selector">
      <Category />
      <Category1 />
      <Category2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] h-[43px] items-start relative shrink-0 whitespace-nowrap">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Group vote
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#808080] text-[14px]">The top pick lands in your itinerary</p>
    </div>
  );
}

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

function Icon3() {
  return (
    <div className="bg-white content-stretch flex items-center p-[4px] relative rounded-[24px] shrink-0" data-name="icon">
      <Check />
    </div>
  );
}

function Toggle() {
  return (
    <div className="bg-[#b3b3b3] content-stretch flex items-center p-[2px] relative rounded-[34px] shrink-0 w-[51px]" data-name="Toggle">
      <Icon3 />
    </div>
  );
}

function GroupVoteSection() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Group vote section">
      <Frame />
      <Toggle />
    </div>
  );
}

function Header() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between relative shrink-0 w-full whitespace-nowrap" data-name="header">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Time
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#808080] text-[12px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Poll closes 1 h before reservation
      </p>
    </div>
  );
}

function Slot() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex items-center justify-center px-[12px] py-[10px] relative rounded-[10px] shrink-0" data-name="Slot">
      <p className="[word-break:break-word] font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#333] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        6:00 PM
      </p>
    </div>
  );
}

function Slot1() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex items-center justify-center px-[12px] py-[10px] relative rounded-[10px] shrink-0" data-name="Slot">
      <p className="[word-break:break-word] font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#333] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        7:00 PM
      </p>
    </div>
  );
}

function Slot2() {
  return (
    <div className="bg-white border-[#222] border-[1.5px] border-solid content-stretch flex items-center justify-center px-[12px] py-[10px] relative rounded-[10px] shrink-0" data-name="Slot">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        8:00 PM
      </p>
    </div>
  );
}

function Slot3() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex items-center justify-center px-[12px] py-[10px] relative rounded-[10px] shrink-0" data-name="Slot">
      <p className="[word-break:break-word] font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#333] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        9:00 PM
      </p>
    </div>
  );
}

function TimeSlots() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Time slots">
      <Slot />
      <Slot1 />
      <Slot2 />
      <Slot3 />
    </div>
  );
}

function TimeSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Time section">
      <Header />
      <TimeSlots />
    </div>
  );
}

function Send() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="send">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="send">
          <path d={svgPaths.p3187ef80} id="Vector" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p27fcd940} id="Vector_2" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-down-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="arrow-down-01">
          <path d={svgPaths.p35769e00} id="Vector" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Chip() {
  return (
    <div className="bg-[#eee] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="Chip">
      <Send />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Rua do Alcrim, 10
      </p>
      <ArrowDown />
    </div>
  );
}

function LocationFilter() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="location filter">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Nearest to
      </p>
      <Chip />
    </div>
  );
}

function FilterHorizontal() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="filter-horizontal">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="filter-horizontal">
          <path d="M2 4.66667H4" id="Vector" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 11.3333H6" id="Vector_2" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 11.3333H14" id="Vector_3" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 4.66667H14" id="Vector_4" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3bf64e00} id="Vector_5" stroke="#333333" />
          <path d={svgPaths.pf0b2fa0} id="Vector_6" stroke="#333333" />
        </g>
      </svg>
    </div>
  );
}

function FiltersRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Filters row">
      <LocationFilter />
      <FilterHorizontal />
    </div>
  );
}

function Location10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="location-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="location-01">
          <path d={svgPaths.p73fed80} fill="#FF4735" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Location() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="location">
      <Location10 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Rua do Alecrim, 12
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
        4.8
      </p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#fff6e9] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#c4a06a] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        <span className="leading-[17.202px]">€</span>
        <span className="leading-[17.202px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
          €
        </span>
      </p>
    </div>
  );
}

function Restaurant6() {
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
      <Restaurant6 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#006f00] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Traditional
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
        Taberna do Cais
      </p>
      <Location />
      <BadgeStack />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="checkbox">
          <circle cx="12" cy="12" id="vector" r="11.4" stroke="#888888" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex items-center justify-between pl-[12px] pr-[16px] py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="card">
      <div className="relative rounded-[12px] shrink-0 size-[80px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
          <img alt="" className="absolute h-[133.29%] left-[0.04%] max-w-none top-[-22.45%] w-full" src={imgImage2} />
        </div>
      </div>
      <DescriptionSection />
      <Checkbox />
    </div>
  );
}

function Location2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="location-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="location-01">
          <path d={svgPaths.p138dc600} fill="#FF4735" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Location1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="location">
      <Location2 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Calçada do Combro, 45
      </p>
    </div>
  );
}

function Star1() {
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

function Badge3() {
  return (
    <div className="bg-[#f0f2ff] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <Star1 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#5583be] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        3.4
      </p>
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[#fff6e9] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#c4a06a] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        <span className="leading-[17.202px]">€€</span>
        <span className="leading-[17.202px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
          €
        </span>
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

function Badge5() {
  return (
    <div className="bg-[#eaf9f1] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <Restaurant />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#006f00] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        River view
      </p>
    </div>
  );
}

function BadgeStack1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="badge stack">
      <Badge3 />
      <Badge4 />
      <Badge5 />
    </div>
  );
}

function DescriptionSection1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[180px]" data-name="Description section">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[20px] min-w-full relative shrink-0 text-[#222] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Miradouro 28
      </p>
      <Location1 />
      <BadgeStack1 />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="checkbox">
          <circle cx="12" cy="12" id="vector" r="11.4" stroke="#888888" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex items-center justify-between pl-[12px] pr-[16px] py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="card">
      <div className="relative rounded-[12px] shrink-0 size-[80px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
          <img alt="" className="absolute h-[133.75%] left-[-0.17%] max-w-none top-[-33.75%] w-[100.35%]" src={imgImage3} />
        </div>
      </div>
      <DescriptionSection1 />
      <Checkbox1 />
    </div>
  );
}

function Location4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="location-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="location-01">
          <path d={svgPaths.p14c1f40} fill="#FF4735" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Location3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="location">
      <Location4 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Travessa da Bica, 7
      </p>
    </div>
  );
}

function Star2() {
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

function Badge6() {
  return (
    <div className="bg-[#f0f2ff] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <Star2 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#5583be] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        4.4
      </p>
    </div>
  );
}

function Badge7() {
  return (
    <div className="bg-[#fff6e9] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#c4a06a] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        <span className="leading-[17.202px]">€€</span>
        <span className="leading-[17.202px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
          €
        </span>
      </p>
    </div>
  );
}

function Restaurant1() {
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

function Badge8() {
  return (
    <div className="bg-[#eaf9f1] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <Restaurant1 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#006f00] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Formal
      </p>
    </div>
  );
}

function BadgeStack2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="badge stack">
      <Badge6 />
      <Badge7 />
      <Badge8 />
    </div>
  );
}

function DescriptionSection2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[180px]" data-name="Description section">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[20px] min-w-full relative shrink-0 text-[#222] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>{`Fado & Sal`}</p>
      <Location3 />
      <BadgeStack2 />
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="checkbox">
          <circle cx="12" cy="12" id="vector" r="11.4" stroke="#888888" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex items-center justify-between pl-[12px] pr-[16px] py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="card">
      <div className="relative rounded-[12px] shrink-0 size-[80px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
          <img alt="" className="absolute h-[192.78%] left-[-8.75%] max-w-none top-[-43.09%] w-[108.48%]" src={imgImage4} />
        </div>
      </div>
      <DescriptionSection2 />
      <Checkbox2 />
    </div>
  );
}

function Location6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="location-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="location-01">
          <path d={svgPaths.p963ab80} fill="#FF4735" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Location5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="location">
      <Location6 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Travessa da Bica, 7
      </p>
    </div>
  );
}

function Star3() {
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

function Badge9() {
  return (
    <div className="bg-[#f0f2ff] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <Star3 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#5583be] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        4.1
      </p>
    </div>
  );
}

function Badge10() {
  return (
    <div className="bg-[#fff6e9] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#c4a06a] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €€
      </p>
    </div>
  );
}

function Restaurant2() {
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

function Badge11() {
  return (
    <div className="bg-[#eaf9f1] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <Restaurant2 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#006f00] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Romantic
      </p>
    </div>
  );
}

function BadgeStack3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="badge stack">
      <Badge9 />
      <Badge10 />
      <Badge11 />
    </div>
  );
}

function DescriptionSection3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[180px]" data-name="Description section">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[20px] min-w-full relative shrink-0 text-[#222] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Cais Vinte
      </p>
      <Location5 />
      <BadgeStack3 />
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="checkbox">
          <circle cx="12" cy="12" id="vector" r="11.4" stroke="#888888" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex items-center justify-between pl-[12px] pr-[16px] py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="card">
      <div className="relative rounded-[12px] shrink-0 size-[80px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
          <img alt="" className="absolute h-[133.75%] left-[-0.69%] max-w-none top-[-25.47%] w-[100.35%]" src={imgImage5} />
        </div>
      </div>
      <DescriptionSection3 />
      <Checkbox3 />
    </div>
  );
}

function Location8() {
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

function Location7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="location">
      <Location8 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Rua da Rosa, 34
      </p>
    </div>
  );
}

function Star4() {
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

function Badge12() {
  return (
    <div className="bg-[#f0f2ff] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <Star4 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#5583be] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        3.9
      </p>
    </div>
  );
}

function Badge13() {
  return (
    <div className="bg-[#fff6e9] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#c4a06a] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €
      </p>
    </div>
  );
}

function Restaurant3() {
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

function Badge14() {
  return (
    <div className="bg-[#eaf9f1] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <Restaurant3 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#006f00] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Casual
      </p>
    </div>
  );
}

function BadgeStack4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="badge stack">
      <Badge12 />
      <Badge13 />
      <Badge14 />
    </div>
  );
}

function DescriptionSection4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[180px]" data-name="Description section">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[20px] min-w-full relative shrink-0 text-[#222] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>{`Sardinha & Co.`}</p>
      <Location7 />
      <BadgeStack4 />
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="checkbox">
          <circle cx="12" cy="12" id="vector" r="11.4" stroke="#888888" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex items-center justify-between pl-[12px] pr-[16px] py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="card">
      <div className="relative rounded-[12px] shrink-0 size-[80px]" data-name="image">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
          <div className="absolute inset-0 overflow-hidden rounded-[12px]">
            <img alt="" className="absolute h-[133.75%] left-[-0.69%] max-w-none top-[-25.47%] w-[100.35%]" src={imgImage5} />
          </div>
          <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgImage6} />
        </div>
      </div>
      <DescriptionSection4 />
      <Checkbox4 />
    </div>
  );
}

function Location11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="location-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="location-01">
          <path d={svgPaths.p1792e700} fill="#FF4735" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Location9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="location">
      <Location11 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Rua dos Bacalhoeiros, 9
      </p>
    </div>
  );
}

function Star5() {
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

function Badge15() {
  return (
    <div className="bg-[#f0f2ff] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <Star5 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#5583be] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        4.9
      </p>
    </div>
  );
}

function Badge16() {
  return (
    <div className="bg-[#fff6e9] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#c4a06a] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €€€
      </p>
    </div>
  );
}

function Restaurant4() {
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

function Badge17() {
  return (
    <div className="bg-[#eaf9f1] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <Restaurant4 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#006f00] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Vegan
      </p>
    </div>
  );
}

function BadgeStack5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="badge stack">
      <Badge15 />
      <Badge16 />
      <Badge17 />
    </div>
  );
}

function DescriptionSection5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[180px]" data-name="Description section">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[20px] min-w-full relative shrink-0 text-[#222] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Alma do Tejo
      </p>
      <Location9 />
      <BadgeStack5 />
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="checkbox">
          <circle cx="12" cy="12" id="vector" r="11.4" stroke="#888888" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex items-center justify-between pl-[12px] pr-[16px] py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="card">
      <div className="relative rounded-[12px] shrink-0 size-[80px]" data-name="image">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
          <div className="absolute inset-0 overflow-hidden rounded-[12px]">
            <img alt="" className="absolute h-[133.75%] left-[-0.69%] max-w-none top-[-25.47%] w-[100.35%]" src={imgImage5} />
          </div>
          <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgImage7} />
        </div>
      </div>
      <DescriptionSection5 />
      <Checkbox5 />
    </div>
  );
}

function Location13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="location-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="location-01">
          <path d={svgPaths.p22a801d0} fill="#FF4735" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Location12() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="location">
      <Location13 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Rua do Norte, 21
      </p>
    </div>
  );
}

function Star6() {
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

function Badge18() {
  return (
    <div className="bg-[#f0f2ff] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <Star6 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#5583be] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        3.8
      </p>
    </div>
  );
}

function Badge19() {
  return (
    <div className="bg-[#fff6e9] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#c4a06a] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €€
      </p>
    </div>
  );
}

function Restaurant5() {
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

function Badge20() {
  return (
    <div className="bg-[#eaf9f1] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <Restaurant5 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#006f00] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Formal
      </p>
    </div>
  );
}

function BadgeStack6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="badge stack">
      <Badge18 />
      <Badge19 />
      <Badge20 />
    </div>
  );
}

function DescriptionSection6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[180px]" data-name="Description section">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[20px] min-w-full relative shrink-0 text-[#222] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Petisco 21
      </p>
      <Location12 />
      <BadgeStack6 />
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="checkbox">
          <circle cx="12" cy="12" id="vector" r="11.4" stroke="#888888" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex items-center justify-between pl-[12px] pr-[16px] py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="card">
      <div className="relative rounded-[12px] shrink-0 size-[80px]" data-name="image">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
          <div className="absolute inset-0 overflow-hidden rounded-[12px]">
            <img alt="" className="absolute h-[133.75%] left-[-0.69%] max-w-none top-[-25.47%] w-[100.35%]" src={imgImage5} />
          </div>
          <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgImage8} />
        </div>
      </div>
      <DescriptionSection6 />
      <Checkbox6 />
    </div>
  );
}

function Location15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="location-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="location-01">
          <path d={svgPaths.p3ecab200} fill="#FF4735" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Location14() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="location">
      <Location15 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Praça das Flores, 5
      </p>
    </div>
  );
}

function Star7() {
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

function Badge21() {
  return (
    <div className="bg-[#f0f2ff] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <Star7 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#5583be] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        3.7
      </p>
    </div>
  );
}

function Badge22() {
  return (
    <div className="bg-[#fff6e9] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#c4a06a] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €€
      </p>
    </div>
  );
}

function Restaurant7() {
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

function Badge23() {
  return (
    <div className="bg-[#eaf9f1] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <Restaurant7 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#006f00] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Fusion
      </p>
    </div>
  );
}

function BadgeStack7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="badge stack">
      <Badge21 />
      <Badge22 />
      <Badge23 />
    </div>
  );
}

function DescriptionSection7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[180px]" data-name="Description section">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[20px] min-w-full relative shrink-0 text-[#222] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Verde Limão
      </p>
      <Location14 />
      <BadgeStack7 />
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkbox">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="checkbox">
          <circle cx="12" cy="12" id="vector" r="11.4" stroke="#888888" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex items-center justify-between pl-[12px] pr-[16px] py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="card">
      <div className="relative rounded-[12px] shrink-0 size-[80px]" data-name="image">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
          <div className="absolute inset-0 overflow-hidden rounded-[12px]">
            <img alt="" className="absolute h-[133.75%] left-[-0.69%] max-w-none top-[-25.47%] w-[100.35%]" src={imgImage5} />
          </div>
          <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgImage9} />
        </div>
      </div>
      <DescriptionSection7 />
      <Checkbox7 />
    </div>
  );
}

function CardStack() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="card stack">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
    </div>
  );
}

function Contents() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Contents">
      <FiltersRow />
      <CardStack />
    </div>
  );
}

function OptionsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Options section">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Choose up to 3 options
      </p>
      <Contents />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section">
      <GroupVoteSection />
      <div className="h-0 relative shrink-0 w-[352px]" data-name="divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 352 1" width="352">
            <path d="M0 0.5H352" id="divider" stroke="#E1DFE0" />
          </svg>
        </div>
      </div>
      <TimeSection />
      <div className="h-0 relative shrink-0 w-[352px]" data-name="divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 352 1" width="352">
            <path d="M0 0.5H352" id="divider" stroke="#E1DFE0" />
          </svg>
        </div>
      </div>
      <OptionsSection />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[352px]" data-name="Content">
      <CategorySelector />
      <Section />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#747474] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[16033390px] shrink-0 w-full" data-name="Button">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[15.291px] relative shrink-0 text-[#d9d9d9] text-[16px] text-center tracking-[-0.0956px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Send poll
      </p>
    </div>
  );
}

function BottomBar() {
  return (
    <div className="bg-white border-[#e1dfe0] border-solid border-t content-stretch flex flex-col gap-[10px] items-start pb-[16px] pt-[12px] px-[25px] relative shrink-0 w-[402px]" data-name="Bottom bar">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#6b6b6b] text-[14px] text-center w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        1/3 selected
      </p>
      <Button />
    </div>
  );
}

export default function BottomSheet() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[26px] items-center overflow-clip pt-[48px] px-[25px] relative rounded-tl-[24px] rounded-tr-[24px] size-full" data-name="Bottom sheet">
      <GrabberSection />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[15.291px] min-w-full relative shrink-0 text-[#222] text-[20px] text-center tracking-[-0.0956px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add an activity
      </p>
      <Content />
      <BottomBar />
    </div>
  );
}
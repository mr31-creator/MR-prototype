import svgPaths from "./svg-c9phpqetvp";
import imgCityImage from "./50066ce80a174823f21475046fb0a062dbc92aef.png";
import imgAvatar from "./4e0a6889650015711af2e87503fb5e63994b55bd.png";
import imgAvatar1 from "./4df2391a52084f34091d2bd873ee9e00f23e4403.png";
import imgAvatar2 from "./4d9cb718b54351e9495877aaff97c6dd9bd51c1b.png";
import imgImage from "./045314cbfb957ebfeb5791e1d492f826c2d50bc4.png";
import imgImage1 from "./4503a8f9cf684cf3c74185f3b9f19a74d217f934.png";
import imgImage2 from "./e57e789c2e5fb32f611ce186062144939a03c771.png";
import imgImage3 from "./2ac5fe649d6031c626cc00f7525902f09bd7d82a.png";
import imgImage4 from "./4a469524ed056cc574b0817b9a863fd06be88866.png";
import imgImage5 from "./0e34e0f4131fdb052ee4279f04e28e1b3006c1a9.png";

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[16.867px]" data-name="arrow-left-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.8675" preserveAspectRatio="none" viewBox="0 0 16.8675 16.8675" width="16.8675">
        <g id="arrow-left-01">
          <path d={svgPaths.pf94bfc0} id="Vector" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] border border-[#e1dfe0] border-solid content-stretch flex items-center p-[11.566px] relative rounded-[31.084px] shrink-0" data-name="button">
      <ArrowLeft />
    </div>
  );
}

function Edit() {
  return (
    <div className="relative shrink-0 size-[16.867px]" data-name="edit-03">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.8675" preserveAspectRatio="none" viewBox="0 0 16.8675 16.8675" width="16.8675">
        <g id="edit-03">
          <path d={svgPaths.p29f6ab00} id="Vector" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.pc8ca600} id="Vector_2" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] border border-[#e1dfe0] border-solid content-stretch flex items-center p-[11.566px] relative rounded-[31.084px] shrink-0" data-name="Button">
      <Edit />
    </div>
  );
}

function ButtonStack() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[25px] top-[33px] w-[352px]" data-name="Button stack">
      <Button />
      <Button1 />
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="calendar-04">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="calendar-04">
          <path d="M8 1V3M4 1V3" id="Vector" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          <path d={svgPaths.p15b97880} id="Vector_2" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          <path d="M1.5 5H10.5" id="Vector_3" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          <path d={svgPaths.p1bc14780} fill="#222222" id="Rectangle 57" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#eee] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <Calendar />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#222] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        7-13 July
      </p>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[352px]" data-name="header">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[24px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Lisbon
      </p>
      <Badge />
    </div>
  );
}

function Counter() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="counter">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[28px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 28 28" width="28">
          <circle cx="14" cy="14" fill="#222222" id="Ellipse 57" r="13.5" stroke="white" />
        </svg>
      </div>
      <p className="[word-break:break-word] col-1 font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] ml-[6px] mt-[5px] relative row-1 text-[#f2f2f2] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        +4
      </p>
    </div>
  );
}

function AvatarStack() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="avatar stack">
      <div className="mr-[-12px] pointer-events-none relative rounded-[45.029px] shrink-0 size-[28px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[45.029px]">
          <img alt="" className="absolute h-[338.92%] left-[-55.21%] max-w-none top-[-62.79%] w-[224.29%]" src={imgAvatar} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[45.029px]" />
      </div>
      <div className="mr-[-12px] pointer-events-none relative rounded-[50px] shrink-0 size-[28px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[50px]">
          <img alt="" className="absolute h-[394.29%] left-[-293.46%] max-w-none top-[-148.57%] w-[687.85%]" src={imgAvatar1} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[50px]" />
      </div>
      <div className="mr-[-12px] pointer-events-none relative rounded-[118.033px] shrink-0 size-[28px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[118.033px]">
          <img alt="" className="absolute h-[278.91%] left-[-62.81%] max-w-none top-[-69.96%] w-[209.18%]" src={imgAvatar2} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[118.033px]" />
      </div>
      <Counter />
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Description">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        7 Friends
      </p>
      <AvatarStack />
    </div>
  );
}

function AiCoEditing() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="ai-co-editing">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="ai-co-editing">
          <path d={svgPaths.p201ca070} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
          <path d={svgPaths.p11de3900} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
          <path d={svgPaths.p116c8600} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
          <path d={svgPaths.p93c3a20} id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
          <path d={svgPaths.p2bf91380} id="Vector_5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#222] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[22px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[22px]" />
      <AiCoEditing />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Invite
      </p>
    </div>
  );
}

function PartecipantsCard() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex items-center justify-between p-[16px] relative rounded-[24px] shrink-0 w-full" data-name="partecipants card">
      <Description />
      <Button2 />
    </div>
  );
}

function Header1() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="header">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#222] text-[16px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Total spending
      </p>
      <p className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['Nunito_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#333] text-[14px] text-center underline" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        See all
      </p>
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="add-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="add-01">
          <path d="M6.00049 2.5V9.50099" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          <path d="M9.50101 6.00098H2.5" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#222] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[22px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Add />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add expense
      </p>
    </div>
  );
}

function AmountRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="amount row">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €1723
      </p>
      <Button3 />
    </div>
  );
}

function TotalSpending() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Total spending">
      <Header1 />
      <AmountRow />
    </div>
  );
}

function Badge1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Badge">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <circle cx="10" cy="10" fill="#222222" id="Ellipse 57" r="10" />
        </svg>
      </div>
      <p className="[word-break:break-word] col-1 font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[12.287px] ml-[7px] mt-[4px] relative row-1 text-[#f2f2f2] text-[8.571px] w-[5px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        0
      </p>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Header">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Balances to settle
      </p>
      <Badge1 />
    </div>
  );
}

function BalancesToSettle() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Balances to settle">
      <Header2 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Calculated at the end to minimize transfers
      </p>
    </div>
  );
}

function ExpensesCard() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[24px] shrink-0 w-full" data-name="expenses card">
      <TotalSpending />
      <div className="h-0 relative shrink-0 w-full" data-name="divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 318 1" width="318">
            <path d="M0 0.5H318" id="divider" stroke="#E1DFE0" />
          </svg>
        </div>
      </div>
      <BalancesToSettle />
    </div>
  );
}

function Map() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="map">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="map">
          <path d={svgPaths.p32953400} fill="#333333" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#e4e4e4] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <Map />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        5 steps
      </p>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Itinerary
      </p>
      <Badge2 />
    </div>
  );
}

function Day() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center px-[12px] py-[6px] relative rounded-[16px] shrink-0 text-[#808080] w-[53px] whitespace-nowrap" data-name="Day">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[12px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Mon
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        8
      </p>
    </div>
  );
}

function Day1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center px-[12px] py-[6px] relative rounded-[16px] shrink-0 text-[#808080] w-[53px] whitespace-nowrap" data-name="Day">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[12px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Tue
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        9
      </p>
    </div>
  );
}

function Day2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center px-[12px] py-[6px] relative rounded-[16px] shrink-0 text-[#808080] w-[53px] whitespace-nowrap" data-name="Day">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[12px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Wed
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        10
      </p>
    </div>
  );
}

function Day3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center px-[12px] py-[6px] relative rounded-[16px] shrink-0 text-[#808080] w-[53px] whitespace-nowrap" data-name="Day">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[12px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Thu
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        11
      </p>
    </div>
  );
}

function Day4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center px-[12px] py-[6px] relative rounded-[16px] shrink-0 text-[#808080] w-[53px] whitespace-nowrap" data-name="Day">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[12px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Fri
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        12
      </p>
    </div>
  );
}

function Day5() {
  return (
    <div className="border border-[#222] border-solid content-stretch flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold gap-[6px] items-center px-[12px] py-[6px] relative rounded-[16px] shrink-0 w-[53px]" data-name="Day">
      <p className="relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Sat
      </p>
      <p className="min-w-full relative shrink-0 text-[#222] text-[14px] text-center w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        13
      </p>
    </div>
  );
}

function DaySelector() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center leading-[normal] relative shrink-0 w-full" data-name="day selector">
      <Day />
      <Day1 />
      <Day2 />
      <Day3 />
      <Day4 />
      <Day5 />
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="check">
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
        <img alt="" className="absolute max-w-none object-bottom rounded-[12px] size-full" src={imgImage} />
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 rounded-[12px]" />
      </div>
      <Check />
    </div>
  );
}

function TextRow() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[14px] w-full" data-name="Text row">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#222] w-[165px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Castelo de São Jorge
      </p>
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#808080] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        9:00
      </p>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#f0f2ff] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#4670a5] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Experience
      </p>
    </div>
  );
}

function CheckmarkCircle4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="checkmark-circle-02">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="checkmark-circle-02">
          <path d={svgPaths.p254b9910} fill="#006F00" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[#eaf9f1] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <CheckmarkCircle4 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#006f00] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Booked
      </p>
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-[#fff6e9] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#8a6630] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €12 pp
      </p>
    </div>
  );
}

function BadgeStack() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="badge stack">
      <Badge3 />
      <Badge4 />
      <Badge5 />
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

function StepCard() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex gap-[14px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[18px] shrink-0 w-full" data-name="Step card">
      <Image />
      <Info />
    </div>
  );
}

function ConnectorLineFilled() {
  return (
    <div className="content-stretch flex items-center pl-[38px] relative shrink-0 w-full" data-name="connector line - filled">
      <div className="h-[16.066px] relative shrink-0 w-0" data-name="line">
        <div className="absolute inset-[0_-1.5px]">
          <svg className="block size-full" fill="none" height="16.0661" preserveAspectRatio="none" viewBox="0 0 3 16.0661" width="3">
            <path d="M1.5 0V16.0661" id="line" stroke="#222222" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StepElement() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="step element">
      <StepCard />
      <ConnectorLineFilled />
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="check">
          <path d={svgPaths.p35f66700} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Image1() {
  return (
    <div className="content-stretch flex items-center p-[20px] relative rounded-[12px] shrink-0" data-name="image">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img alt="" className="absolute h-[139.17%] left-[-3.1%] max-w-none top-[-15.37%] w-[106.04%]" src={imgImage1} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 rounded-[12px]" />
      </div>
      <Check1 />
    </div>
  );
}

function TextRow1() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[14px] w-full" data-name="Text row">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#222] w-[165px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Belém walking tour
      </p>
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#808080] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        10:00
      </p>
    </div>
  );
}

function Badge6() {
  return (
    <div className="bg-[#f0f2ff] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#4670a5] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Experience
      </p>
    </div>
  );
}

function CheckmarkCircle() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="checkmark-circle-02">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="checkmark-circle-02">
          <path d={svgPaths.p254b9910} fill="#006F00" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Badge7() {
  return (
    <div className="bg-[#eaf9f1] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <CheckmarkCircle />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#006f00] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Booked
      </p>
    </div>
  );
}

function Badge8() {
  return (
    <div className="bg-[#fff6e9] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#8a6630] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Free
      </p>
    </div>
  );
}

function BadgeStack1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="badge stack">
      <Badge6 />
      <Badge7 />
      <Badge8 />
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[213px]" data-name="info">
      <TextRow1 />
      <BadgeStack1 />
    </div>
  );
}

function StepCard1() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex gap-[14px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[18px] shrink-0 w-full" data-name="Step card">
      <Image1 />
      <Info1 />
    </div>
  );
}

function ConnectorLineDashed() {
  return (
    <div className="content-stretch flex items-center pl-[38px] relative shrink-0 w-full" data-name="connector line - dashed">
      <div className="h-[16.066px] relative shrink-0 w-0" data-name="line">
        <div className="absolute inset-[0_-1.5px]">
          <svg className="block size-full" fill="none" height="16.0661" preserveAspectRatio="none" viewBox="0 0 3 16.0661" width="3">
            <path d="M1.5 0V16.0661" id="line" stroke="#222222" strokeDasharray="5 5" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StepElement1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="step element">
      <StepCard1 />
      <ConnectorLineDashed />
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="clock-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="clock-01">
          <path d={svgPaths.p7313400} fill="#222222" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Badge9() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <Clock />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#222] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Incoming
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[14px] w-full whitespace-nowrap">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#222]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Lunch Taberna Lorina
      </p>
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#808080]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        12:00
      </p>
    </div>
  );
}

function Location1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="location-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="location-01">
          <path d={svgPaths.p30e14b00} fill="#FF4735" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Location() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Location">
      <Location1 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Doca de Santo Amaro, 20
      </p>
    </div>
  );
}

function CheckmarkCircle1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="checkmark-circle-02">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="checkmark-circle-02">
          <path d={svgPaths.p254b9910} fill="#006F00" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Badge10() {
  return (
    <div className="bg-[#eaf9f1] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <CheckmarkCircle1 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#006f00] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Booked
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <Location />
      <Badge10 />
    </div>
  );
}

function TextualInfo() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[2px] items-start p-[8px] relative rounded-[6px] shrink-0 w-full" data-name="Textual info">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Image2() {
  return (
    <div className="content-stretch flex flex-col h-[158px] items-start justify-between p-[6px] relative rounded-[12px] shrink-0 w-full" data-name="image">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-white inset-0 rounded-[12px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img alt="" className="absolute h-[266.65%] left-[-0.1%] max-w-none top-[-76.97%] w-[103.64%]" src={imgImage2} />
        </div>
      </div>
      <Badge9 />
      <TextualInfo />
    </div>
  );
}

function StepCard2() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex flex-col items-start p-[6px] relative rounded-[18px] shrink-0 w-full" data-name="step card">
      <Image2 />
    </div>
  );
}

function ConnectorLineUnfilled() {
  return (
    <div className="content-stretch flex items-center pl-[38px] relative shrink-0 w-full" data-name="connector line - unfilled">
      <div className="h-[16.066px] relative shrink-0 w-0" data-name="line">
        <div className="absolute inset-[0_-1.5px]">
          <svg className="block size-full" fill="none" height="16.0661" preserveAspectRatio="none" viewBox="0 0 3 16.0661" width="3">
            <path d="M1.5 0V16.0661" id="line" stroke="#E1DFE0" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StepElement2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="step element">
      <StepCard2 />
      <ConnectorLineUnfilled />
    </div>
  );
}

function Check2() {
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

function Image3() {
  return (
    <div className="content-stretch flex items-center p-[20px] relative rounded-[12px] shrink-0" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none rounded-[12px] size-full" src={imgImage3} />
      <Check2 />
    </div>
  );
}

function TextRow2() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[14px] w-full" data-name="Text row">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#222] w-[165px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Gulbenkian Museum
      </p>
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#808080] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        14:00
      </p>
    </div>
  );
}

function Badge11() {
  return (
    <div className="bg-[#f0f2ff] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#4670a5] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Experience
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

function Badge12() {
  return (
    <div className="bg-[#fff4f3] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <CancelCircle />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#d32d1d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Not Booked
      </p>
    </div>
  );
}

function BadgeStack2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="badge stack">
      <Badge11 />
      <Badge12 />
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[213px]" data-name="info">
      <TextRow2 />
      <BadgeStack2 />
    </div>
  );
}

function StepCard3() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex gap-[14px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[18px] shrink-0 w-full" data-name="Step card">
      <Image3 />
      <Info2 />
    </div>
  );
}

function ConnectorLineUnfilled1() {
  return (
    <div className="content-stretch flex items-center pl-[38px] relative shrink-0 w-full" data-name="connector line - unfilled">
      <div className="h-[16.066px] relative shrink-0 w-0" data-name="line">
        <div className="absolute inset-[0_-1.5px]">
          <svg className="block size-full" fill="none" height="16.0661" preserveAspectRatio="none" viewBox="0 0 3 16.0661" width="3">
            <path d="M1.5 0V16.0661" id="line" stroke="#E1DFE0" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StepElement3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="step element">
      <StepCard3 />
      <ConnectorLineUnfilled1 />
    </div>
  );
}

function Check3() {
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

function Image4() {
  return (
    <div className="content-stretch flex items-center p-[20px] relative rounded-[12px] shrink-0" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none rounded-[12px] size-full" src={imgImage4} />
      <Check3 />
    </div>
  );
}

function TextRow3() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[14px] w-full" data-name="Text row">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#222] w-[165px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Rooftop drinks
      </p>
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#808080] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        18:00
      </p>
    </div>
  );
}

function Badge13() {
  return (
    <div className="bg-[#f0f2ff] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#4670a5] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Food
      </p>
    </div>
  );
}

function CheckmarkCircle2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="checkmark-circle-02">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="checkmark-circle-02">
          <path d={svgPaths.p254b9910} fill="#006F00" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Badge14() {
  return (
    <div className="bg-[#eaf9f1] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <CheckmarkCircle2 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#006f00] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Booked
      </p>
    </div>
  );
}

function Badge15() {
  return (
    <div className="bg-[#fff6e9] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#8a6630] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €€
      </p>
    </div>
  );
}

function BadgeStack3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="badge stack">
      <Badge13 />
      <Badge14 />
      <Badge15 />
    </div>
  );
}

function Info3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[213px]" data-name="info">
      <TextRow3 />
      <BadgeStack3 />
    </div>
  );
}

function StepCard4() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex gap-[14px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[18px] shrink-0 w-full" data-name="Step card">
      <Image4 />
      <Info3 />
    </div>
  );
}

function ConnectorLineUnfilled2() {
  return (
    <div className="content-stretch flex items-center pl-[38px] relative shrink-0 w-full" data-name="connector line - unfilled">
      <div className="h-[16.066px] relative shrink-0 w-0" data-name="line">
        <div className="absolute inset-[0_-1.5px]">
          <svg className="block size-full" fill="none" height="16.0661" preserveAspectRatio="none" viewBox="0 0 3 16.0661" width="3">
            <path d="M1.5 0V16.0661" id="line" stroke="#E1DFE0" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StepElement4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="step element">
      <StepCard4 />
      <ConnectorLineUnfilled2 />
    </div>
  );
}

function Check4() {
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

function Image5() {
  return (
    <div className="content-stretch flex items-center p-[20px] relative rounded-[12px] shrink-0" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none rounded-[12px] size-full" src={imgImage5} />
      <Check4 />
    </div>
  );
}

function TextRow4() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[14px] w-full" data-name="Text row">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#222] w-[165px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Club Rosa
      </p>
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#808080] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        23:00
      </p>
    </div>
  );
}

function Badge16() {
  return (
    <div className="bg-[#f0f2ff] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#4670a5] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Experience
      </p>
    </div>
  );
}

function CheckmarkCircle3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="checkmark-circle-02">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="checkmark-circle-02">
          <path d={svgPaths.p254b9910} fill="#006F00" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Badge17() {
  return (
    <div className="bg-[#eaf9f1] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <CheckmarkCircle3 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#006f00] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Booked
      </p>
    </div>
  );
}

function Badge18() {
  return (
    <div className="bg-[#fff6e9] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#8a6630] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €20pp
      </p>
    </div>
  );
}

function BadgeStack4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="badge stack">
      <Badge16 />
      <Badge17 />
      <Badge18 />
    </div>
  );
}

function Info4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[213px]" data-name="info">
      <TextRow4 />
      <BadgeStack4 />
    </div>
  );
}

function StepElement5() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex gap-[14px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[18px] shrink-0 w-full" data-name="step element">
      <Image5 />
      <Info4 />
    </div>
  );
}

function TimeLine() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Time line">
      <StepElement />
      <StepElement1 />
      <StepElement2 />
      <StepElement3 />
      <StepElement4 />
      <StepElement5 />
    </div>
  );
}

function ItineraryCard() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex flex-col gap-[20px] items-end p-[16px] relative rounded-[24px] shrink-0" data-name="itinerary card">
      <DaySelector />
      <TimeLine />
    </div>
  );
}

function ItinerarySection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="itinerary section">
      <Header3 />
      <ItineraryCard />
    </div>
  );
}

function ContentSheet() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col gap-[16px] h-[1196px] items-start p-[25px] relative rounded-tl-[48px] rounded-tr-[48px] shrink-0 w-full" data-name="content sheet">
      <PartecipantsCard />
      <ExpensesCard />
      <div className="h-0 relative shrink-0 w-[352px]" data-name="divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 352 1" width="352">
            <path d="M0 0.5H352" id="divider" stroke="#E1DFE0" />
          </svg>
        </div>
      </div>
      <ItinerarySection />
    </div>
  );
}

function TripDetail() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[1287px] items-center left-0 top-[303px] w-[402px]" data-name="Trip detail">
      <Header />
      <ContentSheet />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#222] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[16033390px] shrink-0 w-full" data-name="Button">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[15.291px] relative shrink-0 text-[16px] text-center text-white tracking-[-0.0956px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add activity
      </p>
    </div>
  );
}

function BottomBar() {
  return (
    <div className="absolute bg-white border-[#e1dfe0] border-solid border-t content-stretch flex flex-col items-start left-0 pb-[16px] pt-[12px] px-[25px] top-[1513px] w-[402px]" data-name="Bottom bar">
      <Button4 />
    </div>
  );
}

export default function TripPage() {
  return (
    <div className="bg-white relative size-full" data-name="TRIP PAGE">
      <div className="absolute h-[408px] left-[-18px] top-[-2px] w-[438px]" data-name="city image">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[154.51%] left-[-0.07%] max-w-none top-[-48.29%] w-[115.2%]" src={imgCityImage} />
          </div>
          <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] inset-0 to-[91.155%] to-[rgba(0,0,0,0.2)] via-[65.638%] via-[rgba(0,0,0,0.11)]" />
        </div>
      </div>
      <ButtonStack />
      <TripDetail />
      <BottomBar />
    </div>
  );
}
import svgPaths from "./svg-kwtdg1774v";
import imgCard from "./931ad399ac44da9f77318ee639c2bb0098c8a7dd.png";
import imgAvatar from "./df860df108048873fe4cf693f309e7fca34654e8.png";
import imgAvatar1 from "./a05a4007e69193d513315408b0c75a2654464b84.png";
import imgAvatar2 from "./d5882efb94700267aa2e7709e822558cae4296e7.png";
import imgCard1 from "./60bbfea34cd34d47cc54d53eebd2617dc4c09c87.png";
import imgAvatar3 from "./4df2391a52084f34091d2bd873ee9e00f23e4403.png";
import imgAvatar4 from "./0bc33b996aff842436388818b088550fb34b3bf2.png";
import imgAvatar5 from "./b9269cc62bfa5dbce0ce9521c0f6b616003f4197.png";
import imgCard2 from "./8fd5b5d9d0f1cfedc26fbec3c23500cdcfc20675.png";
import imgCard3 from "./373e38f50063b4d514d241f367b92aab7280a7e8.png";

function Calendar3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="calendar-04">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="calendar-04">
          <path d="M8 1V3M4 1V3" id="Vector" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          <path d={svgPaths.p15b97880} id="Vector_2" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          <path d="M1.5 5H10.5" id="Vector_3" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          <path d={svgPaths.p13d13770} fill="#222222" id="Vector 18" stroke="#222222" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[12px] pl-[4px] pr-[8px] py-[2px] rounded-[37px] top-[12px]" data-name="badge">
      <Calendar3 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#222] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        -30 days
      </p>
    </div>
  );
}

function Location7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="location-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="location-01">
          <path d={svgPaths.p1792e700} fill="#333333" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Location() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="location">
      <Location7 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Finland
      </p>
    </div>
  );
}

function TextSection1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[63px]" data-name="Text section">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#222] text-[0px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        <span className="leading-[16px] text-[14px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
          Helsinki
        </span>
        <span className="leading-[normal] text-[14px]">{` `}</span>
      </p>
      <Location />
    </div>
  );
}

function Counter() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="counter">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <circle cx="10" cy="10" fill="#222222" id="Ellipse 57" r="9.64286" stroke="white" strokeWidth="0.714286" />
        </svg>
      </div>
      <p className="[word-break:break-word] col-1 font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[12.287px] ml-[4.29px] mt-[3.57px] relative row-1 text-[#f2f2f2] text-[8.571px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        +6
      </p>
    </div>
  );
}

function AvatarStack() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-[54.286px]" data-name="avatar stack">
      <div className="mr-[-8.571px] pointer-events-none relative rounded-[40.833px] shrink-0 size-[20px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[40.833px]">
          <img alt="" className="absolute h-[338.27%] left-[-59.18%] max-w-none top-[-138.76%] w-[222.45%]" src={imgAvatar} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[40.833px]" />
      </div>
      <div className="mr-[-8.571px] pointer-events-none relative rounded-[28.75px] shrink-0 size-[20px]" data-name="avatar">
        <div aria-hidden className="absolute inset-0 rounded-[28.75px]">
          <div className="absolute bg-[#5583be] inset-0 rounded-[28.75px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[28.75px]">
            <img alt="" className="absolute left-[-17.39%] max-w-none size-[252.17%] top-[-17.39%]" src={imgAvatar1} />
          </div>
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[28.75px]" />
      </div>
      <div className="mr-[-8.571px] pointer-events-none relative rounded-[24.281px] shrink-0 size-[20px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[24.281px]">
          <img alt="" className="absolute h-[371.43%] left-[-454.05%] max-w-none top-[-135.47%] w-[663.06%]" src={imgAvatar2} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[24.281px]" />
      </div>
      <Counter />
    </div>
  );
}

function TextSection() {
  return (
    <div className="bg-white content-stretch flex items-start justify-between pl-[12px] pr-[8px] py-[8px] relative rounded-[16px] shrink-0 w-full" data-name="Text section">
      <TextSection1 />
      <AvatarStack />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[169px] items-start justify-end p-[10px] relative rounded-[24px] shrink-0 w-[230px]" data-name="card">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
        <img alt="" className="absolute h-[219.54%] left-[-0.29%] max-w-none top-[-49.72%] w-[101.43%]" src={imgCard} />
      </div>
      <Badge />
      <TextSection />
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
          <path d={svgPaths.p13d13770} fill="#222222" id="Vector 18" stroke="#222222" />
        </g>
      </svg>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[12px] pl-[4px] pr-[8px] py-[2px] rounded-[37px] top-[12px]" data-name="badge">
      <Calendar />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#222] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        -2 months
      </p>
    </div>
  );
}

function Location2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="location-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="location-01">
          <path d={svgPaths.p22a801d0} fill="#333333" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Location1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="location">
      <Location2 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Turkey
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>{`Cappadocia `}</p>
      <Location1 />
    </div>
  );
}

function Counter1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="counter">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <circle cx="10" cy="10" fill="#222222" id="Ellipse 57" r="9.64286" stroke="white" strokeWidth="0.714286" />
        </svg>
      </div>
      <p className="[word-break:break-word] col-1 font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[12.287px] ml-[4.29px] mt-[3.57px] relative row-1 text-[#f2f2f2] text-[8.571px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        +4
      </p>
    </div>
  );
}

function AvatarStack1() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-[54.286px]" data-name="avatar stack">
      <div className="h-full mr-[-8.571px] pointer-events-none relative rounded-[35.714px] shrink-0 w-[20px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[35.714px]">
          <img alt="" className="absolute h-[394.29%] left-[-293.46%] max-w-none top-[-148.57%] w-[687.85%]" src={imgAvatar3} />
        </div>
        <div aria-hidden className="absolute border-[0.714px] border-solid border-white inset-0 rounded-[35.714px]" />
      </div>
      <div className="mr-[-8.571px] pointer-events-none relative rounded-[21.25px] shrink-0 size-[20px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[21.25px]">
          <img alt="" className="absolute h-[648.04%] left-[-141.18%] max-w-none top-[-484.8%] w-[331.37%]" src={imgAvatar4} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[21.25px]" />
      </div>
      <div className="mr-[-8.571px] pointer-events-none relative rounded-[21.667px] shrink-0 size-[20px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[21.667px]">
          <img alt="" className="absolute h-[615.38%] left-[-34.62%] max-w-none top-[-223.08%] w-[307.69%]" src={imgAvatar5} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[21.667px]" />
      </div>
      <Counter1 />
    </div>
  );
}

function TextSection2() {
  return (
    <div className="bg-white content-stretch flex items-start justify-between pl-[12px] pr-[8px] py-[8px] relative rounded-[16px] shrink-0 w-full" data-name="Text section">
      <Frame />
      <AvatarStack1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[169px] items-start justify-end p-[10px] relative rounded-[24px] shrink-0 w-[230px]" data-name="card">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
        <img alt="" className="absolute h-[178.74%] left-[0.03%] max-w-none top-[-32.53%] w-[100.03%]" src={imgCard1} />
      </div>
      <Badge1 />
      <TextSection2 />
    </div>
  );
}

function Calendar1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="calendar-04">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="calendar-04">
          <path d="M8 1V3M4 1V3" id="Vector" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          <path d={svgPaths.p15b97880} id="Vector_2" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          <path d="M1.5 5H10.5" id="Vector_3" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          <path d={svgPaths.p13d13770} fill="#222222" id="Vector 18" stroke="#222222" />
        </g>
      </svg>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[12px] pl-[4px] pr-[8px] py-[2px] rounded-[37px] top-[12px]" data-name="badge">
      <Calendar1 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#222] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        -3 months
      </p>
    </div>
  );
}

function Location4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="location-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="location-01">
          <path d={svgPaths.p3ecab200} fill="#333333" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Location3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="location">
      <Location4 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Norway
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>{`Lofoten Islands `}</p>
      <Location3 />
    </div>
  );
}

function Counter2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="counter">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <circle cx="10" cy="10" fill="#222222" id="Ellipse 57" r="9.64286" stroke="white" strokeWidth="0.714286" />
        </svg>
      </div>
      <p className="[word-break:break-word] col-1 font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[12.287px] ml-[4.29px] mt-[3.57px] relative row-1 text-[#f2f2f2] text-[8.571px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        +3
      </p>
    </div>
  );
}

function AvatarStack2() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-[54.286px]" data-name="avatar stack">
      <div className="mr-[-8.571px] pointer-events-none relative rounded-[21.25px] shrink-0 size-[20px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[21.25px]">
          <img alt="" className="absolute h-[648.04%] left-[-141.18%] max-w-none top-[-484.8%] w-[331.37%]" src={imgAvatar4} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[21.25px]" />
      </div>
      <div className="mr-[-8.571px] pointer-events-none relative rounded-[21.667px] shrink-0 size-[20px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[21.667px]">
          <img alt="" className="absolute h-[615.38%] left-[-34.62%] max-w-none top-[-223.08%] w-[307.69%]" src={imgAvatar5} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[21.667px]" />
      </div>
      <div className="h-full mr-[-8.571px] pointer-events-none relative rounded-[35.714px] shrink-0 w-[20px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[35.714px]">
          <img alt="" className="absolute h-[394.29%] left-[-293.46%] max-w-none top-[-148.57%] w-[687.85%]" src={imgAvatar3} />
        </div>
        <div aria-hidden className="absolute border-[0.714px] border-solid border-white inset-0 rounded-[35.714px]" />
      </div>
      <Counter2 />
    </div>
  );
}

function TextSection3() {
  return (
    <div className="bg-white content-stretch flex items-start justify-between pl-[12px] pr-[8px] py-[8px] relative rounded-[16px] shrink-0 w-full" data-name="Text section">
      <Frame1 />
      <AvatarStack2 />
    </div>
  );
}

function Card2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[169px] items-start justify-end p-[10px] relative rounded-[24px] shrink-0 w-[230px]" data-name="card">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute inset-0 overflow-hidden rounded-[24px]">
          <img alt="" className="absolute h-[178.74%] left-[0.03%] max-w-none top-[-32.53%] w-[100.03%]" src={imgCard1} />
        </div>
        <div className="absolute inset-0 overflow-hidden rounded-[24px]">
          <img alt="" className="absolute h-[243.71%] left-0 max-w-none top-[-69.27%] w-full" src={imgCard2} />
        </div>
      </div>
      <Badge2 />
      <TextSection3 />
    </div>
  );
}

function Calendar2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="calendar-04">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="calendar-04">
          <path d="M8 1V3M4 1V3" id="Vector" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          <path d={svgPaths.p15b97880} id="Vector_2" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          <path d="M1.5 5H10.5" id="Vector_3" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          <path d={svgPaths.p13d13770} fill="#222222" id="Vector 18" stroke="#222222" />
        </g>
      </svg>
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[12px] pl-[4px] pr-[8px] py-[2px] rounded-[37px] top-[12px]" data-name="badge">
      <Calendar2 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#222] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        -6 months
      </p>
    </div>
  );
}

function Location6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="location-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="location-01">
          <path d={svgPaths.p30e14b00} fill="#333333" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Location5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="location">
      <Location6 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Mexico
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>{`Tulum `}</p>
      <Location5 />
    </div>
  );
}

function Counter3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="counter">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <circle cx="10" cy="10" fill="#222222" id="Ellipse 57" r="9.64286" stroke="white" strokeWidth="0.714286" />
        </svg>
      </div>
      <p className="[word-break:break-word] col-1 font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[12.287px] ml-[4.29px] mt-[3.57px] relative row-1 text-[#f2f2f2] text-[8.571px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        +5
      </p>
    </div>
  );
}

function AvatarStack3() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-[54.286px]" data-name="avatar stack">
      <div className="mr-[-8.571px] pointer-events-none relative rounded-[21.667px] shrink-0 size-[20px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[21.667px]">
          <img alt="" className="absolute h-[615.38%] left-[-34.62%] max-w-none top-[-223.08%] w-[307.69%]" src={imgAvatar5} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[21.667px]" />
      </div>
      <div className="h-full mr-[-8.571px] pointer-events-none relative rounded-[35.714px] shrink-0 w-[20px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[35.714px]">
          <img alt="" className="absolute h-[394.29%] left-[-293.46%] max-w-none top-[-148.57%] w-[687.85%]" src={imgAvatar3} />
        </div>
        <div aria-hidden className="absolute border-[0.714px] border-solid border-white inset-0 rounded-[35.714px]" />
      </div>
      <div className="mr-[-8.571px] pointer-events-none relative rounded-[21.25px] shrink-0 size-[20px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[21.25px]">
          <img alt="" className="absolute h-[648.04%] left-[-141.18%] max-w-none top-[-484.8%] w-[331.37%]" src={imgAvatar4} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[21.25px]" />
      </div>
      <Counter3 />
    </div>
  );
}

function TextSection4() {
  return (
    <div className="bg-white content-stretch flex items-start justify-between pl-[12px] pr-[8px] py-[8px] relative rounded-[16px] shrink-0 w-full" data-name="Text section">
      <Frame2 />
      <AvatarStack3 />
    </div>
  );
}

function Card3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[169px] items-start justify-end p-[10px] relative rounded-[24px] shrink-0 w-[230px]" data-name="card">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute inset-0 overflow-hidden rounded-[24px]">
          <img alt="" className="absolute h-[243.71%] left-0 max-w-none top-[-69.27%] w-full" src={imgCard2} />
        </div>
        <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgCard3} />
      </div>
      <Badge3 />
      <TextSection4 />
    </div>
  );
}

export default function CardStack() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative size-full" data-name="card stack">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}
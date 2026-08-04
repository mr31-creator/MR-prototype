import svgPaths from "./svg-jcsj3dmtzb";
import imgIcon from "./8247cdb87f9a2401b81703ea6ff81cef4e22b9d9.png";
import imgCard from "./35da5bab35340137f0fb609e0257711c4247bfa5.png";
import imgAvatar from "./4df2391a52084f34091d2bd873ee9e00f23e4403.png";
import imgAvatar1 from "./4d9cb718b54351e9495877aaff97c6dd9bd51c1b.png";
import imgAvatar2 from "./d5882efb94700267aa2e7709e822558cae4296e7.png";
import imgCard1 from "./931ad399ac44da9f77318ee639c2bb0098c8a7dd.png";
import imgAvatar3 from "./df860df108048873fe4cf693f309e7fca34654e8.png";
import imgAvatar4 from "./a05a4007e69193d513315408b0c75a2654464b84.png";
import imgCard2 from "./60bbfea34cd34d47cc54d53eebd2617dc4c09c87.png";
import imgAvatar5 from "./0bc33b996aff842436388818b088550fb34b3bf2.png";
import imgAvatar6 from "./b9269cc62bfa5dbce0ce9521c0f6b616003f4197.png";
import imgImage from "./7100e755c7f5d83cea2a2df41ec66a6d13ff84e0.png";
import imgImage1 from "./513b7d69c56fd2f9680b8c0e029df110bf39c4c7.png";

function FloatingTabBar() {
  return (
    <div className="-translate-x-1/2 absolute h-[52px] left-[calc(50%-0.5px)] top-[802px] w-[209px]" data-name="Floating tab bar">
      <div className="absolute inset-[-1.92%_-0.48%]">
        <svg className="block size-full" fill="none" height="54" preserveAspectRatio="none" viewBox="0 0 211 54" width="211">
          <g id="Floating tab bar">
            <rect fill="#FFFDFF" height="53" rx="26.5" width="210" x="0.5" y="0.5" />
            <rect height="53" rx="26.5" stroke="#E9E8EB" width="210" x="0.5" y="0.5" />
            <g id="home-01">
              <path d={svgPaths.p3fef7e80} fill="#0F0F11" id="Vector" stroke="#0F0F11" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
            <g id="search-01">
              <path d="M88 32L92 36" id="Vector_2" stroke="#9B989C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p2ca10100} id="Vector_3" stroke="#9B989C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
            <g id="ticket-01">
              <path d={svgPaths.p2b99a080} id="Vector_4" stroke="#9B989C" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M128 18.5V35.5" id="Vector_5" stroke="#9B989C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
            <g filter="url(#filter0_n_0_30)" id="avatar">
              <circle cx="177.5" cy="27" fill="url(#paint0_linear_0_30)" r="10.5" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="21" id="filter0_n_0_30" width="21" x="167" y="16.5">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feTurbulence baseFrequency="10 10" numOctaves="3" result="noise" seed="2856" stitchTiles="stitch" type="fractalNoise" />
              <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
              <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                <feFuncA tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " type="discrete" />
              </feComponentTransfer>
              <feComposite in="coloredNoise1" in2="shape" operator="in" result="noise1Clipped" />
              <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
              <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
              <feMerge result="effect1_noise_0_30">
                <feMergeNode in="shape" />
                <feMergeNode in="color1" />
              </feMerge>
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_30" x1="173.5" x2="182.5" y1="16.5" y2="37.5">
              <stop stopColor="#F3D3F2" />
              <stop offset="1" stopColor="#D992C2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Title">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#333] text-[24px] w-[101px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Hello Ari
      </p>
      <div className="relative shrink-0 size-[28px]" data-name="icon">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-12%] max-w-none size-[128%] top-[-12%]" src={imgIcon} />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Keep Exploring!
      </p>
    </div>
  );
}

function Subtitle() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Subtitle">
      <Frame />
    </div>
  );
}

function GreetingStack() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[135px]" data-name="Greeting stack">
      <Title />
      <Subtitle />
    </div>
  );
}

function Notification() {
  return (
    <div className="relative shrink-0 size-[16.867px]" data-name="notification-02">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.8675" preserveAspectRatio="none" viewBox="0 0 16.8675 16.8675" width="16.8675">
        <g id="notification-02">
          <path d={svgPaths.p181add40} id="Vector" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.05422" />
          <path d="M14.4076 12.6506H2.45984" id="Vector_2" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.05422" />
          <path d={svgPaths.p340dec00} id="Vector_3" stroke="#222222" strokeLinejoin="round" strokeWidth="1.05422" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] border border-[#e1dfe0] border-solid content-stretch flex items-center p-[11.566px] relative rounded-[31.084px] shrink-0" data-name="button">
      <Notification />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[350px]" data-name="Header">
      <GreetingStack />
      <Button />
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

function Badge() {
  return (
    <div className="bg-[#f6f5f5] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <Clock />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#222] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        1 poll pending
      </p>
    </div>
  );
}

function Counter() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="counter">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
          <circle cx="12" cy="12" fill="#222222" id="Ellipse 57" r="11.5714" stroke="white" strokeWidth="0.857143" />
        </svg>
      </div>
      <p className="[word-break:break-word] col-1 font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[14.745px] ml-[5.14px] mt-[4.29px] relative row-1 text-[#f2f2f2] text-[10.286px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        +6
      </p>
    </div>
  );
}

function AvatarStack() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-[65.143px]" data-name="avatar stack">
      <div className="h-full mr-[-10.286px] pointer-events-none relative rounded-[42.857px] shrink-0 w-[24px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[42.857px]">
          <img alt="" className="absolute h-[394.29%] left-[-293.46%] max-w-none top-[-148.57%] w-[687.85%]" src={imgAvatar} />
        </div>
        <div aria-hidden className="absolute border-[0.857px] border-solid border-white inset-0 rounded-[42.857px]" />
      </div>
      <div className="aspect-[61/61] h-full mr-[-10.286px] pointer-events-none relative rounded-[101.171px] shrink-0" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[101.171px]">
          <img alt="" className="absolute h-[278.91%] left-[-62.81%] max-w-none top-[-69.96%] w-[209.18%]" src={imgAvatar1} />
        </div>
        <div aria-hidden className="absolute border-[0.857px] border-solid border-white inset-0 rounded-[101.171px]" />
      </div>
      <div className="mr-[-10.286px] pointer-events-none relative rounded-[29.138px] shrink-0 size-[24px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[29.138px]">
          <img alt="" className="absolute h-[371.43%] left-[-454.05%] max-w-none top-[-135.47%] w-[663.06%]" src={imgAvatar2} />
        </div>
        <div aria-hidden className="absolute border-[1.2px] border-solid border-white inset-0 rounded-[29.138px]" />
      </div>
      <Counter />
    </div>
  );
}

function TopRow() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="top row">
      <Badge />
      <AvatarStack />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col gap-[179px] items-start p-[16px] relative rounded-[24px] shrink-0 w-full" data-name="card">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[24px]">
        <img alt="" className="absolute max-w-none object-bottom rounded-[24px] size-full" src={imgCard} />
        <div className="absolute bg-gradient-to-b from-[rgba(102,102,102,0.04)] inset-0 rounded-[24px] to-[79.252%] to-[rgba(0,0,0,0.2)]" />
      </div>
      <TopRow />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[24px] text-white w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Lisbon
      </p>
    </div>
  );
}

function CurrrentAdventureSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[296px] items-start relative shrink-0 w-[352px]" data-name="Currrent adventure section">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[16px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Current adventure
      </p>
      <Card />
    </div>
  );
}

function Badge1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="badge">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <circle cx="10" cy="10" fill="#222222" id="Ellipse 57" r="10" />
        </svg>
      </div>
      <p className="[word-break:break-word] col-1 font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[12.287px] ml-[7px] mt-[4px] relative row-1 text-[#f2f2f2] text-[8.571px] w-[5px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        4
      </p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Title">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Upcoming trips
      </p>
      <Badge1 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[352px]" data-name="Header">
      <Title1 />
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#333] text-[14px] text-center underline whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        See all
      </p>
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
    <div className="absolute bg-[#f6f5f5] content-stretch flex gap-[4px] items-center left-[12px] pl-[4px] pr-[8px] py-[2px] rounded-[37px] top-[12px]" data-name="badge">
      <Calendar1 />
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
          <path d={svgPaths.p6844780} fill="#333333" id="Subtract" />
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

function Counter1() {
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

function AvatarStack1() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-[54.286px]" data-name="avatar stack">
      <div className="mr-[-8.571px] pointer-events-none relative rounded-[40.833px] shrink-0 size-[20px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[40.833px]">
          <img alt="" className="absolute h-[338.27%] left-[-59.18%] max-w-none top-[-138.76%] w-[222.45%]" src={imgAvatar3} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[40.833px]" />
      </div>
      <div className="mr-[-8.571px] pointer-events-none relative rounded-[28.75px] shrink-0 size-[20px]" data-name="avatar">
        <div aria-hidden className="absolute inset-0 rounded-[28.75px]">
          <div className="absolute bg-[#5583be] inset-0 rounded-[28.75px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[28.75px]">
            <img alt="" className="absolute left-[-17.39%] max-w-none size-[252.17%] top-[-17.39%]" src={imgAvatar4} />
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
      <Counter1 />
    </div>
  );
}

function TextSection() {
  return (
    <div className="bg-white content-stretch flex items-start justify-between pl-[12px] pr-[8px] py-[8px] relative rounded-[16px] shrink-0 w-full" data-name="Text section">
      <TextSection1 />
      <AvatarStack1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[169px] items-start justify-end p-[10px] relative rounded-[24px] shrink-0 w-[230px]" data-name="card">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
        <img alt="" className="absolute h-[219.54%] left-[-0.29%] max-w-none top-[-49.72%] w-[101.43%]" src={imgCard1} />
      </div>
      <Badge2 />
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

function Badge3() {
  return (
    <div className="absolute bg-[#f6f5f5] content-stretch flex gap-[4px] items-center left-[12px] pl-[4px] pr-[8px] py-[2px] rounded-[37px] top-[12px]" data-name="badge">
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
          <path d={svgPaths.p1792e700} fill="#333333" id="Subtract" />
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

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>{`Cappadocia `}</p>
      <Location1 />
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
        +4
      </p>
    </div>
  );
}

function AvatarStack2() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-[54.286px]" data-name="avatar stack">
      <div className="h-full mr-[-8.571px] pointer-events-none relative rounded-[35.714px] shrink-0 w-[20px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[35.714px]">
          <img alt="" className="absolute h-[394.29%] left-[-293.46%] max-w-none top-[-148.57%] w-[687.85%]" src={imgAvatar} />
        </div>
        <div aria-hidden className="absolute border-[0.714px] border-solid border-white inset-0 rounded-[35.714px]" />
      </div>
      <div className="mr-[-8.571px] pointer-events-none relative rounded-[21.25px] shrink-0 size-[20px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[21.25px]">
          <img alt="" className="absolute h-[648.04%] left-[-141.18%] max-w-none top-[-484.8%] w-[331.37%]" src={imgAvatar5} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[21.25px]" />
      </div>
      <div className="mr-[-8.571px] pointer-events-none relative rounded-[21.667px] shrink-0 size-[20px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[21.667px]">
          <img alt="" className="absolute h-[615.38%] left-[-34.62%] max-w-none top-[-223.08%] w-[307.69%]" src={imgAvatar6} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[21.667px]" />
      </div>
      <Counter2 />
    </div>
  );
}

function TextSection2() {
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
        <img alt="" className="absolute h-[178.74%] left-[0.03%] max-w-none top-[-32.53%] w-[100.03%]" src={imgCard2} />
      </div>
      <Badge3 />
      <TextSection2 />
    </div>
  );
}

function CardStack() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="card stack">
      <Card1 />
      <Card2 />
    </div>
  );
}

function UpcomingTripsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Upcoming trips section">
      <Header1 />
      <CardStack />
    </div>
  );
}

function Header2() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-end justify-between leading-[normal] relative shrink-0 text-[#333] w-[349px] whitespace-nowrap" data-name="header">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[16px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Past trips
      </p>
      <p className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['Nunito_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[14px] text-center underline" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        See all
      </p>
    </div>
  );
}

function Location4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="location-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="location-01">
          <path d={svgPaths.p963ab80} fill="#333333" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Location3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="location">
      <Location4 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Greece, Europe
      </p>
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[#f0f2ff] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="Badge">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#5583be] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        30 places visited
      </p>
    </div>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="text content">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] min-w-full relative shrink-0 text-[#222] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Corfu Island
      </p>
      <Location3 />
      <Badge4 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex gap-[16px] items-center pl-[12px] pr-[16px] py-[12px] relative rounded-[24px] shrink-0 w-[220px]" data-name="Card">
      <div className="relative rounded-[12px] shrink-0 size-[64px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none rounded-[12px] size-full" src={imgImage} />
      </div>
      <TextContent />
    </div>
  );
}

function Location6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="location-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="location-01">
          <path d={svgPaths.p6844780} fill="#333333" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Location5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="location">
      <Location6 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Egypt, Africa
      </p>
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-[#fff6e9] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="Badge">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#c4a06a] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        5 restaurant tried
      </p>
    </div>
  );
}

function TextContent1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="text content">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] min-w-full relative shrink-0 text-[#222] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Desert of Sinai
      </p>
      <Location5 />
      <Badge5 />
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex gap-[16px] items-center pl-[12px] pr-[16px] py-[12px] relative rounded-[24px] shrink-0 w-[220px]" data-name="Card">
      <div className="relative rounded-[12px] shrink-0 size-[64px]" data-name="Image">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
          <img alt="" className="absolute max-w-none object-bottom rounded-[12px] size-full" src={imgImage} />
          <div className="absolute inset-0 overflow-hidden rounded-[12px]">
            <img alt="" className="absolute h-[179.17%] left-0 max-w-none top-[-40.17%] w-full" src={imgImage1} />
          </div>
        </div>
      </div>
      <TextContent1 />
    </div>
  );
}

function CardStack1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="card stack">
      <Card3 />
      <Card4 />
    </div>
  );
}

function PastTripsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Past trips section">
      <Header2 />
      <CardStack1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[472px]" data-name="Content">
      <CurrrentAdventureSection />
      <UpcomingTripsSection />
      <PastTripsSection />
    </div>
  );
}

function Page() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[25px] top-[57px]" data-name="Page">
      <Header />
      <Content />
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex h-[22px] items-center justify-center pt-[2px] relative shrink-0 w-[84px]" data-name="Time">
      <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        17:41
      </p>
    </div>
  );
}

function Levels() {
  return (
    <div className="h-[22px] relative shrink-0 w-[120px]" data-name="Levels">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 120 22" width="120">
        <g id="Levels">
          <path clipRule="evenodd" d={svgPaths.p3ca05e00} fill="black" fillRule="evenodd" id="Cellular Connection" />
          <path clipRule="evenodd" d={svgPaths.p32156700} fill="black" fillRule="evenodd" id="Wifi" />
          <g id="Battery">
            <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="black" width="24" x="72.0068" y="5.5" />
            <path d={svgPaths.p1d8d8380} fill="black" id="Cap" opacity="0.4" />
            <rect fill="black" height="9" id="Capacity" rx="2.5" width="21" x="73.5068" y="7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StatusBarIPhone() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-between left-1/2 pb-[19px] pt-[16px] px-[16px] top-0 w-[402px]" data-name="Status bar - iPhone">
      <Time />
      <Levels />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#f2f2f2] relative size-full" data-name="HOME">
      <FloatingTabBar />
      <Page />
      <StatusBarIPhone />
    </div>
  );
}
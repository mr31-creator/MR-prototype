import svgPaths from "./svg-zhyziy9ech";
import imgImage from "./749863670c41f2a7f38aa36fecfa78fa25e721ac.png";
import imgAvatar from "./4e0a6889650015711af2e87503fb5e63994b55bd.png";
import imgAvatar1 from "./4d9cb718b54351e9495877aaff97c6dd9bd51c1b.png";
import imgAvatar2 from "./d5882efb94700267aa2e7709e822558cae4296e7.png";
import imgAvatar3 from "./0bc33b996aff842436388818b088550fb34b3bf2.png";
import imgAvatar4 from "./b471eb65a292de0de84ab580f855a08469131183.png";
import imgAvatar5 from "./3ce769e6c44ae270560c933341cd8ac5b307032e.png";
import imgAvatar6 from "./0fb80e016af1472955b29851eb091384d175a633.png";

function GrabberSection() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center left-0 px-[84px] py-[4px] top-0 w-[402px]" data-name="grabber section">
      <div className="bg-[#c4c4c4] h-[4px] relative rounded-[14px] shrink-0 w-[47.235px]" data-name="grabber" />
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow-down-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="arrow-down-01">
          <path d={svgPaths.p1bc80a90} id="Vector" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CurrencyChip() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[15px] py-[8px] relative rounded-[19px] shrink-0" data-name="currency chip">
      <div aria-hidden className="absolute border border-[#e1dfe0] border-solid inset-0 pointer-events-none rounded-[19px]" />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        eur
      </p>
      <ArrowDown />
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Amount">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#222] text-[36px] w-[60px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        <span className="leading-[normal]">€</span>
        <span className="font-['Nunito_Sans:Light',sans-serif] font-light leading-[normal]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
          |
        </span>
      </p>
      <CurrencyChip />
    </div>
  );
}

function AmountSection() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Amount section">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Amount
      </p>
      <Amount />
    </div>
  );
}

function TextualInfo() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-[14px]" data-name="textual info">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Dinner at Taberna do Cais
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#808080] w-full">
        <span className="leading-[normal]">{`28 July `}</span>
        <span className="leading-[normal]">·</span>
        <span className="leading-[normal]">{` 8:30 PM`}</span>
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="relative rounded-[4px] shrink-0 size-[40px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
          <img alt="" className="absolute h-[133.29%] left-[0.04%] max-w-none top-[-22.45%] w-full" src={imgImage} />
        </div>
      </div>
      <TextualInfo />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="chevron-down">
          <path d={svgPaths.p61cfe00} id="Vector" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ActivityCard() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between pl-[12px] pr-[20px] py-[12px] relative rounded-[16px] shrink-0 w-full" data-name="activity card">
      <div aria-hidden className="absolute border border-[#e1dfe0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame />
      <ChevronDown />
    </div>
  );
}

function ActivitySection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="activity section">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Select the activity
      </p>
      <ActivityCard />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[40px]" data-name="avatar">
        <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 40 40" width="40">
          <g filter="url(#filter0_n_0_11)" id="avatar">
            <circle cx="20" cy="20" fill="url(#paint0_linear_0_11)" r="20" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="40" id="filter0_n_0_11" width="40" x="0" y="0">
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
              <feMerge result="effect1_noise_0_11">
                <feMergeNode in="shape" />
                <feMergeNode in="color1" />
              </feMerge>
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_11" x1="12.381" x2="29.5238" y1="-5.12924e-07" y2="40">
              <stop stopColor="#F3D3F2" />
              <stop offset="1" stopColor="#D992C2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] w-[54px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Ari (me)
      </p>
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="chevron-down">
          <path d={svgPaths.p61cfe00} id="Vector" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between pl-[12px] pr-[20px] py-[12px] relative rounded-[16px] shrink-0 w-full" data-name="card">
      <div aria-hidden className="absolute border border-[#e1dfe0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame1 />
      <ChevronDown1 />
    </div>
  );
}

function PaidBySection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[171px]" data-name="Paid by section">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Paid by
      </p>
      <Card />
    </div>
  );
}

function ChevronDown2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="chevron-down">
          <path d={svgPaths.p61cfe00} id="Vector" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_26px] items-center justify-between min-h-px pl-[12px] pr-[20px] py-[12px] relative rounded-[16px] w-full" data-name="card">
      <div aria-hidden className="absolute border border-[#e1dfe0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] w-[99px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        13 July (Today)
      </p>
      <ChevronDown2 />
    </div>
  );
}

function WhenSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[98px] items-start relative shrink-0 w-[171px]" data-name="When section">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        When
      </p>
      <Card1 />
    </div>
  );
}

function PaymentDetailsSection() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Payment details section">
      <PaidBySection />
      <WhenSection />
    </div>
  );
}

function Equally() {
  return (
    <div className="bg-[#222] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[27px] shrink-0" data-name="equally">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#fffefd] text-[14px] whitespace-nowrap">Equally</p>
    </div>
  );
}

function ByItems() {
  return (
    <div className="bg-[#fffefd] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[30px] shrink-0" data-name="by items">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap">By Items</p>
    </div>
  );
}

function Segmented() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[33px] shrink-0" data-name="segmented">
      <Equally />
      <ByItems />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="header">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Split
      </p>
      <Segmented />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="icon">
          <rect fill="#222222" height="24" rx="12" width="24" />
          <path d={svgPaths.p384c7700} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Member() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="member">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32.375px]">
          <img alt="" className="absolute h-[338.92%] left-[-55.21%] max-w-none top-[-62.79%] w-[224.29%]" src={imgAvatar} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Julie
      </p>
    </div>
  );
}

function MemberInfo() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="member info">
      <Icon />
      <Member />
    </div>
  );
}

function MemberRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="member row">
      <MemberInfo />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €0
      </p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="icon">
          <rect fill="#222222" height="24" rx="12" width="24" />
          <path d={svgPaths.p384c7700} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Member1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="member">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32.375px]">
          <img alt="" className="absolute h-[278.91%] left-[-62.81%] max-w-none top-[-69.96%] w-[209.18%]" src={imgAvatar1} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Lola
      </p>
    </div>
  );
}

function MemberInfo1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="member info">
      <Icon1 />
      <Member1 />
    </div>
  );
}

function MemberRow1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="member row">
      <MemberInfo1 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €0
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="icon">
          <rect fill="#222222" height="24" rx="12" width="24" />
          <path d={svgPaths.p384c7700} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Member2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="member">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32.375px]">
          <img alt="" className="absolute h-[371.43%] left-[-454.05%] max-w-none top-[-135.47%] w-[663.06%]" src={imgAvatar2} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Ren
      </p>
    </div>
  );
}

function MemberInfo2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="member info">
      <Icon2 />
      <Member2 />
    </div>
  );
}

function MemberRow2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="member row">
      <MemberInfo2 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €0
      </p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="icon">
          <rect fill="#222222" height="24" rx="12" width="24" />
          <path d={svgPaths.p384c7700} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Member3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="member">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32.375px]">
          <img alt="" className="absolute h-[648.04%] left-[-141.18%] max-w-none top-[-484.8%] w-[331.37%]" src={imgAvatar3} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Nick
      </p>
    </div>
  );
}

function MemberInfo3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="member info">
      <Icon3 />
      <Member3 />
    </div>
  );
}

function MemberRow3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="member row">
      <MemberInfo3 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €0
      </p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="icon">
          <rect fill="#222222" height="24" rx="12" width="24" />
          <path d={svgPaths.p384c7700} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Member4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="member">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32.375px]">
          <img alt="" className="absolute h-[549.15%] left-[-22.03%] max-w-none top-[-218.64%] w-[274.58%]" src={imgAvatar4} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        James
      </p>
    </div>
  );
}

function MemberInfo4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="member info">
      <Icon4 />
      <Member4 />
    </div>
  );
}

function MemberRow4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="member row">
      <MemberInfo4 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €0
      </p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="icon">
          <rect fill="#222222" height="24" rx="12" width="24" />
          <path d={svgPaths.p384c7700} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Member5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="member">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32.375px]">
          <img alt="" className="absolute h-[345.58%] left-[-34.38%] max-w-none top-[-112.89%] w-[159.41%]" src={imgAvatar5} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Kerem
      </p>
    </div>
  );
}

function MemberInfo5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="member info">
      <Icon5 />
      <Member5 />
    </div>
  );
}

function MemberRow5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="member row">
      <MemberInfo5 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €0
      </p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="icon">
          <rect fill="#222222" height="24" rx="12" width="24" />
          <path d={svgPaths.p384c7700} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Member6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="member">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" data-name="avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32.375px] size-full" src={imgAvatar6} />
      </div>
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Anna
      </p>
    </div>
  );
}

function MemberInfo6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="member info">
      <Icon6 />
      <Member6 />
    </div>
  );
}

function MemberRow6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="member row">
      <MemberInfo6 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €0
      </p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="icon">
          <rect fill="#222222" height="24" rx="12" width="24" />
          <path d={svgPaths.p384c7700} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Member7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="member">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" style={{ backgroundImage: "linear-gradient(156.80141046209314deg, rgb(243, 211, 242) 9.2857%, rgb(217, 146, 194) 92.143%)" }} data-name="avatar" />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Ari
      </p>
    </div>
  );
}

function MemberInfo7() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="member info">
      <Icon7 />
      <Member7 />
    </div>
  );
}

function MemberRow7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="member row">
      <MemberInfo7 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €0
      </p>
    </div>
  );
}

function MembersStack() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-full" data-name="members stack">
      <MemberRow />
      <MemberRow1 />
      <MemberRow2 />
      <MemberRow3 />
      <MemberRow4 />
      <MemberRow5 />
      <MemberRow6 />
      <MemberRow7 />
    </div>
  );
}

function SplitSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="split section">
      <Header />
      <MembersStack />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[354px]" data-name="content">
      <AmountSection />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 354 1" width="354">
            <path d="M0 0.5H354" id="Divider" stroke="#E1DFE0" />
          </svg>
        </div>
      </div>
      <ActivitySection />
      <PaymentDetailsSection />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 354 1" width="354">
            <path d="M0 0.5H354" id="Divider" stroke="#E1DFE0" />
          </svg>
        </div>
      </div>
      <SplitSection />
    </div>
  );
}

export default function BottomSheet() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[28px] items-center overflow-clip pb-[24px] pt-[48px] px-[25px] relative rounded-tl-[24px] rounded-tr-[24px] size-full" data-name="Bottom sheet">
      <GrabberSection />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[15.291px] min-w-full relative shrink-0 text-[#222] text-[20px] text-center tracking-[-0.0956px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add an expense
      </p>
      <Content />
    </div>
  );
}
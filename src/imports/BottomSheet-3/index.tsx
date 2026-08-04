import svgPaths from "./svg-rzcdnhtwmm";
import imgImage from "./749863670c41f2a7f38aa36fecfa78fa25e721ac.png";

function GrabberSection() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center left-0 px-[84px] py-[4px] top-0 w-[402px]" data-name="grabber section">
      <div className="bg-[#c4c4c4] h-[4px] relative rounded-[14px] shrink-0 w-[47.235px]" data-name="grabber" />
    </div>
  );
}

function ArrowDown2() {
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
      <ArrowDown2 />
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
          <g filter="url(#filter0_n_0_14)" id="avatar">
            <circle cx="20" cy="20" fill="url(#paint0_linear_0_14)" r="20" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="40" id="filter0_n_0_14" width="40" x="0" y="0">
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
              <feMerge result="effect1_noise_0_14">
                <feMergeNode in="shape" />
                <feMergeNode in="color1" />
              </feMerge>
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_14" x1="12.381" x2="29.5238" y1="-5.12924e-07" y2="40">
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
    <div className="bg-white content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[27px] shrink-0" data-name="equally">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap">Equally</p>
    </div>
  );
}

function ByItems() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[30px] shrink-0" style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 0%, rgb(34, 34, 34) 100%), linear-gradient(90deg, rgb(255, 254, 253) 0%, rgb(255, 254, 253) 100%)" }} data-name="by items">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#fffefd] text-[14px] whitespace-nowrap">By Items</p>
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

function MinusSign() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="minus-sign">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="minus-sign">
          <path d="M10 6H2" id="Vector" stroke="#D9D9D9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#747474] border border-[#747474] border-solid content-stretch flex items-center p-[6px] relative rounded-[16px] shrink-0" data-name="button">
      <MinusSign />
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

function Button1() {
  return (
    <div className="bg-[#222] border border-[#222] border-solid content-stretch flex items-center p-[6px] relative rounded-[16px] shrink-0" data-name="button">
      <Add />
    </div>
  );
}

function Counter() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="counter">
      <Button />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        2 items
      </p>
      <Button1 />
    </div>
  );
}

function TextField() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center p-[16px] relative rounded-[32px] shrink-0 w-full" data-name="text field">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Item’s name
      </p>
    </div>
  );
}

function ItemNameField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[120px]" data-name="item name field">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#808080] text-[14px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Item 1
      </p>
      <TextField />
    </div>
  );
}

function TextField1() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center p-[16px] relative rounded-[32px] shrink-0 w-full" data-name="text field">
      <p className="[word-break:break-word] font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €0,00
      </p>
    </div>
  );
}

function AmountField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[76px]" data-name="amount field">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#808080] text-[14px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Amount
      </p>
      <TextField1 />
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow-down-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="arrow-down-01">
          <path d={svgPaths.p1bc80a90} id="Vector" stroke="#141B34" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[16px] py-[12px] relative rounded-[41px] shrink-0 w-full" data-name="dropdown">
      <div aria-hidden className="absolute border border-[#e1dfe0] border-solid inset-0 pointer-events-none rounded-[41px]" />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Everyone
      </p>
      <ArrowDown />
    </div>
  );
}

function SplitField() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[115px]" data-name="split field">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#808080] text-[14px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Split between
      </p>
      <Dropdown />
    </div>
  );
}

function ItemRow() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="item row">
      <ItemNameField />
      <AmountField />
      <SplitField />
    </div>
  );
}

function TextField2() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center p-[16px] relative rounded-[32px] shrink-0 w-full" data-name="text field">
      <p className="[word-break:break-word] font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Item’s name
      </p>
    </div>
  );
}

function ItemNameField1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[120px]" data-name="item name field">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#808080] text-[14px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Item 2
      </p>
      <TextField2 />
    </div>
  );
}

function TextField3() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center p-[16px] relative rounded-[32px] shrink-0 w-full" data-name="text field">
      <p className="[word-break:break-word] font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €0,00
      </p>
    </div>
  );
}

function AmountField1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[76px]" data-name="amount field">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#808080] text-[14px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Amount
      </p>
      <TextField3 />
    </div>
  );
}

function ArrowDown1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow-down-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="arrow-down-01">
          <path d={svgPaths.p1bc80a90} id="Vector" stroke="#141B34" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[16px] py-[12px] relative rounded-[41px] shrink-0 w-full" data-name="dropdown">
      <div aria-hidden className="absolute border border-[#e1dfe0] border-solid inset-0 pointer-events-none rounded-[41px]" />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Everyone
      </p>
      <ArrowDown1 />
    </div>
  );
}

function SplitField1() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[115px]" data-name="split field">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#808080] text-[14px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Split between
      </p>
      <Dropdown1 />
    </div>
  );
}

function ItemRow1() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="item row">
      <ItemNameField1 />
      <AmountField1 />
      <SplitField1 />
    </div>
  );
}

function Items() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="items">
      <ItemRow />
      <ItemRow1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="content">
      <Counter />
      <Items />
    </div>
  );
}

function SplitSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[354px]" data-name="split section">
      <Header />
      <Content1 />
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
import svgPaths from "@/imports/BottomSheet-2/svg-zhyziy9ech";
import imgImage from "@/imports/BottomSheet-2/749863670c41f2a7f38aa36fecfa78fa25e721ac.png";
import imgAvatar from "@/imports/BottomSheet-2/4e0a6889650015711af2e87503fb5e63994b55bd.png";
import imgAvatar1 from "@/imports/BottomSheet-2/4d9cb718b54351e9495877aaff97c6dd9bd51c1b.png";
import imgAvatar2 from "@/imports/BottomSheet-2/d5882efb94700267aa2e7709e822558cae4296e7.png";
import imgAvatar3 from "@/imports/BottomSheet-2/0bc33b996aff842436388818b088550fb34b3bf2.png";
import imgAvatar4 from "@/imports/BottomSheet-2/b471eb65a292de0de84ab580f855a08469131183.png";
import imgAvatar5 from "@/imports/BottomSheet-2/3ce769e6c44ae270560c933341cd8ac5b307032e.png";
import imgAvatar6 from "@/imports/BottomSheet-2/0fb80e016af1472955b29851eb091384d175a633.png";
import checkPaths from "@/imports/CheckboxEnabled/svg-00j8af9fkv";
import svgPaths3 from "@/imports/BottomSheet-3/svg-rzcdnhtwmm";
import { useEffect, useRef, useState } from "react";

function GrabberSection() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center px-[84px] py-[4px] relative shrink-0 w-full" data-name="grabber section">
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
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        eur
      </p>
      <ArrowDown />
    </div>
  );
}

function Amount({ amount, onAmountChange }: { amount: string; onAmountChange: (value: string) => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Amount">
      <div className="[word-break:break-word] flex flex-1 font-['Nunito_Sans',sans-serif] font-bold gap-[2px] items-center leading-[normal] min-w-0 relative text-[#222] text-[36px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        <span>€</span>
        <input
          className="bg-transparent caret-[#222] flex-1 min-w-0 outline-none"
          inputMode="decimal"
          onChange={(event) => onAmountChange(event.target.value.replace(/[^0-9.,]/g, ""))}
          value={amount}
        />
      </div>
      <CurrencyChip />
    </div>
  );
}

function AmountSection({ amount, onAmountChange }: { amount: string; onAmountChange: (value: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Amount section">
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Amount
      </p>
      <Amount amount={amount} onAmountChange={onAmountChange} />
    </div>
  );
}

function TextualInfo() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-[14px]" data-name="textual info">
      <p className="font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Dinner at Taberna do Cais
      </p>
      <p className="font-['Inter',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#808080] w-full">
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
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
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
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] w-[54px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
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
    <div className="content-stretch flex flex-col gap-[12px] items-start relative flex-1 min-w-0" data-name="Paid by section">
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
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
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] w-[99px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        13 July (Today)
      </p>
      <ChevronDown2 />
    </div>
  );
}

function WhenSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[98px] items-start relative flex-1 min-w-0" data-name="When section">
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
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

function Member() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="member">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32.375px]">
          <img alt="" className="absolute h-[338.92%] left-[-55.21%] max-w-none top-[-62.79%] w-[224.29%]" src={imgAvatar} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Julie
      </p>
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
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Lola
      </p>
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
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Ren
      </p>
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
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Nick
      </p>
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
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        James
      </p>
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
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Kerem
      </p>
    </div>
  );
}
function Member6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="member">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" data-name="avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32.375px] size-full" src={imgAvatar6} />
      </div>
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Anna
      </p>
    </div>
  );
}
function Member7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="member">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" style={{ backgroundImage: "linear-gradient(156.80141046209314deg, rgb(243, 211, 242) 9.2857%, rgb(217, 146, 194) 92.143%)" }} data-name="avatar" />
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Ari
      </p>
    </div>
  );
}

const MEMBER_AVATARS = [Member, Member1, Member2, Member3, Member4, Member5, Member6, Member7];

const MEMBER_NAMES = ["Julie", "Lola", "Ren", "Nick", "James", "Kerem", "Anna", "Ari"];

const MIN_ITEMS = 2;

const MEMBER_THUMBS: { className?: string; gradient?: string; src?: string }[] = [
  { className: "h-[338.92%] left-[-55.21%] top-[-62.79%] w-[224.29%]", src: imgAvatar },
  { className: "h-[278.91%] left-[-62.81%] top-[-69.96%] w-[209.18%]", src: imgAvatar1 },
  { className: "h-[371.43%] left-[-454.05%] top-[-135.47%] w-[663.06%]", src: imgAvatar2 },
  { className: "h-[648.04%] left-[-141.18%] top-[-484.8%] w-[331.37%]", src: imgAvatar3 },
  { className: "h-[549.15%] left-[-22.03%] top-[-218.64%] w-[274.58%]", src: imgAvatar4 },
  { className: "h-[345.58%] left-[-34.38%] top-[-112.89%] w-[159.41%]", src: imgAvatar5 },
  { className: "inset-0 object-cover rounded-[25.181px] size-full", src: imgAvatar6 },
  { gradient: "linear-gradient(156.80141046209314deg, rgb(243, 211, 242) 9.2857%, rgb(217, 146, 194) 92.143%)" },
];

function Checkbox({ checked }: { checked: boolean }) {
  if (!checked) {
    return (
      <div className="relative shrink-0 size-[24px]" data-name="checkbox vuoto">
        <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
          <g id="checkbox vuoto">
            <circle cx="12" cy="12" id="Ellipse 59" r="11.5" stroke="#888888" />
          </g>
        </svg>
      </div>
    );
  }
  return (
    <div className="bg-[#222] content-stretch flex items-center p-[5px] relative rounded-[31px] shrink-0 size-[24px]" data-name="checkbox enabled">
      <div className="relative shrink-0 size-[14px]" data-name="check">
        <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
          <g id="check">
            <path d={checkPaths.p6262c00} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function formatEuro(value: number) {
  return `€${value.toLocaleString("it-IT", { maximumFractionDigits: 2 })}`;
}

function MemberRow({ amount, checked, index, onToggle }: { amount: number; checked: boolean; index: number; onToggle: () => void }) {
  const MemberAvatar = MEMBER_AVATARS[index];
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="member row">
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="member info">
        <button aria-label={MEMBER_NAMES[index]} aria-pressed={checked} className="content-stretch flex shrink-0" onClick={onToggle} type="button">
          <Checkbox checked={checked} />
        </button>
        <MemberAvatar />
      </div>
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        {formatEuro(amount)}
      </p>
    </div>
  );
}

function MembersStack({ amount }: { amount: number }) {
  const [selected, setSelected] = useState(() => MEMBER_NAMES.map(() => true));
  const selectedCount = selected.filter(Boolean).length;
  const share = selectedCount > 0 && amount > 0 ? amount / selectedCount : 0;

  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-full" data-name="members stack">
      {MEMBER_NAMES.map((name, index) => (
        <MemberRow
          amount={selected[index] ? share : 0}
          checked={selected[index]}
          index={index}
          key={name}
          onToggle={() => setSelected((current) => current.map((value, i) => (i === index ? !value : value)))}
        />
      ))}
    </div>
  );
}

function MinusSignItm({ disabled }: { disabled: boolean }) {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="minus-sign">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="minus-sign">
          <path d="M10 6H2" id="Vector" stroke={disabled ? "#D9D9D9" : "white"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
        </g>
      </svg>
    </div>
  );
}

function ButtonItm({ disabled, onClick }: { disabled: boolean; onClick: () => void }) {
  return (
    <button className={`border border-solid content-stretch flex items-center p-[6px] relative rounded-[16px] shrink-0 ${disabled ? "bg-[#747474] border-[#747474]" : "bg-[#222] border-[#222]"}`} disabled={disabled} onClick={onClick} type="button" data-name="button">
      <MinusSignItm disabled={disabled} />
    </button>
  );
}

function AddItm() {
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

function Button1Itm({ onClick }: { onClick: () => void }) {
  return (
    <button className="bg-[#222] border border-[#222] border-solid content-stretch flex items-center p-[6px] relative rounded-[16px] shrink-0" onClick={onClick} type="button" data-name="button">
      <AddItm />
    </button>
  );
}

function CounterItm({ count, onAdd, onRemove }: { count: number; onAdd: () => void; onRemove: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="counter">
      <ButtonItm disabled={count <= MIN_ITEMS} onClick={onRemove} />
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        {`${count} items`}
      </p>
      <Button1Itm onClick={onAdd} />
    </div>
  );
}

function formatItemAmount(value: number) {
  return value.toLocaleString("it-IT", { maximumFractionDigits: 2 });
}

function ItemTextField({ onChange, placeholder, prefix, readOnly, weight, value }: { onChange: (value: string) => void; placeholder: string; prefix?: string; readOnly?: boolean; weight: "medium" | "semibold"; value: string }) {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center p-[16px] relative rounded-[32px] shrink-0 w-full" data-name="text field">
      <input
        className={`[word-break:break-word] bg-transparent font-['Nunito_Sans',sans-serif] ${weight === "semibold" ? "font-semibold" : "font-medium"} leading-[normal] min-w-0 outline-none placeholder:text-[#808080] relative ${prefix && value === "" ? "text-[#808080]" : "text-[#222]"} text-[14px] w-full`}
        onChange={(event) => onChange(prefix ? event.target.value.replace(prefix, "").replace(/[^0-9.,]/g, "") : event.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
        style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}
        value={prefix && value !== "" ? `${prefix}${value}` : value}
      />
    </div>
  );
}

function FieldLabel({ children }: { children: string }) {
  return (
    <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#808080] text-[14px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
      {children}
    </p>
  );
}

function ArrowDownItm({ up }: { up: boolean }) {
  return (
    <div className={`relative shrink-0 size-[18px] transition-transform duration-200 ${up ? "rotate-180" : ""}`} data-name="arrow-down-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="arrow-down-01">
          <path d={svgPaths3.p1bc80a90} id="Vector" stroke="#141B34" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function MemberThumb({ index }: { index: number }) {
  const thumb = MEMBER_THUMBS[index];
  if (!thumb) return null;
  if (thumb.gradient) {
    return <div className="relative rounded-[25.181px] shrink-0 size-[28px]" style={{ backgroundImage: thumb.gradient }} data-name="image 107" />;
  }
  return (
    <div className="relative rounded-[25.181px] shrink-0 size-[28px]" data-name="image 107">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[25.181px]">
        <img alt="" className={`absolute max-w-none ${thumb.className}`} src={thumb.src} />
      </div>
    </div>
  );
}

function DropdownTend({ onToggle, selected }: { onToggle: (index: number) => void; selected: boolean[] }) {
  return (
    <div className="absolute bg-[#fffefd] border border-[#e1dfe0] border-solid bottom-[calc(100%_+_8px)] content-stretch flex flex-col gap-[10px] items-start p-[12px] right-0 rounded-[12px] w-[168px] z-20" data-name="dropdown tend">
      {MEMBER_NAMES.map((name, index) => (
        <button className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" key={name} onClick={() => onToggle(index)} type="button">
          <Checkbox checked={selected[index]} />
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <MemberThumb index={index} />
            <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              {name}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}

function SplitFieldItm({ onToggleMember, onToggleOpen, open, selected }: { onToggleMember: (index: number) => void; onToggleOpen: () => void; open: boolean; selected: boolean[] }) {
  const selectedCount = selected.filter(Boolean).length;
  const label = selectedCount === selected.length ? "Everyone" : `${selectedCount} people`;
  return (
    <div className={`content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[115px] ${open ? "z-20" : ""}`} data-dropdown-open={open ? "true" : undefined} data-name="split field">
      <FieldLabel>Split between</FieldLabel>
      <div className="relative w-full">
        {open ? <DropdownTend onToggle={onToggleMember} selected={selected} /> : null}
        <button className="bg-white content-stretch flex items-center justify-between px-[16px] py-[12px] relative rounded-[41px] shrink-0 w-full" onClick={onToggleOpen} type="button" data-name="dropdown">
          <div aria-hidden className="absolute border border-[#e1dfe0] border-solid inset-0 pointer-events-none rounded-[41px]" />
          <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
            {label}
          </p>
          <ArrowDownItm up={open} />
        </button>
      </div>
    </div>
  );
}

type ExpenseItem = { amount: string; id: number; members: boolean[]; name: string };

function createItem(id: number): ExpenseItem {
  return { amount: "", id, members: MEMBER_NAMES.map(() => true), name: "" };
}

function ItemRowItm({ amountValue, index, item, onChange, onToggleOpen, open, readOnlyAmount }: { amountValue: string; index: number; item: ExpenseItem; onChange: (update: Partial<ExpenseItem>) => void; onToggleOpen: () => void; open: boolean; readOnlyAmount: boolean }) {
  return (
    <div className={`content-stretch flex gap-[20px] items-start relative shrink-0 w-full ${open ? "z-20" : ""}`} data-name="item row">
      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow-[120] items-start min-w-0 relative shrink" data-name="item name field">
        <FieldLabel>{`Item ${index + 1}`}</FieldLabel>
        <ItemTextField onChange={(name) => onChange({ name })} placeholder="Item’s name" weight="semibold" value={item.name} />
      </div>
      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow-[76] items-start min-w-0 relative shrink" data-name="amount field">
        <FieldLabel>Amount</FieldLabel>
        <ItemTextField onChange={(amount) => onChange({ amount })} placeholder="€0,00" prefix="€" readOnly={readOnlyAmount} weight="medium" value={amountValue} />
      </div>
      <SplitFieldItm
        onToggleMember={(memberIndex) => onChange({ members: item.members.map((value, i) => (i === memberIndex ? !value : value)) })}
        onToggleOpen={onToggleOpen}
        open={open}
        selected={item.members}
      />
    </div>
  );
}

function Content1Itm({ total }: { total: number }) {
  const [items, setItems] = useState<ExpenseItem[]>(() => [createItem(0), createItem(1)]);
  const [openItem, setOpenItem] = useState<number | null>(null);
  const nextIdRef = useRef(2);

  // the remainder only fills in when exactly one amount is still empty
  const emptyIndexes = items.map((item, index) => (item.amount === "" ? index : -1)).filter((index) => index >= 0);
  const residualIndex = emptyIndexes.length === 1 && total > 0 ? emptyIndexes[0] : -1;
  const spent = items.reduce((sum, item) => sum + parseAmount(item.amount), 0);
  const residual = residualIndex >= 0 ? formatItemAmount(Math.max(0, total - spent)) : "";

  // any interaction outside the open dropdown closes it
  useEffect(() => {
    if (openItem === null) return;
    const closeOnOutside = (event: Event) => {
      const target = event.target as Element | null;
      if (target?.closest('[data-dropdown-open="true"]')) return;
      setOpenItem(null);
    };
    document.addEventListener("pointerdown", closeOnOutside, true);
    document.addEventListener("focusin", closeOnOutside, true);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutside, true);
      document.removeEventListener("focusin", closeOnOutside, true);
    };
  }, [openItem]);

  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="content">
      <CounterItm
        count={items.length}
        onAdd={() => {
          setItems((current) => [...current, createItem(nextIdRef.current++)]);
        }}
        onRemove={() => {
          setItems((current) => {
            if (current.length <= MIN_ITEMS) return current;
            const removed = current[current.length - 1];
            if (removed && openItem === removed.id) setOpenItem(null);
            return current.slice(0, -1);
          });
        }}
      />
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="items">
        {items.map((item, index) => (
          <ItemRowItm
            amountValue={index === residualIndex ? residual : item.amount}
            index={index}
            item={item}
            key={item.id}
            onChange={(update) => setItems((current) => current.map((entry) => (entry.id === item.id ? { ...entry, ...update } : entry)))}
            onToggleOpen={() => setOpenItem((current) => (current === item.id ? null : item.id))}
            open={openItem === item.id}
            readOnlyAmount={index === residualIndex}
          />
        ))}
      </div>
    </div>
  );
}

function parseAmount(value: string) {
  const parsed = Number.parseFloat(value.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : 0;
}

function Segmented({ onChange, value }: { onChange: (v: "byItems" | "equally") => void; value: "byItems" | "equally" }) {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[33px] shrink-0" data-name="segmented">
      <button className={`content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[27px] shrink-0 ${value === "equally" ? "bg-[#222]" : "bg-white"}`} onClick={() => onChange("equally")} type="button" data-name="equally">
        <p className={`[word-break:break-word] font-['Nunito_Sans',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] whitespace-nowrap ${value === "equally" ? "font-semibold text-[#fffefd]" : "font-medium text-[#808080]"}`}>Equally</p>
      </button>
      <button className={`content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[30px] shrink-0 ${value === "byItems" ? "bg-[#222]" : "bg-[#fffefd]"}`} onClick={() => onChange("byItems")} type="button" data-name="by items">
        <p className={`[word-break:break-word] font-['Nunito_Sans',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] whitespace-nowrap ${value === "byItems" ? "font-semibold text-[#fffefd]" : "font-medium text-[#808080]"}`}>By Items</p>
      </button>
    </div>
  );
}

function Header({ onChange, value }: { onChange: (v: "byItems" | "equally") => void; value: "byItems" | "equally" }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="header">
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Split
      </p>
      <Segmented onChange={onChange} value={value} />
    </div>
  );
}


function SplitSection({ amount, onChange, value }: { amount: number; onChange: (v: "byItems" | "equally") => void; value: "byItems" | "equally" }) {
  return (
    <div className={`content-stretch flex flex-col items-start relative shrink-0 w-full ${value === "equally" ? "gap-[16px]" : "gap-[8px]"}`} data-name="split section">
      <Header onChange={onChange} value={value} />
      {value === "equally" ? <MembersStack amount={amount} /> : <Content1Itm total={amount} />}
    </div>
  );
}

function Divider() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Divider">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 354 1" width="354">
          <path d="M0 0.5H354" id="Divider" stroke="#E1DFE0" />
        </svg>
      </div>
    </div>
  );
}

function Content({ amount, onAmountChange, onChange, value }: { amount: string; onAmountChange: (value: string) => void; onChange: (v: "byItems" | "equally") => void; value: "byItems" | "equally" }) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="content">
      <AmountSection amount={amount} onAmountChange={onAmountChange} />
      <Divider />
      <ActivitySection />
      <PaymentDetailsSection />
      <Divider />
      <SplitSection amount={parseAmount(amount)} onChange={onChange} value={value} />
    </div>
  );
}

function BottomBar({ onSubmit }: { onSubmit: () => void }) {
  return (
    <div className="bg-white border-[#e1dfe0] border-solid border-t content-stretch flex flex-col items-start pb-[16px] pt-[12px] px-[25px] relative shrink-0 w-full" data-name="Bottom bar">
      <button className="bg-[#222] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[16033390px] shrink-0 w-full" onClick={onSubmit} type="button" data-name="Button">
        <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[15.291px] relative shrink-0 text-[16px] text-center text-white tracking-[-0.0956px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
          Add expense
        </p>
      </button>
    </div>
  );
}

export default function AddExpenseSheet({ open, onClose, onSubmit }: { onClose: () => void; onSubmit: (amount: number) => void; open: boolean }) {
  const [split, setSplit] = useState<"byItems" | "equally">("equally");
  const [amount, setAmount] = useState("");
  const [dragOffset, setDragOffset] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const startYRef = useRef(0);

  useEffect(() => {
    if (!open) return;
    const { body } = document;
    const prevOverflow = body.style.overflow;
    const prevOverscroll = body.style.overscrollBehavior;
    body.style.overflow = "hidden";
    body.style.overscrollBehavior = "none";
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
      scrollRef.current.querySelector("input")?.focus();
    }
    setDragOffset(0);
    return () => {
      body.style.overflow = prevOverflow;
      body.style.overscrollBehavior = prevOverscroll;
    };
  }, [open]);

  const endDrag = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    if (dragOffset > 80) onClose();
    setDragOffset(0);
  };

  return (
    <div className={`fixed inset-0 z-30 ${open ? "" : "pointer-events-none"}`}>
      <div className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ease-out ${open ? "opacity-100" : "opacity-0"}`} onClick={onClose} />
      <div
        className="absolute bottom-0 left-0 right-0 top-[88px] flex flex-col overflow-hidden rounded-tl-[24px] rounded-tr-[24px] bg-white"
        style={{ transform: open ? `translateY(${dragOffset}px)` : "translateY(100%)", transition: draggingRef.current ? "none" : "transform 300ms ease-out" }}
      >
        <div
          className="shrink-0 touch-none"
          onPointerDown={(event) => {
            draggingRef.current = true;
            startYRef.current = event.clientY;
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerMove={(event) => {
            if (!draggingRef.current) return;
            setDragOffset(Math.max(0, event.clientY - startYRef.current));
          }}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          <GrabberSection />
        </div>
        <div className="hide-scrollbar flex-1 overflow-y-auto overscroll-contain touch-pan-y" ref={scrollRef}>
          <div className="content-stretch flex flex-col gap-[28px] items-center pb-[24px] pt-[24px] px-[25px] relative w-full">
            <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[15.291px] min-w-full relative shrink-0 text-[#222] text-[20px] text-center tracking-[-0.0956px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Add an expense
            </p>
            <Content amount={amount} onAmountChange={setAmount} onChange={setSplit} value={split} />
          </div>
        </div>
        <BottomBar
          onSubmit={() => {
            onSubmit(parseAmount(amount));
            setAmount("");
            onClose();
          }}
        />
      </div>
    </div>
  );
}

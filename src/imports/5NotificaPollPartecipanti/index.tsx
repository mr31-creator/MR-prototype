import svgPaths from "./svg-7ulpoi772o";
import img5NotificaPollPartecipanti from "./834ed1d58b938a7b17b67e5717abae140dbb3da9.png";

function Time() {
  return (
    <div className="content-stretch flex h-[22px] items-center justify-center pt-[2px] relative shrink-0 w-[84px]" data-name="Time">
      <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
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
          <path clipRule="evenodd" d={svgPaths.p3ca05e00} fill="white" fillRule="evenodd" id="Cellular Connection" />
          <path clipRule="evenodd" d={svgPaths.p32156700} fill="white" fillRule="evenodd" id="Wifi" />
          <g id="Battery">
            <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="white" width="24" x="72.0068" y="5.5" />
            <path d={svgPaths.p1d8d8380} fill="white" id="Cap" opacity="0.4" />
            <rect fill="white" height="9" id="Capacity" rx="2.5" width="21" x="73.5068" y="7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StatusBarIPhone() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-between left-1/2 pb-[19px] pt-[21px] px-[16px] top-0 w-[402px]" data-name="Status bar - iPhone">
      <Time />
      <Levels />
    </div>
  );
}

function Notification() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex items-center left-1/2 px-[16px] py-[8px] rounded-[34px] top-[158px]" data-name="notification">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        ⏭ (Demo: fast-forward)
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[158px] left-[calc(50%+1.5px)] top-[calc(50%-282px)] w-[251px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute bg-clip-text bg-gradient-to-b bottom-[1.27%] font-['SF_Pro_Rounded:Semibold',sans-serif] from-[rgba(255,255,255,0.3)] leading-[1.2] left-[calc(50%+0.5px)] not-italic text-[128px] text-[transparent] text-center text-shadow-[-3.322px_6.644px_16.611px_rgba(145,145,145,0.05),-11.628px_28.239px_29.9px_rgba(145,145,145,0.04),-24.917px_61.461px_39.867px_rgba(145,145,145,0.03),-44.85px_109.633px_48.172px_rgba(145,145,145,0.01),-69.767px_171.094px_51.494px_rgba(145,145,145,0)] to-[rgba(217,217,217,0.3)] top-[1.27%] tracking-[-8px] whitespace-nowrap">17:41</p>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro_Rounded:Medium',sans-serif] justify-center leading-[0] left-[calc(50%-67.5px)] not-italic text-[24px] text-white top-[11.5px] whitespace-nowrap">
        <p className="leading-[normal]">Sat. Jul. 13</p>
      </div>
      <Notification />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] left-[39px] overflow-clip rounded-[119px] size-[70px] top-[774px]">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-[35px] text-[24px] text-center text-white top-[34.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`\u{10074C}`}</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] left-[301px] overflow-clip rounded-[119px] size-[70px] top-[774px]">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-[34.5px] text-[24px] text-center text-white top-[34.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`\u{10031F}`}</p>
      </div>
    </div>
  );
}

function TitleTime() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Title + Time">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[0] min-w-px relative text-[15px] tracking-[-0.5px]">
        <span className="leading-[20px]">{`Where are we eating tonight? `}</span>
        <span className="leading-[20px]">{`🍽 `}</span>
      </p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] mix-blend-overlay relative shrink-0 text-[13px] text-right tracking-[-0.078px] whitespace-nowrap">3m ago</p>
    </div>
  );
}

function NotificationContent() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic overflow-clip relative text-white" data-name="Notification Content">
      <TitleTime />
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] relative shrink-0 text-[13px] tracking-[-0.078px] w-full whitespace-pre-wrap">
        {`Vote Ari's dinner poll before 7PM. `}
        <br aria-hidden />
        {`Don't let the group decide without you.`}
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full z-[3]" data-name="Content">
      <div className="relative shrink-0 size-[38px]" data-name="avtar">
        <svg className="absolute block inset-0 size-full" fill="none" height="38" preserveAspectRatio="none" viewBox="0 0 38 38" width="38">
          <g filter="url(#filter0_n_0_12)" id="avtar">
            <circle cx="19" cy="19" fill="url(#paint0_linear_0_12)" r="19" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38" id="filter0_n_0_12" width="38" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feTurbulence baseFrequency="5.5263156890869141 5.5263156890869141" numOctaves="3" result="noise" seed="2856" stitchTiles="stitch" type="fractalNoise" />
              <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
              <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                <feFuncA tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " type="discrete" />
              </feComponentTransfer>
              <feComposite in="coloredNoise1" in2="shape" operator="in" result="noise1Clipped" />
              <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
              <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
              <feMerge result="effect1_noise_0_12">
                <feMergeNode in="shape" />
                <feMergeNode in="color1" />
              </feMerge>
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_12" x1="11.7619" x2="28.0476" y1="-4.87278e-07" y2="38">
              <stop stopColor="#F3D3F2" />
              <stop offset="1" stopColor="#D992C2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <NotificationContent />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute blur-[10.7px] h-[76px] left-0 rounded-[32px] top-0 w-[355px] z-[2]">
      <div aria-hidden className="absolute border-5 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Frame2() {
  return <div className="absolute bg-[rgba(255,255,255,0)] h-[102px] left-[-15px] top-[-13px] w-[385px] z-[1]" />;
}

function Notification1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0.1)] left-[calc(50%-0.5px)] rounded-[16px] top-1/2 w-[355px]" data-name="Notification">
      <div className="content-stretch flex flex-col gap-[10px] isolate items-center overflow-clip p-[10px] relative rounded-[inherit] size-full">
        <Content />
        <Frame3 />
        <Frame2 />
      </div>
      <div aria-hidden className="absolute border-[0.5px] border-[rgba(255,255,255,0.7)] border-solid inset-[-0.25px] pointer-events-none rounded-[16.25px]" />
    </div>
  );
}

export default function Component5NotificaPollPartecipanti() {
  return (
    <div className="relative size-full" data-name="5. notifica poll partecipanti">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[115.45%] left-[-15.73%] max-w-none top-[-15.41%] w-[115.82%]" src={img5NotificaPollPartecipanti} />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.07)] inset-0" />
      </div>
      <StatusBarIPhone />
      <Text />
      <Frame />
      <Frame1 />
      <Notification1 />
    </div>
  );
}
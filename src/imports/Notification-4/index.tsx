import svgPaths from "./svg-utgnpa8s11";

function TripUpLogo() {
  return (
    <div className="relative shrink-0 size-[39px]" data-name="Trip up logo">
      <svg className="absolute block inset-0 size-full" fill="none" height="39" preserveAspectRatio="none" viewBox="0 0 39 39" width="39">
        <g id="Trip up logo">
          <rect fill="#222222" height="39" rx="5.77778" width="39" />
          <g id="Vector">
            <path d={svgPaths.p31169580} stroke="url(#paint0_linear_0_5)" strokeLinecap="round" strokeWidth="2.76712" />
            <path d={svgPaths.p31169580} stroke="url(#paint1_linear_0_5)" strokeLinecap="round" strokeOpacity="0.4" strokeWidth="2.76712" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_5" x1="28.7083" x2="11.1343" y1="14.6054" y2="26.4017">
            <stop stopColor="#FFCF89" />
            <stop offset="0.5" stopColor="#D8DDFF" />
            <stop offset="1" stopColor="#8293FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_5" x1="13.5417" x2="26.3009" y1="11.5961" y2="27.2443">
            <stop stopColor="#3DFF98" />
            <stop offset="1" stopColor="#FF49FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function TitleTime() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Title + Time">
      <p className="flex-[1_0_0] font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] min-w-px relative text-[15px] tracking-[-0.5px]">{`Lisbon: all squared up 🎉 `}</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] mix-blend-overlay relative shrink-0 text-[13px] text-right tracking-[-0.078px] whitespace-nowrap">3m ago</p>
    </div>
  );
}

function NotificationContent() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic overflow-clip relative text-white" data-name="Notification Content">
      <TitleTime />
      <div className="font-['SF_Pro_Text:Regular',sans-serif] leading-[0] relative shrink-0 text-[13px] tracking-[-0.078px] w-full">
        <p className="leading-[18px] mb-0">All debts settled, nothing left to split.</p>
        <p className="leading-[18px]">On to the next adventure!</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full z-[3]" data-name="Content">
      <TripUpLogo />
      <NotificationContent />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute blur-[10.7px] h-[76px] left-0 rounded-[32px] top-0 w-[355px] z-[2]">
      <div aria-hidden className="absolute border-5 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Frame() {
  return <div className="absolute bg-[rgba(255,255,255,0)] h-[102px] left-[-15px] top-[-13px] w-[385px] z-[1]" />;
}

export default function Notification() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] relative rounded-[16px] size-full" data-name="Notification">
      <div className="content-stretch flex flex-col gap-[10px] isolate items-center overflow-clip p-[10px] relative rounded-[inherit] size-full">
        <Content />
        <Frame1 />
        <Frame />
      </div>
      <div aria-hidden className="absolute border-[0.5px] border-[rgba(255,255,255,0.7)] border-solid inset-[-0.25px] pointer-events-none rounded-[16.25px]" />
    </div>
  );
}
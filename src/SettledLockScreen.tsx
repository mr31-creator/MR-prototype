import svgPaths from "@/imports/5PollNotification-1/svg-x383eg9no2";
import imgSettledLockScreen from "@/imports/5PollNotification-1/834ed1d58b938a7b17b67e5717abae140dbb3da9.png";

function Text() {
  return (
    <div className="-translate-x-1/2 absolute h-[158px] left-1/2 not-italic top-[62px] w-[251px] whitespace-nowrap" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute bg-clip-text bg-gradient-to-b bottom-[1.27%] font-['SF_Pro_Rounded',sans-serif] font-semibold from-[rgba(255,255,255,0.3)] leading-[1.2] left-[calc(50%+0.5px)] text-[128px] text-[transparent] text-center text-shadow-[-3.322px_6.644px_16.611px_rgba(145,145,145,0.05),-11.628px_28.239px_29.9px_rgba(145,145,145,0.04),-24.917px_61.461px_39.867px_rgba(145,145,145,0.03),-44.85px_109.633px_48.172px_rgba(145,145,145,0.01),-69.767px_171.094px_51.494px_rgba(145,145,145,0)] to-[rgba(217,217,217,0.3)] top-[1.27%] tracking-[-8px]">23:41</p>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro_Rounded',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-67.5px)] text-[24px] text-white top-[11.5px]">
        <p className="leading-[normal]">Sat. Jul. 13</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] bottom-[30px] left-[39px] overflow-clip rounded-[119px] size-[70px]" data-name="button">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro',sans-serif] font-normal justify-center leading-[0] left-[35px] text-[24px] text-center text-white top-[34.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`\u{10074C}`}</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] bottom-[30px] overflow-clip right-[31px] rounded-[119px] size-[70px]" data-name="button">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro',sans-serif] font-normal justify-center leading-[0] left-[34.5px] text-[24px] text-center text-white top-[34.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`\u{10031F}`}</p>
      </div>
    </div>
  );
}

function TripUpLogo() {
  return (
    <div className="relative shrink-0 size-[39px]" data-name="Trip up logo">
      <svg className="absolute block inset-0 size-full" fill="none" height="39" preserveAspectRatio="none" viewBox="0 0 39 39" width="39">
        <g id="Trip up logo">
          <rect fill="#222222" height="39" rx="5.77778" width="39" />
          <g id="Vector">
            <path d={svgPaths.p31169580} stroke="url(#paint0_linear_settled_lock)" strokeLinecap="round" strokeWidth="2.76712" />
            <path d={svgPaths.p31169580} stroke="url(#paint1_linear_settled_lock)" strokeLinecap="round" strokeOpacity="0.4" strokeWidth="2.76712" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_settled_lock" x1="28.7083" x2="11.1343" y1="14.6054" y2="26.4017">
            <stop stopColor="#FFCF89" />
            <stop offset="0.5" stopColor="#D8DDFF" />
            <stop offset="1" stopColor="#8293FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_settled_lock" x1="13.5417" x2="26.3009" y1="11.5961" y2="27.2443">
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
      <p className="flex-[1_0_0] font-['SF_Pro',sans-serif] font-medium leading-[20px] min-w-px relative text-[15px] text-left tracking-[-0.5px]">{`Lisbon: all squared up 🎉 `}</p>
      <p className="font-['SF_Pro',sans-serif] font-normal leading-[18px] mix-blend-overlay relative shrink-0 text-[13px] text-right tracking-[-0.078px] whitespace-nowrap">3m ago</p>
    </div>
  );
}

function NotificationContent() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic overflow-clip relative text-white" data-name="Notification Content">
      <TitleTime />
      <div className="font-['SF_Pro',sans-serif] font-normal leading-[0] relative shrink-0 text-[13px] text-left tracking-[-0.078px] w-full">
        <p className="leading-[18px] mb-0 opacity-80">All debts settled, nothing left to split.</p>
        <p className="leading-[18px] opacity-80">On to the next adventure!</p>
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
    <div className="absolute blur-[10.7px] h-[76px] left-0 rounded-[32px] top-0 w-full z-[2]">
      <div aria-hidden className="absolute border-5 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Frame() {
  return <div className="absolute bg-[rgba(255,255,255,0)] h-[102px] left-[-15px] top-[-13px] w-[calc(100%_+_30px)] z-[1]" />;
}

function Notification({ onOpen }: { onOpen: () => void }) {
  return (
    <button onClick={onOpen} type="button" className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0.1)] left-1/2 max-w-[355px] rounded-[16px] top-1/2 w-[calc(100%_-_24px)]" data-name="Notification">
      <div className="content-stretch flex flex-col gap-[10px] isolate items-center overflow-clip p-[10px] relative rounded-[inherit] size-full">
        <Content />
        <Frame1 />
        <Frame />
      </div>
      <div aria-hidden className="absolute border-[0.5px] border-[rgba(255,255,255,0.7)] border-solid inset-[-0.25px] pointer-events-none rounded-[16.25px]" />
    </button>
  );
}

export default function SettledLockScreen({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="bg-black fixed inset-0 overflow-hidden z-40" data-name="5 POLL NOTIFICATION">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[115.45%] left-[-15.73%] max-w-none top-[-15.41%] w-[115.82%]" src={imgSettledLockScreen} />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.07)] inset-0" />
      </div>
      <Text />
      <Button />
      <Button1 />
      <Notification onOpen={onOpen} />
    </div>
  );
}

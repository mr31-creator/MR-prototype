import { useEffect, useRef, useState } from "react";
import svgPaths from "@/imports/Notification-3/svg-7owqzelnkr";

function TripUpLogo() {
  return (
    <div className="relative shrink-0 size-[39px]" data-name="Trip up logo">
      <svg className="absolute block inset-0 size-full" fill="none" height="39" preserveAspectRatio="none" viewBox="0 0 39 39" width="39">
        <g id="Trip up logo">
          <rect fill="#222222" height="39" rx="5.77778" width="39" />
          <g id="Vector">
            <path d={svgPaths.p31169580} stroke="url(#paint0_linear_inapp)" strokeLinecap="round" strokeWidth="2.76712" />
            <path d={svgPaths.p31169580} stroke="url(#paint1_linear_inapp)" strokeLinecap="round" strokeOpacity="0.4" strokeWidth="2.76712" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_inapp" x1="28.7083" x2="11.1343" y1="14.6054" y2="26.4017">
            <stop stopColor="#FFCF89" />
            <stop offset="0.5" stopColor="#D8DDFF" />
            <stop offset="1" stopColor="#8293FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_inapp" x1="13.5417" x2="26.3009" y1="11.5961" y2="27.2443">
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
      <p className="flex-[1_0_0] font-['SF_Pro',sans-serif] font-medium leading-[0] min-w-px relative text-[15px] text-left tracking-[-0.5px]">
        <span className="leading-[20px]">{`Where are we eating tonight? `}</span>
        <span className="leading-[20px]">{`🍽 `}</span>
      </p>
      <p className="font-['SF_Pro',sans-serif] font-normal leading-[18px] mix-blend-overlay relative shrink-0 text-[13px] text-right tracking-[-0.078px] whitespace-nowrap">now</p>
    </div>
  );
}

function NotificationContent() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic overflow-clip relative text-white" data-name="Notification Content">
      <TitleTime />
      <p className="font-['SF_Pro',sans-serif] font-normal leading-[18px] relative shrink-0 text-[13px] text-left tracking-[-0.078px] w-full whitespace-pre-wrap">
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

// in-app banner: slides down from the top edge and rests 30px below it
export default function PollNotification({ onDismiss, onOpen, open }: { onDismiss: () => void; onOpen: () => void; open: boolean }) {
  const [shown, setShown] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const draggingRef = useRef(false);
  const startYRef = useRef(0);

  useEffect(() => {
    if (!open) {
      setShown(false);
      setDragOffset(0);
      return;
    }
    const timer = window.setTimeout(() => setShown(true), 20);
    return () => window.clearTimeout(timer);
  }, [open]);

  const endDrag = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    if (dragOffset < -40) {
      setShown(false);
      onDismiss();
    }
    setDragOffset(0);
  };

  return (
    <div className={`-translate-x-1/2 fixed left-1/2 max-w-[355px] top-[30px] w-[calc(100%_-_24px)] z-40 ${open ? "" : "pointer-events-none"}`} data-name="notification band">
      <button
        className="bg-[rgba(0,0,0,0.2)] relative rounded-[16px] touch-none w-full"
        data-name="Notification"
        onClick={onOpen}
        onPointerCancel={endDrag}
        onPointerDown={(event) => {
          draggingRef.current = true;
          startYRef.current = event.clientY;
        }}
        onPointerMove={(event) => {
          if (!draggingRef.current) return;
          setDragOffset(Math.min(0, event.clientY - startYRef.current));
        }}
        onPointerUp={endDrag}
        style={{
          opacity: shown ? 1 : 0,
          transform: shown ? `translateY(${dragOffset}px)` : "translateY(calc(-100% - 30px))",
          transition: draggingRef.current ? "none" : "transform 400ms ease-out, opacity 300ms ease-out",
        }}
        type="button"
      >
        <div className="content-stretch flex flex-col gap-[10px] isolate items-center overflow-clip p-[10px] relative rounded-[inherit] size-full">
          <Content />
          <Frame1 />
          <Frame />
        </div>
        <div aria-hidden className="absolute border-[0.5px] border-[rgba(255,255,255,0.7)] border-solid inset-[-0.25px] pointer-events-none rounded-[16.25px]" />
      </button>
    </div>
  );
}

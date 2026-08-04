import { useEffect, useRef, useState } from "react";
import svgPaths from "@/imports/BottomSheet-5/svg-7pm64wu7si";
import notificationSvgPaths from "@/imports/Notification-2/svg-hw2yhep559";
import imgAvatar from "@/imports/BottomSheet-5/d5882efb94700267aa2e7709e822558cae4296e7.png";
import imgImage from "@/imports/BottomSheet-5/5cec10a05d89cb6b3fb8ab40fe94ba98a9b40bc9.png";
import imgImage1 from "@/imports/BottomSheet-5/74790532b1c95439c772a1deca6e8ed8d5126253.png";
import imgRectangle from "@/imports/BottomSheet-5/f8e2718f0c4a86c69bc48e057ebf07b1e4f149d4.png";

function NotificationIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="icon">
          <rect fill="#222222" height="24" rx="12" width="24" />
          <path d={notificationSvgPaths.p384c7700} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Notification({ message }: { message: string }) {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center pl-[8px] pr-[16px] py-[8px] relative rounded-[34px]" data-name="notification">
      <NotificationIcon />
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        {message}
      </p>
    </div>
  );
}

function GrabberSection() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center px-[84px] py-[4px] relative shrink-0 w-full" data-name="grabber section">
      <div className="bg-[#c4c4c4] h-[4px] relative rounded-[14px] shrink-0 w-[47.235px]" data-name="grabber" />
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0">
      <p className="font-['Nunito_Sans',sans-serif] font-bold relative shrink-0 text-[#222] text-[16px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Ren Dincleberg
      </p>
      <p className="font-['Inter',sans-serif] font-medium not-italic relative shrink-0 text-[#808080] text-[14px] w-full">@renddicleberg</p>
    </div>
  );
}

function User() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="user">
      <div className="relative rounded-[74px] shrink-0 size-[64px]" data-name="avatar">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[74px]">
          <div className="absolute inset-0 overflow-hidden rounded-[74px]">
            <img alt="" className="absolute h-[371.43%] left-[-454.05%] max-w-none top-[-135.47%] w-[663.06%]" src={imgAvatar} />
          </div>
          <div className="absolute inset-0 overflow-hidden rounded-[74px]">
            <img alt="" className="absolute h-[371.43%] left-[-454.05%] max-w-none top-[-135.47%] w-[663.06%]" src={imgAvatar} />
          </div>
        </div>
      </div>
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Nunito_Sans',sans-serif] font-bold gap-[4px] items-center leading-[normal] relative shrink-0 text-[#222]">
      <p className="relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Amount
      </p>
      <p className="relative shrink-0 text-[36px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €40
      </p>
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

function Dropdown() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[15px] py-[8px] relative rounded-[19px] shrink-0" data-name="dropdown">
      <div aria-hidden className="absolute border border-[#e1dfe0] border-solid inset-0 pointer-events-none rounded-[19px]" />
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        EUR
      </p>
      <ArrowDown />
    </div>
  );
}

function AmountSection() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="amount section">
      <Frame1 />
      <Dropdown />
    </div>
  );
}

function RadioButton({ selected }: { selected: boolean }) {
  if (!selected) {
    return (
      <div className="relative shrink-0 size-[24px]" data-name="radio button">
        <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
          <circle cx="12" cy="12" id="radio button" r="11.4" stroke="#888888" strokeWidth="1.2" />
        </svg>
      </div>
    );
  }
  return (
    <div className="relative shrink-0 size-[24px]" data-name="radio button">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="radio button">
          <circle cx="12" cy="12" fill="#333333" id="Ellipse 53" r="11.5" stroke="#333333" />
          <circle cx="12" cy="12" fill="white" id="Ellipse 54" r="4.5" stroke="white" />
        </g>
      </svg>
    </div>
  );
}

function QuickcardInfo() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="payment info">
      <div className="relative shrink-0 size-[32px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 text-[14px]" data-name="text">
        <p className="font-['Nunito_Sans',sans-serif] font-bold relative shrink-0 text-[#222] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
          MPS Quickcard
        </p>
        <p className="font-['Inter',sans-serif] font-normal not-italic relative shrink-0 text-[#808080] w-full">Debit •••••9682</p>
      </div>
    </div>
  );
}

function SatispayInfo() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="payment info">
      <div className="h-[34px] relative shrink-0 w-[32px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[131.31%] left-[-55.43%] max-w-none top-0 w-[211.96%]" src={imgImage1} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Satispay
      </p>
    </div>
  );
}

function PaypalInfo() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="payment info">
      <div className="h-[33px] relative shrink-0 w-[32px]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[106.67%] left-[-10.34%] max-w-none top-[-6.67%] w-[110.34%]" src={imgRectangle} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Paypal
      </p>
    </div>
  );
}

const PAYMENT_METHODS = [QuickcardInfo, SatispayInfo, PaypalInfo];

function Card({ index, onSelect, selected }: { index: number; onSelect: () => void; selected: boolean }) {
  const PaymentInfo = PAYMENT_METHODS[index];
  return (
    <button className="bg-white relative rounded-[16px] shrink-0 text-left w-full" data-name="card" onClick={onSelect} type="button">
      <div aria-hidden className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${selected ? "border-[#222]" : "border-[#e1dfe0]"}`} />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative size-full">
          <PaymentInfo />
          <RadioButton selected={selected} />
        </div>
      </div>
    </button>
  );
}

function PaymentMethodSection({ onSelect, selected }: { onSelect: (index: number) => void; selected: number }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="payment method section">
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[16px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Payment method
      </p>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="card stack">
        {PAYMENT_METHODS.map((_, index) => (
          <Card index={index} key={index} onSelect={() => onSelect(index)} selected={selected === index} />
        ))}
      </div>
    </div>
  );
}

function NoteField({ onChange, value }: { onChange: (value: string) => void; value: string }) {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center p-[16px] relative rounded-[32px] shrink-0 w-full" data-name="text field">
      <input
        className={`bg-transparent font-['Inter',sans-serif] font-medium leading-[normal] min-w-0 not-italic outline-none placeholder:text-[#808080] relative text-[14px] w-full ${value === "" ? "text-[#808080]" : "text-[#222]"}`}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Add a note"
        value={value}
      />
    </div>
  );
}

function Content({ note, onNoteChange, onSelect, selected }: { note: string; onNoteChange: (value: string) => void; onSelect: (index: number) => void; selected: number }) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="content">
      <User />
      <AmountSection />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 354 1" width="354">
            <path d="M0 0.5H354" id="Divider" stroke="#E1DFE0" />
          </svg>
        </div>
      </div>
      <PaymentMethodSection onSelect={onSelect} selected={selected} />
      <NoteField onChange={onNoteChange} value={note} />
    </div>
  );
}

function BottomBar({ onSend }: { onSend: () => void }) {
  return (
    <div className="bg-white border-[#e1dfe0] border-solid border-t content-stretch flex flex-col gap-[12px] items-start pb-[16px] pt-[12px] px-[25px] relative shrink-0 w-full" data-name="Bottom bar">
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#808080] text-[14px] w-full">
        This payment is optimized: TripUp combined all the balances to keep transfers to a minimum.
      </p>
      <button className="bg-[#222] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[16033390px] shrink-0 w-full" data-name="Button" onClick={onSend} type="button">
        <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[15.291px] relative shrink-0 text-[18px] text-center text-white tracking-[-0.0956px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
          Send
        </p>
      </button>
    </div>
  );
}

export default function SettleSharesSheet({ onClose, onSettled, open }: { onClose: () => void; onSettled: () => void; open: boolean }) {
  const [selected, setSelected] = useState(0);
  const [note, setNote] = useState("");
  const [dragOffset, setDragOffset] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimersRef = useRef<number[]>([]);
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
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    setDragOffset(0);
    return () => {
      body.style.overflow = prevOverflow;
      body.style.overscrollBehavior = prevOverscroll;
    };
  }, [open]);

  useEffect(() => () => toastTimersRef.current.forEach(window.clearTimeout), []);

  const handleSend = () => {
    toastTimersRef.current.forEach(window.clearTimeout);
    toastTimersRef.current = [];
    setToast("Amount sent to Ren");
    setToastVisible(false);
    toastTimersRef.current.push(
      window.setTimeout(() => setToastVisible(true), 20),
      window.setTimeout(() => {
        setToastVisible(false);
        setNote("");
        onSettled();
        onClose();
      }, 1500),
      window.setTimeout(() => setToast(null), 1800),
    );
  };

  const endDrag = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    if (dragOffset > 80) onClose();
    setDragOffset(0);
  };

  return (
    <div className={`fixed inset-0 z-30 ${open ? "" : "pointer-events-none"}`}>
      <div className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ease-out ${open ? "opacity-100" : "opacity-0"}`} onClick={onClose} />
      {/* toast sits above the overlay but behind the white sheet */}
      <div className="absolute flex h-[88px] items-center justify-center left-0 pointer-events-none right-0 top-0" data-name="notification band">
        <div className={`transition-all duration-300 ease-out ${toastVisible ? "opacity-100 translate-y-0" : "-translate-y-[12px] opacity-0"}`}>
          {toast ? <Notification message={toast} /> : null}
        </div>
      </div>
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
              Settle your shares
            </p>
            <Content note={note} onNoteChange={setNote} onSelect={setSelected} selected={selected} />
          </div>
        </div>
        <BottomBar onSend={handleSend} />
      </div>
    </div>
  );
}

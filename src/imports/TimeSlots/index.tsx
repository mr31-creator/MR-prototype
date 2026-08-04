function Slot() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex items-center justify-center px-[12px] py-[10px] relative rounded-[10px] shrink-0" data-name="Slot">
      <p className="[word-break:break-word] font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#333] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        6:00 PM
      </p>
    </div>
  );
}

function Slot1() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex items-center justify-center px-[12px] py-[10px] relative rounded-[10px] shrink-0" data-name="Slot">
      <p className="[word-break:break-word] font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#333] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        7:00 PM
      </p>
    </div>
  );
}

function Slot2() {
  return (
    <div className="bg-white border-[#222] border-[1.5px] border-solid content-stretch flex items-center justify-center px-[12px] py-[10px] relative rounded-[10px] shrink-0" data-name="Slot">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        8:00 PM
      </p>
    </div>
  );
}

function Slot3() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex items-center justify-center px-[12px] py-[10px] relative rounded-[10px] shrink-0" data-name="Slot">
      <p className="[word-break:break-word] font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#333] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        9:00 PM
      </p>
    </div>
  );
}

function Slot4() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex items-center justify-center px-[12px] py-[10px] relative rounded-[10px] shrink-0" data-name="Slot">
      <p className="[word-break:break-word] font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#333] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        10:00 PM
      </p>
    </div>
  );
}

function Slot5() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex items-center justify-center px-[12px] py-[10px] relative rounded-[10px] shrink-0" data-name="Slot">
      <p className="[word-break:break-word] font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#333] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        11:00 PM
      </p>
    </div>
  );
}

function Slot6() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex items-center justify-center px-[12px] py-[10px] relative rounded-[10px] shrink-0" data-name="Slot">
      <p className="[word-break:break-word] font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#333] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        12:00 PM
      </p>
    </div>
  );
}

function Slot7() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex items-center justify-center px-[12px] py-[10px] relative rounded-[10px] shrink-0" data-name="Slot">
      <p className="[word-break:break-word] font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#333] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        1:00 AM
      </p>
    </div>
  );
}

export default function TimeSlots() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative size-full" data-name="Time slots">
      <Slot />
      <Slot1 />
      <Slot2 />
      <Slot3 />
      <Slot4 />
      <Slot5 />
      <Slot6 />
      <Slot7 />
    </div>
  );
}
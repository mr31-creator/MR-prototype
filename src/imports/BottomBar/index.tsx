function Button() {
  return (
    <div className="bg-[#222] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[16033390px] shrink-0 w-full" data-name="Button">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[15.291px] relative shrink-0 text-[16px] text-center text-white tracking-[-0.0956px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add expense
      </p>
    </div>
  );
}

export default function BottomBar() {
  return (
    <div className="bg-white border-[#e1dfe0] border-solid border-t content-stretch flex flex-col items-start pb-[16px] pt-[12px] px-[25px] relative size-full" data-name="Bottom bar">
      <Button />
    </div>
  );
}
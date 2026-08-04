function Header() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="header">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#222] text-[16px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Total spending
      </p>
      <p className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['Nunito_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#333] text-[14px] text-center underline" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        See all
      </p>
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

function Button() {
  return (
    <div className="bg-[#222] content-stretch flex gap-[6px] items-center justify-center opacity-0 px-[16px] py-[8px] relative rounded-[22px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Add />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add expense
      </p>
    </div>
  );
}

function AmountRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="amount row">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €1723
      </p>
      <Button />
    </div>
  );
}

function TotalSpending() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Total spending">
      <Header />
      <AmountRow />
    </div>
  );
}

function Badge() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Badge">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <circle cx="10" cy="10" fill="#222222" id="Ellipse 57" r="10" />
        </svg>
      </div>
      <p className="[word-break:break-word] col-1 font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[12.287px] ml-[7px] mt-[4px] relative row-1 text-[#f2f2f2] text-[8.571px] w-[5px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        0
      </p>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Header">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Balances to settle
      </p>
      <Badge />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>{`Everything is squared up! `}</p>
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="description">
      <Frame />
    </div>
  );
}

function BalanceRow() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="balance row">
      <Description />
    </div>
  );
}

function BalancesToSettle() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Balances to settle">
      <Header1 />
      <BalanceRow />
    </div>
  );
}

export default function ExpensesCard() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[24px] size-full" data-name="expenses card">
      <TotalSpending />
      <div className="h-0 relative shrink-0 w-full" data-name="divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 318 1" width="318">
            <path d="M0 0.5H318" id="divider" stroke="#E1DFE0" />
          </svg>
        </div>
      </div>
      <BalancesToSettle />
    </div>
  );
}
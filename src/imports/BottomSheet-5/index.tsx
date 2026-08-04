import svgPaths from "./svg-7pm64wu7si";
import imgAvatar from "./d5882efb94700267aa2e7709e822558cae4296e7.png";
import imgImage from "./5cec10a05d89cb6b3fb8ab40fe94ba98a9b40bc9.png";
import imgImage1 from "./74790532b1c95439c772a1deca6e8ed8d5126253.png";
import imgRectangle from "./f8e2718f0c4a86c69bc48e057ebf07b1e4f149d4.png";

function GrabberSection() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center left-0 px-[84px] py-[4px] top-0 w-[402px]" data-name="grabber section">
      <div className="bg-[#c4c4c4] h-[4px] relative rounded-[14px] shrink-0 w-[47.235px]" data-name="grabber" />
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 w-[126px]">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#222] text-[16px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Ren Dincleberg
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium not-italic relative shrink-0 text-[#808080] text-[14px] w-full">@renddicleberg</p>
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
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold gap-[4px] items-center leading-[normal] relative shrink-0 text-[#222]">
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
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        EUR
      </p>
      <ArrowDown />
    </div>
  );
}

function AmountSection() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-[354px]" data-name="amount section">
      <Frame1 />
      <Dropdown />
    </div>
  );
}

function Text() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 text-[14px] w-[114px]" data-name="text">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold relative shrink-0 text-black w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        MPS Quickcard
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#808080] w-full">Debit •••••9682</p>
    </div>
  );
}

function PaymentInfo() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="payment info">
      <div className="relative shrink-0 size-[32px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <Text />
    </div>
  );
}

function RadioButton() {
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

function Card() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="card">
      <div aria-hidden className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative size-full">
          <PaymentInfo />
          <RadioButton />
        </div>
      </div>
    </div>
  );
}

function PaymentInfo1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="payment info">
      <div className="h-[34px] relative shrink-0 w-[32px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[131.31%] left-[-55.43%] max-w-none top-0 w-[211.96%]" src={imgImage1} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Satispay
      </p>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="card">
      <div aria-hidden className="absolute border border-[#e1dfe0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative size-full">
          <PaymentInfo1 />
          <div className="relative shrink-0 size-[24px]" data-name="radio button">
            <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
              <circle cx="12" cy="12" id="radio button" r="11.4" stroke="#888888" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentInfo2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="payment info">
      <div className="h-[33px] relative shrink-0 w-[32px]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[106.67%] left-[-10.34%] max-w-none top-[-6.67%] w-[110.34%]" src={imgRectangle} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Paypal
      </p>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="card">
      <div aria-hidden className="absolute border border-[#e1dfe0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative size-full">
          <PaymentInfo2 />
          <div className="relative shrink-0 size-[24px]" data-name="radio button">
            <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
              <circle cx="12" cy="12" id="radio button" r="11.4" stroke="#888888" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardStack() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="card stack">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function PaymentMethodSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[354px]" data-name="payment method section">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[16px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Payment method
      </p>
      <CardStack />
    </div>
  );
}

function TextField() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center p-[16px] relative rounded-[32px] shrink-0 w-[352px]" data-name="text field">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap">Add a note</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[354px]" data-name="content">
      <User />
      <AmountSection />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 354 1" width="354">
            <path d="M0 0.5H354" id="Divider" stroke="#E1DFE0" />
          </svg>
        </div>
      </div>
      <PaymentMethodSection />
      <TextField />
    </div>
  );
}

export default function BottomSheet() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[28px] items-center overflow-clip pb-[16px] pt-[48px] px-[25px] relative rounded-tl-[24px] rounded-tr-[24px] size-full" data-name="Bottom sheet">
      <GrabberSection />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[15.291px] min-w-full relative shrink-0 text-[#222] text-[20px] text-center tracking-[-0.0956px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Settle your shares
      </p>
      <Content />
    </div>
  );
}
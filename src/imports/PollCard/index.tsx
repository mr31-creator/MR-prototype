import svgPaths from "./svg-btxolq5mfn";
import imgImage from "./749863670c41f2a7f38aa36fecfa78fa25e721ac.png";
import imgAvatar from "./3ce769e6c44ae270560c933341cd8ac5b307032e.png";
import imgAvatar1 from "./d5882efb94700267aa2e7709e822558cae4296e7.png";
import imgAvatar2 from "./4e0a6889650015711af2e87503fb5e63994b55bd.png";
import imgAvatar3 from "./66da7c6cfccc216e303c93efefb889a8c7d98553.png";
import imgAvatar4 from "./4df2391a52084f34091d2bd873ee9e00f23e4403.png";
import imgAvatar5 from "./4d9cb718b54351e9495877aaff97c6dd9bd51c1b.png";
import imgAvatar6 from "./0bc33b996aff842436388818b088550fb34b3bf2.png";

function Clock() {
  return (
    <div className="relative shrink-0 size-[11.815px]" data-name="clock-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.8154" preserveAspectRatio="none" viewBox="0 0 11.8154 11.8154" width="11.8154">
        <g id="clock-01">
          <path d={svgPaths.p2af27000} fill="#D32D1D" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#fff4f3] content-stretch flex gap-[3.938px] items-center pl-[3.938px] pr-[7.877px] py-[1.969px] relative rounded-[36.431px] shrink-0" data-name="badge">
      <Clock />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16.937px] relative shrink-0 text-[#d32d1d] text-[11.815px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        58 m left
      </p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Where are we eating tonight?
      </p>
      <Badge />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[1.969px] items-start relative shrink-0 w-full" data-name="header">
      <Title />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16.937px] relative shrink-0 text-[#808080] text-[11.815px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Vote one option before poll closes
      </p>
    </div>
  );
}

function TextualInfo() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[110px]" data-name="Textual info">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Taberna do Cais
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#6b6b6b] text-[12px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Traditional - $$- 4.8
      </p>
    </div>
  );
}

function OptionInfo() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Option info">
      <div className="relative rounded-[6px] shrink-0 size-[40px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6px]">
          <img alt="" className="absolute h-[133.29%] left-[0.04%] max-w-none top-[-22.45%] w-full" src={imgImage} />
        </div>
      </div>
      <TextualInfo />
    </div>
  );
}

function AvatarStack() {
  return (
    <div className="content-stretch flex items-center pointer-events-none relative shrink-0" data-name="avatar stack">
      <div className="mr-[-16px] relative rounded-[45.029px] shrink-0 size-[28px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[45.029px]">
          <img alt="" className="absolute h-[345.58%] left-[-34.38%] max-w-none top-[-112.89%] w-[159.41%]" src={imgAvatar} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[45.029px]" />
      </div>
      <div className="mr-[-16px] relative rounded-[29.677px] shrink-0 size-[28px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[29.677px]">
          <img alt="" className="absolute h-[371.43%] left-[-454.05%] max-w-none top-[-135.47%] w-[663.06%]" src={imgAvatar1} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[29.677px]" />
      </div>
      <div className="relative rounded-[45.029px] shrink-0 size-[28px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[45.029px]">
          <img alt="" className="absolute h-[338.92%] left-[-55.21%] max-w-none top-[-62.79%] w-[224.29%]" src={imgAvatar2} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[45.029px]" />
      </div>
    </div>
  );
}

function VoteStack() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="vote stack">
      <AvatarStack />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        3
      </p>
    </div>
  );
}

function OptionCard() {
  return (
    <div className="border border-[#e1dfe0] border-solid content-stretch flex items-center justify-between overflow-clip pl-[6px] pr-[12px] py-[6px] relative rounded-[12px] shrink-0 w-full" data-name="option card">
      <div className="absolute bg-[#f0f2ff] h-[55px] left-[-1px] top-[-1px] w-[126px]" data-name="Vote fill" />
      <OptionInfo />
      <VoteStack />
    </div>
  );
}

function TextualInfo1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Textual info">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#222] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Miradouro 28
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        River view - $$$- 3.4
      </p>
    </div>
  );
}

function OptionInfo1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Option info">
      <div className="relative rounded-[6px] shrink-0 size-[40px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6px]">
          <img alt="" className="absolute h-[133.29%] left-[0.04%] max-w-none top-[-22.45%] w-full" src={imgImage} />
        </div>
      </div>
      <TextualInfo1 />
    </div>
  );
}

function AvatarStack1() {
  return (
    <div className="content-stretch flex items-center pointer-events-none relative shrink-0" data-name="avatar stack">
      <div className="mr-[-16px] relative rounded-[45.029px] shrink-0 size-[28px]" data-name="avatar">
        <div aria-hidden className="absolute inset-0 rounded-[45.029px]">
          <div className="absolute inset-0 overflow-hidden rounded-[45.029px]">
            <img alt="" className="absolute h-[345.58%] left-[-34.38%] max-w-none top-[-112.89%] w-[159.41%]" src={imgAvatar} />
          </div>
          <img alt="" className="absolute max-w-none object-cover rounded-[45.029px] size-full" src={imgAvatar3} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[45.029px]" />
      </div>
      <div className="mr-[-16px] relative rounded-[29.677px] shrink-0 size-[28px]" data-name="avatar">
        <div aria-hidden className="absolute inset-0 rounded-[29.677px]">
          <div className="absolute inset-0 overflow-hidden rounded-[29.677px]">
            <img alt="" className="absolute h-[371.43%] left-[-454.05%] max-w-none top-[-135.47%] w-[663.06%]" src={imgAvatar1} />
          </div>
          <div className="absolute inset-0 overflow-hidden rounded-[29.677px]">
            <img alt="" className="absolute h-[380.2%] left-[-293.16%] max-w-none top-[-141.19%] w-[687.85%]" src={imgAvatar4} />
          </div>
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[29.677px]" />
      </div>
      <div className="relative rounded-[45.029px] shrink-0 size-[28px]" data-name="avatar">
        <div aria-hidden className="absolute inset-0 rounded-[45.029px]">
          <div className="absolute inset-0 overflow-hidden rounded-[45.029px]">
            <img alt="" className="absolute h-[338.92%] left-[-55.21%] max-w-none top-[-62.79%] w-[224.29%]" src={imgAvatar2} />
          </div>
          <div className="absolute inset-0 overflow-hidden rounded-[45.029px]">
            <img alt="" className="absolute h-[278.91%] left-[-62.81%] max-w-none top-[-69.96%] w-[209.18%]" src={imgAvatar5} />
          </div>
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[45.029px]" />
      </div>
    </div>
  );
}

function VoteStack1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="vote stack">
      <AvatarStack1 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        3
      </p>
    </div>
  );
}

function OptionCard1() {
  return (
    <div className="border border-[#e1dfe0] border-solid content-stretch flex items-center justify-between overflow-clip pl-[6px] pr-[12px] py-[6px] relative rounded-[12px] shrink-0 w-[319px]" data-name="option card">
      <div className="absolute bg-[#eaf9f1] h-[55px] left-[-1px] top-[-1px] w-[126px]" data-name="Vote fill" />
      <OptionInfo1 />
      <VoteStack1 />
    </div>
  );
}

function TextualInfo2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Textual info">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#222] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Cais Vinte
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Romantic - $$- 4.4
      </p>
    </div>
  );
}

function OptionInfo2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Option info">
      <div className="relative rounded-[6px] shrink-0 size-[40px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6px]">
          <img alt="" className="absolute h-[133.29%] left-[0.04%] max-w-none top-[-22.45%] w-full" src={imgImage} />
        </div>
      </div>
      <TextualInfo2 />
    </div>
  );
}

function AvatarStack2() {
  return (
    <div className="content-stretch flex items-center pointer-events-none relative shrink-0" data-name="avatar stack">
      <div className="mr-[-16px] opacity-0 relative rounded-[45.029px] shrink-0 size-[28px]" data-name="avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[45.029px] size-full" src={imgAvatar3} />
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[45.029px]" />
      </div>
      <div className="mr-[-16px] opacity-0 relative rounded-[29.677px] shrink-0 size-[28px]" data-name="avatar">
        <div aria-hidden className="absolute inset-0 rounded-[29.677px]">
          <div className="absolute inset-0 overflow-hidden rounded-[29.677px]">
            <img alt="" className="absolute h-[371.43%] left-[-454.05%] max-w-none top-[-135.47%] w-[663.06%]" src={imgAvatar1} />
          </div>
          <div className="absolute inset-0 overflow-hidden rounded-[29.677px]">
            <img alt="" className="absolute h-[380.2%] left-[-293.16%] max-w-none top-[-141.19%] w-[687.85%]" src={imgAvatar4} />
          </div>
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[29.677px]" />
      </div>
      <div className="relative rounded-[45.029px] shrink-0 size-[28px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[45.029px]">
          <img alt="" className="absolute h-[648.04%] left-[-141.18%] max-w-none top-[-484.8%] w-[331.37%]" src={imgAvatar6} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[45.029px]" />
      </div>
    </div>
  );
}

function VoteStack2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="vote stack">
      <AvatarStack2 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        1
      </p>
    </div>
  );
}

function OptionCard2() {
  return (
    <div className="border border-[#e1dfe0] border-solid content-stretch flex items-center justify-between overflow-clip pl-[6px] pr-[12px] py-[6px] relative rounded-[12px] shrink-0 w-[319px]" data-name="option card">
      <div className="absolute bg-[#fff6e9] h-[55px] left-[-1px] top-[-1px] w-[81px]" data-name="Vote fill" />
      <OptionInfo2 />
      <VoteStack2 />
    </div>
  );
}

function OptionCardStack() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="option card stack">
      <OptionCard />
      <OptionCard1 />
      <OptionCard2 />
    </div>
  );
}

export default function PollCard() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[24px] size-full" data-name="poll card">
      <Header />
      <OptionCardStack />
    </div>
  );
}
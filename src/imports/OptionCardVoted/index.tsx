import imgImage from "./749863670c41f2a7f38aa36fecfa78fa25e721ac.png";
import imgAvatar from "./3ce769e6c44ae270560c933341cd8ac5b307032e.png";
import imgAvatar1 from "./d5882efb94700267aa2e7709e822558cae4296e7.png";
import imgAvatar2 from "./4e0a6889650015711af2e87503fb5e63994b55bd.png";

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
        4
      </p>
    </div>
  );
}

export default function OptionCardVoted() {
  return (
    <div className="border border-[#222] border-solid content-stretch flex items-center justify-between overflow-clip pl-[6px] pr-[12px] py-[6px] relative rounded-[12px] size-full" data-name="option card voted">
      <div className="absolute bg-[#f0f2ff] h-[55px] left-[-1px] top-[-1px] w-[180px]" data-name="Vote fill" />
      <OptionInfo />
      <VoteStack />
    </div>
  );
}
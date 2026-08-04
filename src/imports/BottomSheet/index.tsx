import svgPaths from "./svg-mqbtoxeczh";
import imgAvatar from "./d5882efb94700267aa2e7709e822558cae4296e7.png";
import imgAvatar1 from "./df860df108048873fe4cf693f309e7fca34654e8.png";
import imgAvatar2 from "./b471eb65a292de0de84ab580f855a08469131183.png";
import imgAvatar3 from "./0b59540d2332f21872146e1aec0184e4c0ca6c07.png";
import imgAvatar4 from "./a05a4007e69193d513315408b0c75a2654464b84.png";
import imgAvatar5 from "./0bc33b996aff842436388818b088550fb34b3bf2.png";
import imgAvatar6 from "./b9269cc62bfa5dbce0ce9521c0f6b616003f4197.png";
import imgAvatar7 from "./3ce769e6c44ae270560c933341cd8ac5b307032e.png";
import imgAvatar8 from "./9c3f63d7ea76144e01d18508d38c32f54fea8c7d.png";
import imgAvatar9 from "./18563e82ad2a4724320b0a57e2ceea1ad699cfa0.png";
import imgAvatar10 from "./4df2391a52084f34091d2bd873ee9e00f23e4403.png";
import imgAvatar11 from "./66da7c6cfccc216e303c93efefb889a8c7d98553.png";
import imgAvatar12 from "./0fb80e016af1472955b29851eb091384d175a633.png";
import imgAvatar13 from "./af4b4a082827c63bcf6e9787f8d2b8c8f4830edd.png";

function GrabberSection() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center left-0 px-[84px] py-[4px] top-0 w-[402px]" data-name="grabber section">
      <div className="bg-[#c4c4c4] h-[4px] relative rounded-[14px] shrink-0 w-[47.235px]" data-name="grabber" />
    </div>
  );
}

function TextField() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center p-[16px] relative rounded-[32px] shrink-0 w-full" data-name="Text field">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Name, number or @username
      </p>
    </div>
  );
}

function NameStack() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Name stack">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#222] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Ren dincleberg
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#999997] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        @Rendincleberg · Milan
      </p>
    </div>
  );
}

function UserInfo() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User info">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" data-name="Avatar">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32.375px]">
          <img alt="" className="absolute h-[371.43%] left-[-454.05%] max-w-none top-[-135.47%] w-[663.06%]" src={imgAvatar} />
        </div>
      </div>
      <NameStack />
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="plus">
          <path d={svgPaths.pa750880} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#222] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[22px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Plus />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add
      </p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="row">
      <UserInfo />
      <Button />
    </div>
  );
}

function NameStack1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Name stack">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#222] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Lola Ferreira
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#999997] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        @lolaferreira · Lisbon
      </p>
    </div>
  );
}

function UserInfo1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User info">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" data-name="Avatar">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32.375px]">
          <img alt="" className="absolute h-[338.27%] left-[-59.18%] max-w-none top-[-138.76%] w-[222.45%]" src={imgAvatar1} />
        </div>
      </div>
      <NameStack1 />
    </div>
  );
}

function Plus1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="plus">
          <path d={svgPaths.pa750880} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#222] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[22px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Plus1 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add
      </p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="row">
      <UserInfo1 />
      <Button1 />
    </div>
  );
}

function NameStack2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Name stack">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#222] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Tomás Oliveira
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#999997] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        @tomasoliveira · Porto
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" style={{ backgroundImage: "linear-gradient(149.0362471676121deg, rgb(102, 163, 255) 8.3333%, rgb(61, 77, 153) 85.069%)" }} data-name="Avatar" />
      <NameStack2 />
    </div>
  );
}

function Plus2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="plus">
          <path d={svgPaths.pa750880} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#222] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[22px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Plus2 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add
      </p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="row">
      <Frame />
      <Button2 />
    </div>
  );
}

function NameStack3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start relative shrink-0 whitespace-nowrap" data-name="Name stack">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Marco Bianchi
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#999997] text-[12px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        @Mbianc · Turin
      </p>
    </div>
  );
}

function UserInfo2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User info">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" data-name="Avatar">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32.375px]">
          <img alt="" className="absolute h-[549.15%] left-[-22.03%] max-w-none top-[-218.64%] w-[274.58%]" src={imgAvatar2} />
        </div>
      </div>
      <NameStack3 />
    </div>
  );
}

function Plus3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="plus">
          <path d={svgPaths.pa750880} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#222] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[22px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Plus3 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add
      </p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="row">
      <UserInfo2 />
      <Button3 />
    </div>
  );
}

function NameStack4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Name stack">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#222] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Laura Sensi
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#999997] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        @Lsen · Milan
      </p>
    </div>
  );
}

function UserInfo3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User info">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" data-name="Avatar">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32.375px]">
          <img alt="" className="absolute h-[429.14%] left-[-39.74%] max-w-none top-[-201.04%] w-[322.08%]" src={imgAvatar3} />
        </div>
      </div>
      <NameStack4 />
    </div>
  );
}

function Plus4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="plus">
          <path d={svgPaths.pa750880} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#222] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[22px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Plus4 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add
      </p>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="row">
      <UserInfo3 />
      <Button4 />
    </div>
  );
}

function UserRowStack() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="User row stack">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
    </div>
  );
}

function FrequentlyAddedSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frequently added section">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[16px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Frequently added
      </p>
      <UserRowStack />
    </div>
  );
}

function NameStak() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start relative shrink-0 whitespace-nowrap" data-name="Name stak">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Daniel Jewebel
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#999997] text-[12px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        @DJdaniel · Paris
      </p>
    </div>
  );
}

function UserInfo4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User info">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" data-name="Avatar">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[32.375px]">
          <div className="absolute bg-[#5583be] inset-0 rounded-[32.375px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[32.375px]">
            <img alt="" className="absolute left-[-17.39%] max-w-none size-[252.17%] top-[-17.39%]" src={imgAvatar4} />
          </div>
          <div className="absolute inset-0 overflow-hidden rounded-[32.375px]">
            <img alt="" className="absolute h-[648.04%] left-[-141.18%] max-w-none top-[-484.8%] w-[331.37%]" src={imgAvatar5} />
          </div>
        </div>
      </div>
      <NameStak />
    </div>
  );
}

function Plus5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="plus">
          <path d={svgPaths.pa750880} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#222] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[22px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Plus5 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add
      </p>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row">
      <UserInfo4 />
      <Button5 />
    </div>
  );
}

function NameStak1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start relative shrink-0 whitespace-nowrap" data-name="Name stak">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Martin Julian
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#999997] text-[12px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        @Mjulis · Milan
      </p>
    </div>
  );
}

function UserInfo5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User info">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" data-name="Avatar">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[32.375px]">
          <div className="absolute bg-[#5583be] inset-0 rounded-[32.375px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[32.375px]">
            <img alt="" className="absolute left-[-17.39%] max-w-none size-[252.17%] top-[-17.39%]" src={imgAvatar4} />
          </div>
        </div>
      </div>
      <NameStak1 />
    </div>
  );
}

function Plus6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="plus">
          <path d={svgPaths.pa750880} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#222] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[22px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Plus6 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add
      </p>
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row">
      <UserInfo5 />
      <Button6 />
    </div>
  );
}

function NameStack5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start relative shrink-0 whitespace-nowrap" data-name="Name stack">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Sofia Marchetti
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#999997] text-[12px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        @sofya · Rome
      </p>
    </div>
  );
}

function UserInfo6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User info">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" style={{ backgroundImage: "linear-gradient(149.0362471676121deg, rgb(255, 169, 102) 8.3333%, rgb(175, 86, 22) 85.069%)" }} data-name="Avatar" />
      <NameStack5 />
    </div>
  );
}

function Plus7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="plus">
          <path d={svgPaths.pa750880} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#222] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[22px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Plus7 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add
      </p>
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row">
      <UserInfo6 />
      <Button7 />
    </div>
  );
}

function NameStack6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Name stack">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#222] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Alina Kowalski
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#999997] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        @alinakow · Kraków
      </p>
    </div>
  );
}

function UserInfo7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User info">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" data-name="Avatar">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32.375px]">
          <img alt="" className="absolute h-[615.38%] left-[-34.62%] max-w-none top-[-223.08%] w-[307.69%]" src={imgAvatar6} />
        </div>
      </div>
      <NameStack6 />
    </div>
  );
}

function Plus8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="plus">
          <path d={svgPaths.pa750880} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#222] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[22px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Plus8 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add
      </p>
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row">
      <UserInfo7 />
      <Button8 />
    </div>
  );
}

function NameStack7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Name stack">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#222] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Giulia Conti
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#999997] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        @giuliaconti · Rome
      </p>
    </div>
  );
}

function UserInfo8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User info">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" data-name="Avatar">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32.375px]">
          <img alt="" className="absolute h-[345.58%] left-[-34.38%] max-w-none top-[-112.89%] w-[159.41%]" src={imgAvatar7} />
        </div>
      </div>
      <NameStack7 />
    </div>
  );
}

function Plus9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="plus">
          <path d={svgPaths.pa750880} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#222] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[22px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Plus9 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add
      </p>
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row">
      <UserInfo8 />
      <Button9 />
    </div>
  );
}

function NameStak2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start relative shrink-0 whitespace-nowrap" data-name="Name stak">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Sara Gobbil
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#999997] text-[12px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        @Sraen · Madrid
      </p>
    </div>
  );
}

function UserInfo9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User info">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" data-name="Avatar">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[32.375px]">
          <div className="absolute bg-[#f3d3f2] inset-0 rounded-[32.375px]" />
          <img alt="" className="absolute max-w-none object-bottom rounded-[32.375px] size-full" src={imgAvatar8} />
        </div>
      </div>
      <NameStak2 />
    </div>
  );
}

function Plus10() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="plus">
          <path d={svgPaths.pa750880} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#222] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[22px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Plus10 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add
      </p>
    </div>
  );
}

function Row10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row">
      <UserInfo9 />
      <Button10 />
    </div>
  );
}

function NameStak3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start relative shrink-0 whitespace-nowrap" data-name="Name stak">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Loren Blasco
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#999997] text-[12px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        @Lorys · NewYork
      </p>
    </div>
  );
}

function UserInfo10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User info">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32.375px] size-full" src={imgAvatar9} />
      </div>
      <NameStak3 />
    </div>
  );
}

function Plus11() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="plus">
          <path d={svgPaths.pa750880} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#222] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[22px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Plus11 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add
      </p>
    </div>
  );
}

function Row11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row">
      <UserInfo10 />
      <Button11 />
    </div>
  );
}

function NameStack8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Name stack">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#222] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Yara Haddad
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#999997] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        @yarahaddad · Marseille
      </p>
    </div>
  );
}

function UserInfo11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User info">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" style={{ backgroundImage: "linear-gradient(149.0362471676121deg, rgb(184, 102, 255) 8.3333%, rgb(110, 61, 153) 85.069%)" }} data-name="Avatar" />
      <NameStack8 />
    </div>
  );
}

function Plus12() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="plus">
          <path d={svgPaths.pa750880} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#222] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[22px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Plus12 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add
      </p>
    </div>
  );
}

function Row12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row">
      <UserInfo11 />
      <Button12 />
    </div>
  );
}

function NameStak4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start relative shrink-0 whitespace-nowrap" data-name="Name stak">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Marian Dabal
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#999997] text-[12px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        @Mariada · Bruxelles
      </p>
    </div>
  );
}

function UserInfo12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User info">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" data-name="Avatar">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32.375px]">
          <img alt="" className="absolute h-[394.29%] left-[-203.91%] max-w-none top-[-149.29%] w-[687.85%]" src={imgAvatar10} />
        </div>
      </div>
      <NameStak4 />
    </div>
  );
}

function Plus13() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="plus">
          <path d={svgPaths.pa750880} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#222] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[22px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Plus13 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add
      </p>
    </div>
  );
}

function Row13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row">
      <UserInfo12 />
      <Button13 />
    </div>
  );
}

function NameStak5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start relative shrink-0 whitespace-nowrap" data-name="Name stak">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Lorenza Jabel
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#999997] text-[12px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        @Lorinj · Marrakech
      </p>
    </div>
  );
}

function UserInfo13() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User info">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32.375px] size-full" src={imgAvatar11} />
      </div>
      <NameStak5 />
    </div>
  );
}

function Plus14() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="plus">
          <path d={svgPaths.pa750880} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#222] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[22px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Plus14 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add
      </p>
    </div>
  );
}

function Row14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row">
      <UserInfo13 />
      <Button14 />
    </div>
  );
}

function NameStak6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start relative shrink-0 whitespace-nowrap" data-name="Name stak">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Anna Lorenzon
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#999997] text-[12px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        @Annalo · Verona
      </p>
    </div>
  );
}

function UserInfo14() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User info">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32.375px] size-full" src={imgAvatar12} />
      </div>
      <NameStak6 />
    </div>
  );
}

function Plus15() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="plus">
          <path d={svgPaths.pa750880} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#222] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[22px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Plus15 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add
      </p>
    </div>
  );
}

function Row15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row">
      <UserInfo14 />
      <Button15 />
    </div>
  );
}

function NameStak7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start relative shrink-0 whitespace-nowrap" data-name="Name stak">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Maria Benedettis
      </p>
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#999997] text-[12px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        @Benedim · Rome
      </p>
    </div>
  );
}

function UserInfo15() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User info">
      <div className="relative rounded-[32.375px] shrink-0 size-[36px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32.375px] size-full" src={imgAvatar13} />
      </div>
      <NameStak7 />
    </div>
  );
}

function Plus16() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="plus">
          <path d={svgPaths.pa750880} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#222] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[22px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Plus16 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add
      </p>
    </div>
  );
}

function Row16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row">
      <UserInfo15 />
      <Button16 />
    </div>
  );
}

function UserRowStack1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="User row stack">
      <Row5 />
      <Row6 />
      <Row7 />
      <Row8 />
      <Row9 />
      <Row10 />
      <Row11 />
      <Row12 />
      <Row13 />
      <Row14 />
      <Row15 />
      <Row16 />
    </div>
  );
}

function ContactsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Contacts section">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[16px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        From your contacts
      </p>
      <UserRowStack1 />
    </div>
  );
}

function PeopleList() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="People list">
      <FrequentlyAddedSection />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 352 1" width="352">
            <path d="M0 0.5H352" id="Divider" stroke="#E1DFE0" />
          </svg>
        </div>
      </div>
      <ContactsSection />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
      <TextField />
      <PeopleList />
    </div>
  );
}

export default function BottomSheet() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[28px] items-center overflow-clip pb-[24px] pt-[48px] px-[25px] relative rounded-tl-[24px] rounded-tr-[24px] size-full" data-name="Bottom sheet">
      <GrabberSection />
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[15.291px] min-w-full relative shrink-0 text-[#222] text-[20px] text-center tracking-[-0.0956px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add a participant
      </p>
      <Content />
    </div>
  );
}
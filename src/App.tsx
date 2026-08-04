import type React from "react";
import { useState } from "react";
import useDragScroll from "@/useDragScroll";
import HomeDefaultIcon from "@/imports/HomeDefault";
import HomeSelectedIcon from "@/imports/HomeSelected";
import SearchDefaultIcon from "@/imports/SearchDefault";
import SearchSelectedIcon from "@/imports/SearchSelected";
import TicketDefaultIcon from "@/imports/TicketDefault";
import TicketSelectedIcon from "@/imports/TicketSelected";
import AvatarDefaultIcon from "@/imports/AvatarSelected";
import AvatarSelectedIcon from "@/imports/AvatarSelected-1";
import TripPage from "@/TripPage";
import offMapSvgPaths from "@/imports/IPhone1710/svg-gak685p2v6";
import imgPlane from "@/imports/IPhone1710/4a979468e75c08c9d0a587a27e256c27b5216c30.png";
import svgPaths from "@/imports/Home/svg-jcsj3dmtzb";
import imgIcon from "@/imports/Home/8247cdb87f9a2401b81703ea6ff81cef4e22b9d9.png";
import imgCard from "@/imports/Home/35da5bab35340137f0fb609e0257711c4247bfa5.png";
import imgAvatar from "@/imports/Home/4df2391a52084f34091d2bd873ee9e00f23e4403.png";
import imgAvatar1 from "@/imports/Home/4d9cb718b54351e9495877aaff97c6dd9bd51c1b.png";
import imgAvatar2 from "@/imports/Home/d5882efb94700267aa2e7709e822558cae4296e7.png";
import imgCard1 from "@/imports/Home/931ad399ac44da9f77318ee639c2bb0098c8a7dd.png";
import imgAvatar3 from "@/imports/Home/df860df108048873fe4cf693f309e7fca34654e8.png";
import imgAvatar4 from "@/imports/Home/a05a4007e69193d513315408b0c75a2654464b84.png";
import imgCard2 from "@/imports/Home/60bbfea34cd34d47cc54d53eebd2617dc4c09c87.png";
import imgAvatar5 from "@/imports/Home/0bc33b996aff842436388818b088550fb34b3bf2.png";
import imgAvatar6 from "@/imports/Home/b9269cc62bfa5dbce0ce9521c0f6b616003f4197.png";
import upcomingSvgPaths from "@/imports/CardStack-1/svg-kwtdg1774v";
import imgUpCard0 from "@/imports/CardStack-1/931ad399ac44da9f77318ee639c2bb0098c8a7dd.png";
import imgUpCard1 from "@/imports/CardStack-1/60bbfea34cd34d47cc54d53eebd2617dc4c09c87.png";
import imgUpCard2 from "@/imports/CardStack-1/8fd5b5d9d0f1cfedc26fbec3c23500cdcfc20675.png";
import imgUpCard3 from "@/imports/CardStack-1/373e38f50063b4d514d241f367b92aab7280a7e8.png";
import imgUpAvatarA from "@/imports/CardStack-1/df860df108048873fe4cf693f309e7fca34654e8.png";
import imgUpAvatarB from "@/imports/CardStack-1/a05a4007e69193d513315408b0c75a2654464b84.png";
import imgUpAvatarC from "@/imports/CardStack-1/d5882efb94700267aa2e7709e822558cae4296e7.png";
import imgUpAvatarD from "@/imports/CardStack-1/4df2391a52084f34091d2bd873ee9e00f23e4403.png";
import imgUpAvatarE from "@/imports/CardStack-1/0bc33b996aff842436388818b088550fb34b3bf2.png";
import imgUpAvatarF from "@/imports/CardStack-1/b9269cc62bfa5dbce0ce9521c0f6b616003f4197.png";
import pastSvgPaths from "@/imports/CardStack/svg-xidd9fl7dj";
import imgPast0 from "@/imports/CardStack/7100e755c7f5d83cea2a2df41ec66a6d13ff84e0.png";
import imgPast1 from "@/imports/CardStack/513b7d69c56fd2f9680b8c0e029df110bf39c4c7.png";
import imgPast2 from "@/imports/CardStack/340a901df31cafd4669ae9cbc8e2b5153f4eefaa.png";
import imgPast3 from "@/imports/CardStack/891fbb00ec1b69b332652e4580e0822e89427e2c.png";
import imgPast4 from "@/imports/CardStack/39b354e87780639a750c373521ce10d65ff9dec9.png";
import imgPast5 from "@/imports/CardStack/f96a295e94fc606a93669b32746e9de717347637.png";
import imgPast6 from "@/imports/CardStack/06f822ce9879ee39e469c4585d990562c82afba1.png";

type Tab = "home" | "search" | "ticket" | "avatar";

const tabs: { id: Tab; label: string; left: string; Selected: () => React.ReactElement; Default: () => React.ReactElement }[] = [
  { id: "home", label: "Home", left: "left-[23px]", Selected: HomeSelectedIcon, Default: HomeDefaultIcon },
  { id: "search", label: "Search", left: "left-[71px]", Selected: SearchSelectedIcon, Default: SearchDefaultIcon },
  { id: "ticket", label: "Tickets", left: "left-[119px]", Selected: TicketSelectedIcon, Default: TicketDefaultIcon },
  { id: "avatar", label: "Profile", left: "left-[165px]", Selected: AvatarSelectedIcon, Default: AvatarDefaultIcon },
];

function FloatingTabBar({ active, onSelect }: { active: Tab; onSelect: (tab: Tab) => void }) {
  return (
    <div className="-translate-x-1/2 bg-[#fffdff] border border-[#e9e8eb] border-solid fixed h-[52px] left-1/2 bottom-[20px] rounded-[26.5px] w-[209px] z-10" data-name="Floating tab bar">
      {tabs.map(({ id, label, left, Selected, Default }) => (
        <button
          aria-current={active === id ? "page" : undefined}
          aria-label={label}
          className={`absolute ${left} size-[24px] top-[14px]`}
          key={id}
          onClick={() => onSelect(id)}
          type="button"
        >
          {active === id ? <Selected /> : <Default />}
        </button>
      ))}
    </div>
  );
}

function OffTheMap() {
  return (
    <div className="relative w-full" data-name="Off the map" style={{ minHeight: "100dvh" }}>
      <div className="-translate-x-1/2 absolute flex h-[160.909px] items-center justify-center left-1/2 top-[276px] w-[448.414px]">
        <div className="flex-none rotate-[-0.92deg]">
          <div className="h-[153.759px] relative w-[446px]">
            <div className="absolute inset-[-0.33%_0]">
              <svg className="block size-full" fill="none" height="154.759" preserveAspectRatio="none" viewBox="0 0 446.177 154.759" width="446.177">
                <path d={offMapSvgPaths.p1482e100} stroke="#CDCACB" strokeDasharray="11 11" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex items-center justify-center left-[calc(50%+1px)] size-[86.885px] top-[316px]">
        <div className="-scale-y-100 flex-none rotate-[-148.84deg]">
          <div className="relative size-[63.275px]" data-name="image 177">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlane} />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-1/2 top-1/2 w-[161px]">
        <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#333] text-[24px] text-center w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
          Off the map
        </p>
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
          <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
            Page not developed (yet)
          </p>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Title">
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#333] text-[24px] w-[101px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Hello Ari
      </p>
      <div className="relative shrink-0 size-[28px]" data-name="icon">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-12%] max-w-none size-[128%] top-[-12%]" src={imgIcon} />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[135px]" data-name="Greeting stack">
        <Title />
        <div className="content-stretch flex items-center relative shrink-0" data-name="Subtitle">
          <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
            Keep Exploring!
          </p>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.9)] border border-[#e1dfe0] border-solid content-stretch flex items-center p-[11.566px] relative rounded-[31.084px] shrink-0" data-name="button">
        <div className="relative shrink-0 size-[16.867px]" data-name="notification-02">
          <svg className="absolute block inset-0 size-full" fill="none" height="16.8675" preserveAspectRatio="none" viewBox="0 0 16.8675 16.8675" width="16.8675">
            <g id="notification-02">
              <path d={svgPaths.p181add40} id="Vector" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.05422" />
              <path d="M14.4076 12.6506H2.45984" id="Vector_2" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.05422" />
              <path d={svgPaths.p340dec00} id="Vector_3" stroke="#222222" strokeLinejoin="round" strokeWidth="1.05422" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function CurrentAdventureCard({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="content-stretch cursor-pointer flex flex-col gap-[179px] items-start p-[16px] relative rounded-[24px] shrink-0 w-full text-left" data-name="card" onClick={onOpen} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(); } }} role="button" tabIndex={0}>
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[24px]">
        <img alt="" className="absolute max-w-none object-bottom rounded-[24px] size-full" src={imgCard} />
        <div className="absolute bg-gradient-to-b from-[rgba(102,102,102,0.04)] inset-0 rounded-[24px] to-[79.252%] to-[rgba(0,0,0,0.2)]" />
      </div>
      {/* top row */}
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="top row">
        <div className="bg-white content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
          <div className="relative shrink-0 size-[12px]" data-name="clock-01">
            <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
              <g id="clock-01">
                <path d={svgPaths.p7313400} fill="#222222" id="Subtract" />
              </g>
            </svg>
          </div>
          <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#222] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
            1 poll pending
          </p>
        </div>
        {/* avatar stack */}
        <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-[65.143px]" data-name="avatar stack">
          <div className="h-full mr-[-10.286px] pointer-events-none relative rounded-[42.857px] shrink-0 w-[24px]" data-name="avatar">
            <div className="absolute inset-0 overflow-hidden rounded-[42.857px]">
              <img alt="" className="absolute h-[394.29%] left-[-293.46%] max-w-none top-[-148.57%] w-[687.85%]" src={imgAvatar} />
            </div>
            <div aria-hidden className="absolute border-[0.857px] border-solid border-white inset-0 rounded-[42.857px]" />
          </div>
          <div className="aspect-[61/61] h-full mr-[-10.286px] pointer-events-none relative rounded-[101.171px] shrink-0" data-name="avatar">
            <div className="absolute inset-0 overflow-hidden rounded-[101.171px]">
              <img alt="" className="absolute h-[278.91%] left-[-62.81%] max-w-none top-[-69.96%] w-[209.18%]" src={imgAvatar1} />
            </div>
            <div aria-hidden className="absolute border-[0.857px] border-solid border-white inset-0 rounded-[101.171px]" />
          </div>
          <div className="mr-[-10.286px] pointer-events-none relative rounded-[29.138px] shrink-0 size-[24px]" data-name="avatar">
            <div className="absolute inset-0 overflow-hidden rounded-[29.138px]">
              <img alt="" className="absolute h-[371.43%] left-[-454.05%] max-w-none top-[-135.47%] w-[663.06%]" src={imgAvatar2} />
            </div>
            <div aria-hidden className="absolute border-[1.2px] border-solid border-white inset-0 rounded-[29.138px]" />
          </div>
          {/* counter */}
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="counter">
            <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
                <circle cx="12" cy="12" fill="#222222" id="Ellipse 57" r="11.5714" stroke="white" strokeWidth="0.857143" />
              </svg>
            </div>
            <p className="[word-break:break-word] col-1 font-['Nunito_Sans',sans-serif] font-semibold leading-[14.745px] ml-[5.14px] mt-[4.29px] relative row-1 text-[#f2f2f2] text-[10.286px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              +6
            </p>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[28px] relative shrink-0 text-[24px] text-white w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Lisbon
      </p>
    </div>
  );
}

type UpcomingAvatar = { src: string; wrapper: string; clip: string; img: string; ring: string; bg?: string };

const avatarA: UpcomingAvatar = {
  src: imgUpAvatarA,
  wrapper: "mr-[-8.571px] pointer-events-none relative rounded-[40.833px] shrink-0 size-[20px]",
  clip: "absolute inset-0 overflow-hidden rounded-[40.833px]",
  img: "absolute h-[338.27%] left-[-59.18%] max-w-none top-[-138.76%] w-[222.45%]",
  ring: "absolute border border-solid border-white inset-0 rounded-[40.833px]",
};
const avatarB: UpcomingAvatar = {
  src: imgUpAvatarB,
  wrapper: "mr-[-8.571px] pointer-events-none relative rounded-[28.75px] shrink-0 size-[20px]",
  clip: "absolute inset-0 overflow-hidden rounded-[28.75px]",
  img: "absolute left-[-17.39%] max-w-none size-[252.17%] top-[-17.39%]",
  bg: "absolute bg-[#5583be] inset-0 rounded-[28.75px]",
  ring: "absolute border border-solid border-white inset-0 rounded-[28.75px]",
};
const avatarC: UpcomingAvatar = {
  src: imgUpAvatarC,
  wrapper: "mr-[-8.571px] pointer-events-none relative rounded-[24.281px] shrink-0 size-[20px]",
  clip: "absolute inset-0 overflow-hidden rounded-[24.281px]",
  img: "absolute h-[371.43%] left-[-454.05%] max-w-none top-[-135.47%] w-[663.06%]",
  ring: "absolute border border-solid border-white inset-0 rounded-[24.281px]",
};
const avatarD: UpcomingAvatar = {
  src: imgUpAvatarD,
  wrapper: "h-full mr-[-8.571px] pointer-events-none relative rounded-[35.714px] shrink-0 w-[20px]",
  clip: "absolute inset-0 overflow-hidden rounded-[35.714px]",
  img: "absolute h-[394.29%] left-[-293.46%] max-w-none top-[-148.57%] w-[687.85%]",
  ring: "absolute border-[0.714px] border-solid border-white inset-0 rounded-[35.714px]",
};
const avatarE: UpcomingAvatar = {
  src: imgUpAvatarE,
  wrapper: "mr-[-8.571px] pointer-events-none relative rounded-[21.25px] shrink-0 size-[20px]",
  clip: "absolute inset-0 overflow-hidden rounded-[21.25px]",
  img: "absolute h-[648.04%] left-[-141.18%] max-w-none top-[-484.8%] w-[331.37%]",
  ring: "absolute border border-solid border-white inset-0 rounded-[21.25px]",
};
const avatarF: UpcomingAvatar = {
  src: imgUpAvatarF,
  wrapper: "mr-[-8.571px] pointer-events-none relative rounded-[21.667px] shrink-0 size-[20px]",
  clip: "absolute inset-0 overflow-hidden rounded-[21.667px]",
  img: "absolute h-[615.38%] left-[-34.62%] max-w-none top-[-223.08%] w-[307.69%]",
  ring: "absolute border border-solid border-white inset-0 rounded-[21.667px]",
};

const upcomingTrips = [
  {
    title: "Helsinki",
    location: "Finland",
    pin: upcomingSvgPaths.p1792e700,
    when: "-30 days",
    image: imgUpCard0,
    imageClass: "absolute h-[219.54%] left-[-0.29%] max-w-none top-[-49.72%] w-[101.43%]",
    avatars: [avatarA, avatarB, avatarC],
    more: "+6",
  },
  {
    title: "Cappadocia ",
    location: "Turkey",
    pin: upcomingSvgPaths.p22a801d0,
    when: "-2 months",
    image: imgUpCard1,
    imageClass: "absolute h-[178.74%] left-[0.03%] max-w-none top-[-32.53%] w-[100.03%]",
    avatars: [avatarD, avatarE, avatarF],
    more: "+4",
  },
  {
    title: "Lofoten Islands ",
    location: "Norway",
    pin: upcomingSvgPaths.p3ecab200,
    when: "-3 months",
    image: imgUpCard2,
    imageClass: "absolute h-[243.71%] left-0 max-w-none top-[-69.27%] w-full",
    avatars: [avatarE, avatarF, avatarD],
    more: "+3",
  },
  {
    title: "Tulum ",
    location: "Mexico",
    pin: upcomingSvgPaths.p30e14b00,
    when: "-6 months",
    image: imgUpCard3,
    imageClass: "absolute max-w-none object-cover rounded-[24px] size-full",
    avatars: [avatarF, avatarD, avatarE],
    more: "+5",
  },
];

function UpcomingCard({ trip }: { trip: (typeof upcomingTrips)[number] }) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[169px] items-start justify-end p-[10px] relative rounded-[24px] shrink-0 w-[230px]" data-name="card">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
        <img alt="" className={trip.imageClass} src={trip.image} />
      </div>
      {/* badge */}
      <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[12px] pl-[4px] pr-[8px] py-[2px] rounded-[37px] top-[12px]" data-name="badge">
        <div className="relative shrink-0 size-[12px]" data-name="calendar-04">
          <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
            <path d="M8 1V3M4 1V3" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
            <path d={svgPaths.p15b97880} stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
            <path d="M1.5 5H10.5" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
            <path d={svgPaths.p13d13770} fill="#222222" stroke="#222222" />
          </svg>
        </div>
        <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#222] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
          {trip.when}
        </p>
      </div>
      {/* text section */}
      <div className="bg-white content-stretch flex items-start justify-between pl-[12px] pr-[8px] py-[8px] relative rounded-[16px] shrink-0 w-full" data-name="Text section">
        <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
          <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
            {trip.title}
          </p>
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="location">
            <div className="relative shrink-0 size-[16px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                <path d={trip.pin} fill="#333333" />
              </svg>
            </div>
            <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              {trip.location}
            </p>
          </div>
        </div>
        {/* avatar stack */}
        <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-[54.286px]" data-name="avatar stack">
          {trip.avatars.map((avatar, index) => (
            <div className={avatar.wrapper} key={index}>
              {avatar.bg ? <div aria-hidden className={avatar.bg} /> : null}
              <div className={avatar.clip}>
                <img alt="" className={avatar.img} src={avatar.src} />
              </div>
              <div aria-hidden className={avatar.ring} />
            </div>
          ))}
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
                <circle cx="10" cy="10" fill="#222222" r="9.64286" stroke="white" strokeWidth="0.714286" />
              </svg>
            </div>
            <p className="[word-break:break-word] col-1 font-['Nunito_Sans',sans-serif] font-semibold leading-[12.287px] ml-[4.29px] mt-[3.57px] relative row-1 text-[#f2f2f2] text-[8.571px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              {trip.more}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const pastTrips = [
  { title: "Corfu Island", location: "Greece, Europe", pin: pastSvgPaths.p6844780, badge: "30 places visited", badgeBg: "bg-[#f0f2ff]", badgeText: "text-[#5583be]", image: imgPast0 },
  { title: "Desert of Sinai", location: "Egypt, Africa", pin: pastSvgPaths.p1792e700, badge: "5 restaurant tried", badgeBg: "bg-[#fff6e9]", badgeText: "text-[#c4a06a]", image: imgPast1 },
  { title: "Kyoto", location: "Japan, Asia", pin: pastSvgPaths.p22a801d0, badge: "12 temples visited", badgeBg: "bg-[#f0f2ff]", badgeText: "text-[#5583be]", image: imgPast2 },
  { title: "Amalfi Coast", location: "Italy, Europe", pin: pastSvgPaths.p3ecab200, badge: "8 restaurants tried", badgeBg: "bg-[#eaf9f1]", badgeText: "text-[#006f00]", image: imgPast3 },
  { title: "Marrakech", location: "Morocco, Africa", pin: pastSvgPaths.p30e14b00, badge: "6 markets explored", badgeBg: "bg-[#fef]", badgeText: "text-[#b36ac4]", image: imgPast4 },
  { title: "Reykjav\u00edk", location: "Iceland, Europe", pin: pastSvgPaths.p28851a80, badge: "4 hikes done", badgeBg: "bg-[#f0f2ff]", badgeText: "text-[#5583be]", image: imgPast5 },
  { title: "Bali", location: "Indonesia, Asia", pin: pastSvgPaths.p37b8a500, badge: "4 hikes done", badgeBg: "bg-[#eaf9f1]", badgeText: "text-[#006f00]", image: imgPast6 },
];

function PastCard({ trip }: { trip: (typeof pastTrips)[number] }) {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex gap-[16px] items-center pl-[12px] pr-[16px] py-[12px] relative rounded-[24px] shrink-0 w-[220px]" data-name="Card">
      <div className="relative rounded-[12px] shrink-0 size-[64px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-bottom object-cover pointer-events-none rounded-[12px] size-full" src={trip.image} />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
        <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[16px] min-w-full relative shrink-0 text-[#222] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
          {trip.title}
        </p>
        <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
          <div className="relative shrink-0 size-[16px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
              <path d={trip.pin} fill="#333333" />
            </svg>
          </div>
          <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
            {trip.location}
          </p>
        </div>
        <div className={`${trip.badgeBg} content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0`}>
          <p className={`[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[16px] relative shrink-0 ${trip.badgeText} text-[12px] whitespace-nowrap`} style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
            {trip.badge}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const upcoming = useDragScroll();
  const past = useDragScroll();
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [page, setPage] = useState<"home" | "trip">("home");

  return (
    <div className="bg-[#e9e9e9] w-full" style={{ minHeight: "100dvh" }}>
    <div className="bg-[#f2f2f2] relative w-full overflow-x-hidden" data-name="HOME" style={{ minHeight: "100dvh" }}>
      {page === "trip" ? <TripPage onBack={() => setPage("home")} /> : (
      <>
      {activeTab !== "home" ? <OffTheMap /> : null}
      {activeTab === "home" ? (
      <>
      {/* Status bar hidden — only its height is preserved */}
      <div aria-hidden className="absolute h-[57px] left-0 top-0 w-full" data-name="Status bar - iPhone" />

      {/* Page content */}
      <div className="content-stretch flex flex-col gap-[20px] items-start relative w-full px-[25px] pt-[57px] pb-[104px]" data-name="Page">
        <Header />

        {/* Content */}
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">

          {/* Current adventure section */}
          <div className="content-stretch flex flex-col gap-[12px] h-[296px] items-start relative shrink-0 w-full">
            <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[16px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Current adventure
            </p>
            <CurrentAdventureCard onOpen={() => setPage("trip")} />
          </div>

          {/* Upcoming trips section */}
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            {/* Header */}
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  Upcoming trips
                </p>
                {/* badge with count */}
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                  <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]">
                    <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
                      <circle cx="10" cy="10" fill="#222222" r="10" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] col-1 font-['Nunito_Sans',sans-serif] font-semibold leading-[12.287px] ml-[7px] mt-[4px] relative row-1 text-[#f2f2f2] text-[8.571px] w-[5px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                    4
                  </p>
                </div>
              </div>
              <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Nunito_Sans',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#333] text-[14px] text-center underline whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                See all
              </p>
            </div>
            {/* Scrollable card stack */}
            <div
              ref={upcoming.ref}
              {...upcoming.handlers}
              className="hide-scrollbar flex flex-nowrap gap-[12px] items-center relative shrink-0 w-[calc(100%_+_50px)] ml-[-25px] pl-[25px] pr-[25px] overflow-x-auto overflow-y-hidden pb-[4px] cursor-grab active:cursor-grabbing"
              style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none', touchAction: 'pan-x', overscrollBehaviorX: 'contain' }}
            >
              {upcomingTrips.map((trip) => (
                <UpcomingCard key={trip.title} trip={trip} />
              ))}
            </div>
          </div>

          {/* Past trips section */}
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            {/* Header */}
            <div className="[word-break:break-word] content-stretch flex items-end justify-between leading-[normal] relative shrink-0 text-[#333] w-full whitespace-nowrap">
              <p className="font-['Nunito_Sans',sans-serif] font-bold relative shrink-0 text-[16px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                Past trips
              </p>
              <p className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['Nunito_Sans',sans-serif] font-medium relative shrink-0 text-[14px] text-center underline" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                See all
              </p>
            </div>
            {/* Scrollable card stack */}
            <div
              ref={past.ref}
              {...past.handlers}
              className="hide-scrollbar flex flex-nowrap gap-[8px] items-center relative shrink-0 w-[calc(100%_+_50px)] ml-[-25px] pl-[25px] pr-[25px] overflow-x-auto overflow-y-hidden pb-[4px] cursor-grab active:cursor-grabbing"
              style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none', touchAction: 'pan-x', overscrollBehaviorX: 'contain' }}
            >
              {pastTrips.map((trip) => (
                <PastCard key={trip.title} trip={trip} />
              ))}
            </div>
          </div>

        </div>
      </div>

      </>
      ) : null}

      <FloatingTabBar active={activeTab} onSelect={setActiveTab} />
      </>
      )}
    </div>
    </div>
  );
}

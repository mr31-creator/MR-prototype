import type React from "react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import AddActivitySheet from "@/AddActivitySheet";
import AddExpenseSheet from "@/AddExpenseSheet";
import SettleSharesSheet from "@/SettleSharesSheet";
import imgBalanceAvatar from "@/imports/ExpensesCard/d5882efb94700267aa2e7709e822558cae4296e7.png";
import expensesSvgPaths from "@/imports/ExpensesCard/svg-465wuylxmw";
import AddParticipantSheet from "@/AddParticipantSheet";
import type { PollOption } from "@/AddActivitySheet";
import LockScreen from "@/LockScreen";
import TripPollCard, { POLL_TOTAL_VOTES, POLL_VOTE_SEQUENCE, pollWinnerFor, pollWinnerRow, type PollWinner } from "@/TripPollCard";
import PollNotification from "@/PollNotification";
import SettledNotification from "@/SettledNotification";
import SettledLockScreen from "@/SettledLockScreen";
import stepCardSvgPaths from "@/imports/StepCard/svg-lba1yfdlm0";
import stepElementSvgPaths from "@/imports/StepElement/svg-aj6ixmvjen";
import imgPollStep from "@/imports/StepCard/4e8e1697f93bee03a06cd7445b6e479ad066a3ea.png";
import svgPaths from "@/imports/TripPage/svg-c9phpqetvp";
import imgCityImage from "@/imports/TripPage/50066ce80a174823f21475046fb0a062dbc92aef.png";
import imgAvatar from "@/imports/TripPage/4e0a6889650015711af2e87503fb5e63994b55bd.png";
import imgAvatar1 from "@/imports/TripPage/4df2391a52084f34091d2bd873ee9e00f23e4403.png";
import imgAvatar2 from "@/imports/TripPage/4d9cb718b54351e9495877aaff97c6dd9bd51c1b.png";
import imgImage from "@/imports/TripPage/045314cbfb957ebfeb5791e1d492f826c2d50bc4.png";
import imgImage1 from "@/imports/TripPage/4503a8f9cf684cf3c74185f3b9f19a74d217f934.png";
import imgImage2 from "@/imports/TripPage/e57e789c2e5fb32f611ce186062144939a03c771.png";
import imgImage3 from "@/imports/TripPage/2ac5fe649d6031c626cc00f7525902f09bd7d82a.png";
import imgImage4 from "@/imports/TripPage/4a469524ed056cc574b0817b9a863fd06be88866.png";
import imgImage5 from "@/imports/TripPage/0e34e0f4131fdb052ee4279f04e28e1b3006c1a9.png";

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[16.867px]" data-name="arrow-left-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.8675" preserveAspectRatio="none" viewBox="0 0 16.8675 16.8675" width="16.8675">
        <g id="arrow-left-01">
          <path d={svgPaths.pf94bfc0} id="Vector" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button({ onBack }: { onBack: () => void }) {
  return (
    <button aria-label="Back" className="bg-[rgba(255,255,255,0.9)] border border-[#e1dfe0] border-solid content-stretch flex items-center p-[11.566px] relative rounded-[31.084px] shrink-0" data-name="button" onClick={onBack} type="button">
      <ArrowLeft />
    </button>
  );
}

function Edit() {
  return (
    <div className="relative shrink-0 size-[16.867px]" data-name="edit-03">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.8675" preserveAspectRatio="none" viewBox="0 0 16.8675 16.8675" width="16.8675">
        <g id="edit-03">
          <path d={svgPaths.p29f6ab00} id="Vector" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.pc8ca600} id="Vector_2" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] border border-[#e1dfe0] border-solid content-stretch flex items-center p-[11.566px] relative rounded-[31.084px] shrink-0" data-name="Button">
      <Edit />
    </div>
  );
}

function ButtonStack({ onBack }: { onBack: () => void }) {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[25px] right-[25px] top-[33px] z-10" data-name="Button stack">
      <Button onBack={onBack} />
      <Button1 />
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="calendar-04">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="calendar-04">
          <path d="M8 1V3M4 1V3" id="Vector" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          <path d={svgPaths.p15b97880} id="Vector_2" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          <path d="M1.5 5H10.5" id="Vector_3" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          <path d={svgPaths.p1bc14780} fill="#222222" id="Rectangle 57" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#eee] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <Calendar />
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#222] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        7-13 July
      </p>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between px-[25px] relative shrink-0 w-full" data-name="header">
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[24px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Lisbon
      </p>
      <Badge />
    </div>
  );
}

function Counter({ extra }: { extra: number }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="counter">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[28px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 28 28" width="28">
          <circle cx="14" cy="14" fill="#222222" id="Ellipse 57" r="13.5" stroke="white" />
        </svg>
      </div>
      <p className="[word-break:break-word] col-1 font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] ml-[6px] mt-[5px] relative row-1 text-[#f2f2f2] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        {`+${4 + extra}`}
      </p>
    </div>
  );
}

function AvatarStack({ extra }: { extra: number }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="avatar stack">
      <div className="mr-[-12px] pointer-events-none relative rounded-[45.029px] shrink-0 size-[28px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[45.029px]">
          <img alt="" className="absolute h-[338.92%] left-[-55.21%] max-w-none top-[-62.79%] w-[224.29%]" src={imgAvatar} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[45.029px]" />
      </div>
      <div className="mr-[-12px] pointer-events-none relative rounded-[50px] shrink-0 size-[28px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[50px]">
          <img alt="" className="absolute h-[394.29%] left-[-293.46%] max-w-none top-[-148.57%] w-[687.85%]" src={imgAvatar1} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[50px]" />
      </div>
      <div className="mr-[-12px] pointer-events-none relative rounded-[118.033px] shrink-0 size-[28px]" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[118.033px]">
          <img alt="" className="absolute h-[278.91%] left-[-62.81%] max-w-none top-[-69.96%] w-[209.18%]" src={imgAvatar2} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[118.033px]" />
      </div>
      <Counter extra={extra} />
    </div>
  );
}

function Description({ extra }: { extra: number }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Description">
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        {`${7 + extra} Friends`}
      </p>
      <AvatarStack extra={extra} />
    </div>
  );
}

function AiCoEditing() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="ai-co-editing">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="ai-co-editing">
          <path d={svgPaths.p201ca070} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
          <path d={svgPaths.p11de3900} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
          <path d={svgPaths.p116c8600} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
          <path d={svgPaths.p93c3a20} id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
          <path d={svgPaths.p2bf91380} id="Vector_5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
}

function Button2({ onInvite }: { onInvite: () => void }) {
  return (
    <button onClick={onInvite} type="button" className="bg-[#222] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[22px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[22px]" />
      <AiCoEditing />
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Invite
      </p>
    </button>
  );
}

function PartecipantsCard({ extra, onInvite }: { extra: number; onInvite: () => void }) {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex items-center justify-between p-[16px] relative rounded-[24px] shrink-0 w-full" data-name="partecipants card">
      <Description extra={extra} />
      <Button2 onInvite={onInvite} />
    </div>
  );
}

function Header1() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="header">
      <p className="font-['Nunito_Sans',sans-serif] font-bold relative shrink-0 text-[#222] text-[16px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Total spending
      </p>
      <p className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['Nunito_Sans',sans-serif] font-medium relative shrink-0 text-[#333] text-[14px] text-center underline" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
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

function Button3({ hidden, onAddExpense }: { hidden: boolean; onAddExpense: () => void }) {
  return (
    <button onClick={onAddExpense} type="button" className={`bg-[#222] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[22px] shrink-0 ${hidden ? "opacity-0 pointer-events-none" : ""}`} data-name="button">
      <div aria-hidden className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Add />
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add expense
      </p>
    </button>
  );
}

function AmountRow({ expenseLogged, onAddExpense, totalSpending }: { expenseLogged: boolean; onAddExpense: () => void; totalSpending: number }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="amount row">
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        {`€${totalSpending}`}
      </p>
      <Button3 hidden={expenseLogged} onAddExpense={onAddExpense} />
    </div>
  );
}

function TotalSpending({ expenseLogged, onAddExpense, totalSpending }: { expenseLogged: boolean; onAddExpense: () => void; totalSpending: number }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Total spending">
      <Header1 />
      <AmountRow expenseLogged={expenseLogged} onAddExpense={onAddExpense} totalSpending={totalSpending} />
    </div>
  );
}

function Badge1({ count }: { count: number }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Badge">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <circle cx="10" cy="10" fill="#222222" id="Ellipse 57" r="10" />
        </svg>
      </div>
      <p className="[word-break:break-word] col-1 font-['Nunito_Sans',sans-serif] font-semibold leading-[12.287px] ml-[7px] mt-[4px] relative row-1 text-[#f2f2f2] text-[8.571px] w-[5px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        {count}
      </p>
    </div>
  );
}

function Header2({ expenseLogged }: { expenseLogged: boolean }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Header">
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Balances to settle
      </p>
      <Badge1 count={expenseLogged ? 1 : 0} />
    </div>
  );
}

function SendIcon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="send">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="send">
          <path d={expensesSvgPaths.p3cd93700} fill="white" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function BalanceRow({ onSettle }: { onSettle: () => void }) {
  return (
    <div className="content-stretch flex gap-[64px] items-center justify-between relative shrink-0 w-full" data-name="balance row">
      <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="description">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          <div className="pointer-events-none relative rounded-[29.677px] shrink-0 size-[28px]" data-name="avatar">
            <div className="absolute inset-0 overflow-hidden rounded-[29.677px]">
              <img alt="" className="absolute h-[371.43%] left-[-454.05%] max-w-none top-[-135.47%] w-[663.06%]" src={imgBalanceAvatar} />
            </div>
            <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[29.677px]" />
          </div>
          <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
            You owe Ren
          </p>
        </div>
        <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
          €40
        </p>
      </div>
      <button className="bg-[#222] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[22px] shrink-0" data-name="button" onClick={onSettle} type="button">
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[22px]" />
        <SendIcon />
        <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
          Send
        </p>
      </button>
    </div>
  );
}

function BalancesToSettle({ expenseLogged, onSettle, settled }: { expenseLogged: boolean; onSettle: () => void; settled: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Balances to settle">
      <Header2 expenseLogged={expenseLogged && !settled} />
      {settled ? (
        <div className="content-stretch flex items-center relative shrink-0" data-name="description">
          <div className="content-stretch flex items-center relative shrink-0">
            <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>{`Everything is squared up! `}</p>
          </div>
        </div>
      ) : expenseLogged ? (
        <BalanceRow onSettle={onSettle} />
      ) : (
        <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
          Calculated at the end to minimize transfers
        </p>
      )}
    </div>
  );
}

function ExpensesCard({ expenseLogged, onSettle, settled, onAddExpense, totalSpending }: { expenseLogged: boolean; onSettle: () => void; settled: boolean; onAddExpense: () => void; totalSpending: number }) {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[24px] shrink-0 w-full" data-name="expenses card">
      <TotalSpending expenseLogged={expenseLogged} onAddExpense={onAddExpense} totalSpending={totalSpending} />
      <div className="h-0 relative shrink-0 w-full" data-name="divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 318 1" width="318">
            <path d="M0 0.5H318" id="divider" stroke="#E1DFE0" />
          </svg>
        </div>
      </div>
      <BalancesToSettle expenseLogged={expenseLogged} onSettle={onSettle} settled={settled} />
    </div>
  );
}

function Map() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="map">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="map">
          <path d={svgPaths.p32953400} fill="#333333" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#e4e4e4] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <Map />
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        5 steps
      </p>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Itinerary
      </p>
      <Badge2 />
    </div>
  );
}

function Day() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center px-[12px] py-[6px] relative rounded-[16px] flex-1 min-w-0 text-[#808080] whitespace-nowrap" data-name="Day">
      <p className="font-['Nunito_Sans',sans-serif] font-medium relative shrink-0 text-[12px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Mon
      </p>
      <p className="font-['Nunito_Sans',sans-serif] font-semibold relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        8
      </p>
    </div>
  );
}

function Day1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center px-[12px] py-[6px] relative rounded-[16px] flex-1 min-w-0 text-[#808080] whitespace-nowrap" data-name="Day">
      <p className="font-['Nunito_Sans',sans-serif] font-medium relative shrink-0 text-[12px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Tue
      </p>
      <p className="font-['Nunito_Sans',sans-serif] font-semibold relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        9
      </p>
    </div>
  );
}

function Day2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center px-[12px] py-[6px] relative rounded-[16px] flex-1 min-w-0 text-[#808080] whitespace-nowrap" data-name="Day">
      <p className="font-['Nunito_Sans',sans-serif] font-medium relative shrink-0 text-[12px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Wed
      </p>
      <p className="font-['Nunito_Sans',sans-serif] font-semibold relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        10
      </p>
    </div>
  );
}

function Day3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center px-[12px] py-[6px] relative rounded-[16px] flex-1 min-w-0 text-[#808080] whitespace-nowrap" data-name="Day">
      <p className="font-['Nunito_Sans',sans-serif] font-medium relative shrink-0 text-[12px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Thu
      </p>
      <p className="font-['Nunito_Sans',sans-serif] font-semibold relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        11
      </p>
    </div>
  );
}

function Day4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center px-[12px] py-[6px] relative rounded-[16px] flex-1 min-w-0 text-[#808080] whitespace-nowrap" data-name="Day">
      <p className="font-['Nunito_Sans',sans-serif] font-medium relative shrink-0 text-[12px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Fri
      </p>
      <p className="font-['Nunito_Sans',sans-serif] font-semibold relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        12
      </p>
    </div>
  );
}

function Day5() {
  return (
    <div className="border border-[#222] border-solid content-stretch flex flex-col font-['Nunito_Sans',sans-serif] font-bold gap-[6px] items-center px-[12px] py-[6px] relative rounded-[16px] flex-1 min-w-0" data-name="Day">
      <p className="relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Sat
      </p>
      <p className="min-w-full relative shrink-0 text-[#222] text-[14px] text-center w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        13
      </p>
    </div>
  );
}

function DaySelector() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center leading-[normal] relative shrink-0 w-full justify-between" data-name="day selector">
      <Day />
      <Day1 />
      <Day2 />
      <Day3 />
      <Day4 />
      <Day5 />
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="check">
          <path d={svgPaths.p35f66700} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex items-center p-[20px] relative rounded-[12px] shrink-0" data-name="image">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <img alt="" className="absolute max-w-none object-bottom rounded-[12px] size-full" src={imgImage} />
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 rounded-[12px]" />
      </div>
      <Check />
    </div>
  );
}

function TextRow() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[14px] w-full" data-name="Text row">
      <p className="font-['Nunito_Sans',sans-serif] font-bold relative min-w-0 text-[#222] flex-1" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Castelo de São Jorge
      </p>
      <p className="font-['Nunito_Sans',sans-serif] font-medium relative shrink-0 text-[#808080] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        9:00AM
      </p>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#f0f2ff] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#4670a5] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Experience
      </p>
    </div>
  );
}

function CheckmarkCircle4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="checkmark-circle-02">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="checkmark-circle-02">
          <path d={svgPaths.p254b9910} fill="#006F00" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[#eaf9f1] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <CheckmarkCircle4 />
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#006f00] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Booked
      </p>
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-[#fff6e9] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#8a6630] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €12 pp
      </p>
    </div>
  );
}

function BadgeStack() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="badge stack">
      <Badge3 />
      <Badge4 />
      <Badge5 />
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative flex-1 min-w-0" data-name="info">
      <TextRow />
      <BadgeStack />
    </div>
  );
}

function StepCard() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex gap-[14px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[18px] shrink-0 w-full" data-name="Step card">
      <Image />
      <Info />
    </div>
  );
}

function ConnectorLineFilled() {
  return (
    <div className="content-stretch flex items-center pl-[38px] relative shrink-0 w-full" data-name="connector line - filled">
      <div className="h-[16.066px] relative shrink-0 w-0" data-name="line">
        <div className="absolute inset-[0_-1.5px]">
          <svg className="block size-full" fill="none" height="16.0661" preserveAspectRatio="none" viewBox="0 0 3 16.0661" width="3">
            <path d="M1.5 0V16.0661" id="line" stroke="#222222" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="check">
          <path d={svgPaths.p35f66700} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Image1() {
  return (
    <div className="content-stretch flex items-center p-[20px] relative rounded-[12px] shrink-0" data-name="image">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img alt="" className="absolute h-[139.17%] left-[-3.1%] max-w-none top-[-15.37%] w-[106.04%]" src={imgImage1} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 rounded-[12px]" />
      </div>
      <Check1 />
    </div>
  );
}

function TextRow1() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[14px] w-full" data-name="Text row">
      <p className="font-['Nunito_Sans',sans-serif] font-semibold relative min-w-0 text-[#222] flex-1" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Belém walking tour
      </p>
      <p className="font-['Nunito_Sans',sans-serif] font-medium relative shrink-0 text-[#808080] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        10:00AM
      </p>
    </div>
  );
}

function Badge6() {
  return (
    <div className="bg-[#f0f2ff] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#4670a5] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Experience
      </p>
    </div>
  );
}

function CheckmarkCircle() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="checkmark-circle-02">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="checkmark-circle-02">
          <path d={svgPaths.p254b9910} fill="#006F00" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Badge7() {
  return (
    <div className="bg-[#eaf9f1] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <CheckmarkCircle />
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#006f00] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Booked
      </p>
    </div>
  );
}

function Badge8() {
  return (
    <div className="bg-[#fff6e9] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#8a6630] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Free
      </p>
    </div>
  );
}

function BadgeStack1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="badge stack">
      <Badge6 />
      <Badge7 />
      <Badge8 />
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative flex-1 min-w-0" data-name="info">
      <TextRow1 />
      <BadgeStack1 />
    </div>
  );
}

function StepCard1() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex gap-[14px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[18px] shrink-0 w-full" data-name="Step card">
      <Image1 />
      <Info1 />
    </div>
  );
}

function ConnectorLineDashed() {
  return (
    <div className="content-stretch flex items-center pl-[38px] relative shrink-0 w-full" data-name="connector line - dashed">
      <div className="h-[16.066px] relative shrink-0 w-0" data-name="line">
        <div className="absolute inset-[0_-1.5px]">
          <svg className="block size-full" fill="none" height="16.0661" preserveAspectRatio="none" viewBox="0 0 3 16.0661" width="3">
            <path d="M1.5 0V16.0661" id="line" stroke="#222222" strokeDasharray="5 5" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="clock-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="clock-01">
          <path d={svgPaths.p7313400} fill="#222222" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Badge9() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <Clock />
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#222] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Incoming
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[14px] w-full whitespace-nowrap">
      <p className="font-['Nunito_Sans',sans-serif] font-bold relative shrink-0 text-[#222]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Lunch Taberna Lorina
      </p>
      <p className="font-['Nunito_Sans',sans-serif] font-medium relative shrink-0 text-[#808080]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        12:00AM
      </p>
    </div>
  );
}

function Location1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="location-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="location-01">
          <path d={svgPaths.p30e14b00} fill="#FF4735" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Location() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Location">
      <Location1 />
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Doca de Santo Amaro, 20
      </p>
    </div>
  );
}

function CheckmarkCircle1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="checkmark-circle-02">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="checkmark-circle-02">
          <path d={svgPaths.p254b9910} fill="#006F00" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Badge10() {
  return (
    <div className="bg-[#eaf9f1] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <CheckmarkCircle1 />
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#006f00] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Booked
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <Location />
      <Badge10 />
    </div>
  );
}

function TextualInfo() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[2px] items-start p-[8px] relative rounded-[6px] shrink-0 w-full" data-name="Textual info">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Image2() {
  return (
    <div className="content-stretch flex flex-col h-[158px] items-start justify-between p-[6px] relative rounded-[12px] shrink-0 w-full" data-name="image">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-white inset-0 rounded-[12px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img alt="" className="absolute h-[266.65%] left-[-0.1%] max-w-none top-[-76.97%] w-[103.64%]" src={imgImage2} />
        </div>
      </div>
      <Badge9 />
      <TextualInfo />
    </div>
  );
}

function StepCard2() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex flex-col items-start p-[6px] relative rounded-[18px] shrink-0 w-full" data-name="step card">
      <Image2 />
    </div>
  );
}

function ConnectorLineUnfilled() {
  return (
    <div className="content-stretch flex items-center pl-[38px] relative shrink-0 w-full" data-name="connector line - unfilled">
      <div className="h-[16.066px] relative shrink-0 w-0" data-name="line">
        <div className="absolute inset-[0_-1.5px]">
          <svg className="block size-full" fill="none" height="16.0661" preserveAspectRatio="none" viewBox="0 0 3 16.0661" width="3">
            <path d="M1.5 0V16.0661" id="line" stroke="#E1DFE0" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Check2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="check" opacity="0">
          <path d={svgPaths.p35f66700} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Image3() {
  return (
    <div className="content-stretch flex items-center p-[20px] relative rounded-[12px] shrink-0" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none rounded-[12px] size-full" src={imgImage3} />
      <Check2 />
    </div>
  );
}

function TextRow2() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[14px] w-full" data-name="Text row">
      <p className="font-['Nunito_Sans',sans-serif] font-bold relative min-w-0 text-[#222] flex-1" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Gulbenkian Museum
      </p>
      <p className="font-['Nunito_Sans',sans-serif] font-medium relative shrink-0 text-[#808080] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        2:00PM
      </p>
    </div>
  );
}

function Badge11() {
  return (
    <div className="bg-[#f0f2ff] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#4670a5] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Experience
      </p>
    </div>
  );
}

function CancelCircle() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="cancel-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="cancel-circle">
          <path d={svgPaths.p111d3480} fill="#D32D1D" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Badge12() {
  return (
    <div className="bg-[#fff4f3] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <CancelCircle />
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#d32d1d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Not Booked
      </p>
    </div>
  );
}

function BadgeStack2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="badge stack">
      <Badge11 />
      <Badge12 />
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative flex-1 min-w-0" data-name="info">
      <TextRow2 />
      <BadgeStack2 />
    </div>
  );
}

function StepCard3() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex gap-[14px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[18px] shrink-0 w-full" data-name="Step card">
      <Image3 />
      <Info2 />
    </div>
  );
}

function ConnectorLineUnfilled1() {
  return (
    <div className="content-stretch flex items-center pl-[38px] relative shrink-0 w-full" data-name="connector line - unfilled">
      <div className="h-[16.066px] relative shrink-0 w-0" data-name="line">
        <div className="absolute inset-[0_-1.5px]">
          <svg className="block size-full" fill="none" height="16.0661" preserveAspectRatio="none" viewBox="0 0 3 16.0661" width="3">
            <path d="M1.5 0V16.0661" id="line" stroke="#E1DFE0" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Check3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="check" opacity="0">
          <path d={svgPaths.p35f66700} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Image4() {
  return (
    <div className="content-stretch flex items-center p-[20px] relative rounded-[12px] shrink-0" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none rounded-[12px] size-full" src={imgImage4} />
      <Check3 />
    </div>
  );
}

function TextRow3() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[14px] w-full" data-name="Text row">
      <p className="font-['Nunito_Sans',sans-serif] font-bold relative min-w-0 text-[#222] flex-1" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Rooftop drinks
      </p>
      <p className="font-['Nunito_Sans',sans-serif] font-medium relative shrink-0 text-[#808080] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        6:00PM
      </p>
    </div>
  );
}

function Badge13() {
  return (
    <div className="bg-[#f0f2ff] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#4670a5] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Food
      </p>
    </div>
  );
}

function CheckmarkCircle2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="checkmark-circle-02">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="checkmark-circle-02">
          <path d={svgPaths.p254b9910} fill="#006F00" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Badge14() {
  return (
    <div className="bg-[#eaf9f1] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <CheckmarkCircle2 />
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#006f00] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Booked
      </p>
    </div>
  );
}

function Badge15() {
  return (
    <div className="bg-[#fff6e9] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#8a6630] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €€
      </p>
    </div>
  );
}

function BadgeStack3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="badge stack">
      <Badge13 />
      <Badge14 />
      <Badge15 />
    </div>
  );
}

function Info3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative flex-1 min-w-0" data-name="info">
      <TextRow3 />
      <BadgeStack3 />
    </div>
  );
}

function StepCard4() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex gap-[14px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[18px] shrink-0 w-full" data-name="Step card">
      <Image4 />
      <Info3 />
    </div>
  );
}

function ConnectorLineUnfilled2() {
  return (
    <div className="content-stretch flex items-center pl-[38px] relative shrink-0 w-full" data-name="connector line - unfilled">
      <div className="h-[16.066px] relative shrink-0 w-0" data-name="line">
        <div className="absolute inset-[0_-1.5px]">
          <svg className="block size-full" fill="none" height="16.0661" preserveAspectRatio="none" viewBox="0 0 3 16.0661" width="3">
            <path d="M1.5 0V16.0661" id="line" stroke="#E1DFE0" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Check4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="check" opacity="0">
          <path d={svgPaths.p35f66700} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Image5() {
  return (
    <div className="content-stretch flex items-center p-[20px] relative rounded-[12px] shrink-0" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none rounded-[12px] size-full" src={imgImage5} />
      <Check4 />
    </div>
  );
}

function TextRow4() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[14px] w-full" data-name="Text row">
      <p className="font-['Nunito_Sans',sans-serif] font-bold relative min-w-0 text-[#222] flex-1" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Club Rosa
      </p>
      <p className="font-['Nunito_Sans',sans-serif] font-medium relative shrink-0 text-[#808080] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        11:00PM
      </p>
    </div>
  );
}

function Badge16() {
  return (
    <div className="bg-[#f0f2ff] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#4670a5] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Experience
      </p>
    </div>
  );
}

function CheckmarkCircle3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="checkmark-circle-02">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="checkmark-circle-02">
          <path d={svgPaths.p254b9910} fill="#006F00" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Badge17() {
  return (
    <div className="bg-[#eaf9f1] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <CheckmarkCircle3 />
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#006f00] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Booked
      </p>
    </div>
  );
}

function Badge18() {
  return (
    <div className="bg-[#fff6e9] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#8a6630] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        €20pp
      </p>
    </div>
  );
}

function BadgeStack4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="badge stack">
      <Badge16 />
      <Badge17 />
      <Badge18 />
    </div>
  );
}

function Info4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative flex-1 min-w-0" data-name="info">
      <TextRow4 />
      <BadgeStack4 />
    </div>
  );
}

function StepElement5() {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex gap-[14px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[18px] shrink-0 w-full" data-name="step element">
      <Image5 />
      <Info4 />
    </div>
  );
}

const SLOT_MINUTES: Record<string, number> = {
  "6:00 PM": 1080,
  "7:00 PM": 1140,
  "8:00 PM": 1200,
  "9:00 PM": 1260,
  "10:00 PM": 1320,
  "11:00 PM": 1380,
  "12:00 PM": 1440,
  "1:00 AM": 1500,
};

function PollCheck() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="check" opacity="0">
          <path d={stepCardSvgPaths.p35f66700} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function PollStepImage() {
  return (
    <div className="content-stretch flex items-center p-[20px] relative rounded-[12px] shrink-0" data-name="image">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#f0f2ff] inset-0 rounded-[12px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img alt="" className="absolute left-[-21.11%] max-w-none size-[147.94%] top-[-23.84%]" src={imgPollStep} />
        </div>
      </div>
      <PollCheck />
    </div>
  );
}

function PollStepTextRow({ time }: { time: string }) {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[14px] w-full" data-name="Text row">
      <p className="font-['Nunito_Sans',sans-serif] font-bold relative shrink-0 text-[#222]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Dinner, let’s vote
      </p>
      <p className="font-['Nunito_Sans',sans-serif] font-medium relative shrink-0 text-[#808080] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        {time}
      </p>
    </div>
  );
}

function PollStepClock() {
  return (
    <div className="relative shrink-0 size-[11.815px]" data-name="clock-01">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.8154" preserveAspectRatio="none" viewBox="0 0 11.8154 11.8154" width="11.8154">
        <g id="clock-01">
          <path d={stepCardSvgPaths.p2af27000} fill="#D32D1D" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function PollStepBadge() {
  return (
    <div className="bg-[#fff4f3] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
      <PollStepClock />
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#d32d1d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        58 m left
      </p>
    </div>
  );
}

function PollStepButton() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[22px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[22px]" />
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Jump to Poll
      </p>
    </div>
  );
}

function PollStepInfo({ time }: { time: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative grow min-w-0" data-name="info">
      <PollStepTextRow time={time} />
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="bottom row">
        <PollStepBadge />
        <PollStepButton />
      </div>
    </div>
  );
}

function PollStepCard({ time }: { time: string }) {
  return (
    <div className="bg-white border border-[#e1dfe0] border-dashed content-stretch flex gap-[14px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[18px] shrink-0 w-full" data-name="Step card">
      <PollStepImage />
      <PollStepInfo time={time} />
    </div>
  );
}

type PollState = { myVote: number | null; onVote: (row: number) => void; votes: number[]; winnerRow: number | null };

function WinnerStepCard({ time, winner }: { time: string; winner: PollWinner }) {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex gap-[14px] items-center pl-[6px] pr-[12px] py-[6px] relative rounded-[18px] shrink-0 w-full" data-name="step element">
      <div className="content-stretch flex items-center p-[20px] relative rounded-[12px] shrink-0" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={winner.option.image} />
        <div className="relative shrink-0 size-[24px]" data-name="check">
          <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
            <g id="check" opacity="0">
              <path d={stepElementSvgPaths.p35f66700} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
          </svg>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative grow min-w-0" data-name="info">
        <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[14px] w-full" data-name="Text row">
          <p className="font-['Nunito_Sans',sans-serif] font-bold relative shrink-0 text-[#222]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
            {winner.option.name}
          </p>
          <p className="font-['Nunito_Sans',sans-serif] font-medium relative shrink-0 text-[#808080] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
            {time}
          </p>
        </div>
        <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="badge stack">
          <div className="bg-[#f0f2ff] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
            <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#4670a5] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Food
            </p>
          </div>
          <div className="bg-[#fff4f3] content-stretch flex gap-[4px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
            <div className="relative shrink-0 size-[12px]" data-name="cancel-circle">
              <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
                <g id="cancel-circle">
                  <path d={stepElementSvgPaths.p111d3480} fill="#D32D1D" id="Subtract" />
                </g>
              </svg>
            </div>
            <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#d32d1d] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Not Booked
            </p>
          </div>
          <div className="bg-[#fff6e9] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[37px] shrink-0" data-name="badge">
            <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#8a6630] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              {winner.option.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimeLine({ pollTime, winner }: { pollTime: string | null; winner: PollWinner | null }) {
  const steps: { card: React.ReactNode; connector: React.ReactNode; minute: number }[] = [
    { card: <StepCard />, connector: <ConnectorLineFilled />, minute: 540 },
    { card: <StepCard1 />, connector: <ConnectorLineDashed />, minute: 600 },
    { card: <StepCard2 />, connector: <ConnectorLineUnfilled />, minute: 720 },
    { card: <StepCard3 />, connector: <ConnectorLineUnfilled1 />, minute: 840 },
    { card: <StepCard4 />, connector: <ConnectorLineUnfilled2 />, minute: 1080 },
    { card: <StepElement5 />, connector: <ConnectorLineUnfilled2 />, minute: 1380 },
  ];

  if (pollTime) {
    const minute = SLOT_MINUTES[pollTime] ?? Number.MAX_SAFE_INTEGER;
    const index = steps.findIndex((step) => step.minute > minute);
    const placeholder = {
      card: winner ? <WinnerStepCard time={pollTime.replace(" ", "")} winner={winner} /> : <PollStepCard time={pollTime.replace(" ", "")} />,
      connector: <ConnectorLineUnfilled2 />,
      minute,
    };
    steps.splice(index === -1 ? steps.length : index, 0, placeholder);
  }

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Time line">
      {steps.map((step, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="step element" key={index}>
          {step.card}
          {index < steps.length - 1 ? step.connector : null}
        </div>
      ))}
    </div>
  );
}

function ItineraryCard({ pollTime, winner }: { pollTime: string | null; winner: PollWinner | null }) {
  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex flex-col gap-[20px] items-end p-[16px] relative rounded-[24px] shrink-0 w-full" data-name="itinerary card">
      <DaySelector />
      <TimeLine pollTime={pollTime} winner={winner} />
    </div>
  );
}

function ItinerarySection({ pollTime, winner }: { pollTime: string | null; winner: PollWinner | null }) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="itinerary section">
      <Header3 />
      <ItineraryCard pollTime={pollTime} winner={winner} />
    </div>
  );
}

function ContentSheet({ pollCardVisible, expenseLogged, onSettle, settled, extra, onAddExpense, onInvite, totalSpending, onWinner, pollOptions, pollTime, poll, winner }: { expenseLogged: boolean; onSettle: () => void; settled: boolean; extra: number; onAddExpense: () => void; onInvite: () => void; totalSpending: number; pollOptions: PollOption[]; pollTime: string | null; poll: PollState; pollCardVisible: boolean; winner: PollWinner | null; onWinner: (winner: PollWinner) => void }) {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col gap-[16px] items-start px-[25px] pt-[25px] pb-[12px] relative rounded-tl-[48px] rounded-tr-[48px] grow shrink-0 w-full" data-name="content sheet">
      {pollTime && pollCardVisible ? <TripPollCard myVote={poll.myVote} onVote={poll.onVote} options={pollOptions} votes={poll.votes} winnerRow={poll.winnerRow} /> : null}
      <PartecipantsCard extra={extra} onInvite={onInvite} />
      <ExpensesCard expenseLogged={expenseLogged} onSettle={onSettle} settled={settled} onAddExpense={onAddExpense} totalSpending={totalSpending} />
      <div className="h-0 relative shrink-0 w-full" data-name="divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 352 1" width="352">
            <path d="M0 0.5H352" id="divider" stroke="#E1DFE0" />
          </svg>
        </div>
      </div>
      <ItinerarySection pollTime={pollTime} winner={winner} />
    </div>
  );
}

function TripDetail({ pollCardVisible, expenseLogged, onSettle, settled, extra, onAddExpense, onInvite, totalSpending, onWinner, pollOptions, pollTime, poll, winner }: { expenseLogged: boolean; onSettle: () => void; settled: boolean; extra: number; onAddExpense: () => void; onInvite: () => void; totalSpending: number; pollOptions: PollOption[]; pollTime: string | null; poll: PollState; pollCardVisible: boolean; winner: PollWinner | null; onWinner: (winner: PollWinner) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative pt-[303px] grow w-full" data-name="Trip detail">
      <Header />
      <ContentSheet pollCardVisible={pollCardVisible} expenseLogged={expenseLogged} onSettle={onSettle} settled={settled} extra={extra} onAddExpense={onAddExpense} onInvite={onInvite} totalSpending={totalSpending} onWinner={onWinner} pollOptions={pollOptions} pollTime={pollTime} poll={poll} winner={winner} />
    </div>
  );
}

function Button4({ onAddActivity }: { onAddActivity: () => void }) {
  return (
    <button onClick={onAddActivity} type="button" className="bg-[#222] content-stretch flex flex-col items-center justify-center p-[16px] relative rounded-[16033390px] shrink-0 w-full" data-name="Button">
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[15.291px] relative shrink-0 text-[16px] text-center text-white tracking-[-0.0956px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Add activity
      </p>
    </button>
  );
}

function BottomBar({ onAddActivity }: { onAddActivity: () => void }) {
  const barRef = useRef<HTMLDivElement>(null);
  const [barHeight, setBarHeight] = useState(0);

  useLayoutEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const update = () => setBarHeight(el.offsetHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* spacer keeping the grey background flowing behind the fixed bar */}
      <div aria-hidden className="shrink-0 w-full" style={{ height: barHeight }} />
      <div className="bg-white border-[#e1dfe0] border-solid border-t content-stretch fixed flex flex-col items-start bottom-0 left-0 pb-[16px] pt-[12px] px-[25px] w-full z-20" data-name="Bottom bar" ref={barRef}>
        <Button4 onAddActivity={onAddActivity} />
      </div>
    </>
  );
}

export default function TripPage({ onBack }: { onBack: () => void }) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [addedParticipants, setAddedParticipants] = useState(0);
  const [activitySheetOpen, setActivitySheetOpen] = useState(false);
  const [expenseSheetOpen, setExpenseSheetOpen] = useState(false);
  const [totalSpending, setTotalSpending] = useState(1723);
  const [expenseLogged, setExpenseLogged] = useState(false);
  const [settleSheetOpen, setSettleSheetOpen] = useState(false);
  const [settled, setSettled] = useState(false);
  const [pollTime, setPollTime] = useState<string | null>(null);
  const [pollOptions, setPollOptions] = useState<PollOption[]>([]);
  const [winner, setWinner] = useState<PollWinner | null>(null);
  const [votes, setVotes] = useState<number[]>([0, 0, 0]);
  const [myVote, setMyVote] = useState<number | null>(null);
  const [winnerRow, setWinnerRow] = useState<number | null>(null);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [pollCardVisible, setPollCardVisible] = useState(true);
  const [lockScreen, setLockScreen] = useState(false);
  const [settledNotificationOpen, setSettledNotificationOpen] = useState(false);
  const [settledLockScreen, setSettledLockScreen] = useState(false);
  const settledTimersRef = useRef<number[]>([]);
  const pollTimersRef = useRef<number[]>([]);
  const votesRef = useRef(votes);
  votesRef.current = votes;
  useEffect(() => () => pollTimersRef.current.forEach(window.clearTimeout), []);
  useEffect(() => () => settledTimersRef.current.forEach(window.clearTimeout), []);

  // once the shares are settled the trip-squared-up banner drops in, then lingers for half a minute
  const handleSettled = () => {
    setSettled(true);
    settledTimersRef.current.forEach(window.clearTimeout);
    settledTimersRef.current = [
      window.setTimeout(() => setSettledNotificationOpen(true), 2000),
      window.setTimeout(() => setSettledNotificationOpen(false), 32000),
    ];
  };

  const pollOptionsRef = useRef<PollOption[]>([]);
  pollOptionsRef.current = pollOptions;

  // the votes drip in on their own after the poll is sent, whatever screen the user is on
  const startPoll = (time: string, options: PollOption[]) => {
    pollTimersRef.current.forEach(window.clearTimeout);
    pollTimersRef.current = [];
    setPollTime(time);
    setPollOptions(options);
    setVotes([0, 0, 0]);
    setMyVote(null);
    setWinnerRow(null);
    setWinner(null);
    setNotificationOpen(false);
    setPollCardVisible(true);
    // a natural, slightly uneven rhythm rather than a metronome
    const beats = [1000, 1900, 2900, 3700, 4600, 5400, 6200];
    POLL_VOTE_SEQUENCE.forEach((row, index) => {
      pollTimersRef.current.push(
        window.setTimeout(() => {
          setVotes((current) => current.map((count, position) => (position === row ? count + 1 : count)));
        }, beats[index]),
      );
    });
    pollTimersRef.current.push(
      window.setTimeout(() => setNotificationOpen(true), 2000),
      // safety fallback: it lingers for half a minute if the user never acts on it
      window.setTimeout(() => setNotificationOpen(false), 30000),
    );
  };

  // opening any bottom sheet dismisses the banner; voting never does
  const anySheetOpen = sheetOpen || activitySheetOpen || expenseSheetOpen || settleSheetOpen;
  useEffect(() => {
    if (anySheetOpen) setNotificationOpen(false);
  }, [anySheetOpen]);

  // the winner card is transitory: it clears out when the first sheet opened after the poll closes
  const sheetWasOpenRef = useRef(false);
  useEffect(() => {
    if (anySheetOpen) {
      sheetWasOpenRef.current = true;
      return;
    }
    if (sheetWasOpenRef.current && winnerRow !== null) setPollCardVisible(false);
    sheetWasOpenRef.current = false;
  }, [anySheetOpen, winnerRow]);

  const populated = votes.reduce((sum, count) => sum + count, 0) >= POLL_TOTAL_VOTES;

  // the poll closes three seconds after the user's vote, but never before the drip has finished
  useEffect(() => {
    if (myVote === null || !populated) return;
    const timer = window.setTimeout(() => {
      const row = pollWinnerRow(votesRef.current, myVote);
      setWinnerRow(row);
      setWinner(pollWinnerFor(pollOptionsRef.current, votesRef.current, myVote));
    }, 3000);
    return () => window.clearTimeout(timer);
  }, [myVote, populated]);

  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col relative w-full overflow-x-hidden" data-name="TRIP PAGE" style={{ minHeight: "100dvh" }}>
      <div className="absolute h-[408px] left-0 top-[-2px] w-full" data-name="city image">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[154.51%] left-[-0.07%] max-w-none top-[-48.29%] w-[115.2%]" src={imgCityImage} />
          </div>
          <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] inset-0 to-[91.155%] to-[rgba(0,0,0,0.2)] via-[65.638%] via-[rgba(0,0,0,0.11)]" />
        </div>
      </div>
      <ButtonStack onBack={onBack} />
      <TripDetail pollCardVisible={pollCardVisible} poll={{ myVote, onVote: (row: number) => setMyVote((current) => (current === row ? null : row)), votes, winnerRow }} expenseLogged={expenseLogged} onSettle={() => setSettleSheetOpen(true)} settled={settled} extra={addedParticipants} onAddExpense={() => setExpenseSheetOpen(true)} totalSpending={totalSpending} onInvite={() => setSheetOpen(true)} onWinner={setWinner} pollOptions={pollOptions} pollTime={pollTime} winner={winner} />
      <BottomBar onAddActivity={() => setActivitySheetOpen(true)} />
      <AddParticipantSheet onClose={() => setSheetOpen(false)} onParticipantsChange={(delta) => setAddedParticipants((current) => current + delta)} open={sheetOpen} />
      <PollNotification onDismiss={() => setNotificationOpen(false)} onOpen={() => { setNotificationOpen(false); setLockScreen(true); }} open={notificationOpen && !lockScreen} />
      {lockScreen ? <LockScreen onOpen={() => setLockScreen(false)} /> : null}
      <AddExpenseSheet onClose={() => setExpenseSheetOpen(false)} onSubmit={(value) => { setTotalSpending((current) => current + value); setExpenseLogged(true); }} open={expenseSheetOpen} />
      <SettleSharesSheet onClose={() => setSettleSheetOpen(false)} onSettled={handleSettled} open={settleSheetOpen} />
      <SettledNotification onDismiss={() => setSettledNotificationOpen(false)} onOpen={() => { setSettledNotificationOpen(false); setSettledLockScreen(true); }} open={settledNotificationOpen && !settledLockScreen} />
      {settledLockScreen ? <SettledLockScreen onOpen={() => setSettledLockScreen(false)} /> : null}
      <AddActivitySheet onClose={() => setActivitySheetOpen(false)} onSendPoll={startPoll} open={activitySheetOpen} />
    </div>
  );
}
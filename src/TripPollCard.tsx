import type { PollOption } from "@/AddActivitySheet";
import svgPaths from "@/imports/PollCard/svg-btxolq5mfn";
import imgWinnerIcon from "@/imports/PollCardWinner/7c2e904f75113cf622541e2bd13793f3514e26e4.png";
import imgAvatar from "@/imports/PollCard/3ce769e6c44ae270560c933341cd8ac5b307032e.png";
import imgAvatar1 from "@/imports/PollCard/d5882efb94700267aa2e7709e822558cae4296e7.png";
import imgAvatar2 from "@/imports/PollCard/4e0a6889650015711af2e87503fb5e63994b55bd.png";
import imgAvatar3 from "@/imports/PollCard/66da7c6cfccc216e303c93efefb889a8c7d98553.png";
import imgAvatar4 from "@/imports/PollCard/4df2391a52084f34091d2bd873ee9e00f23e4403.png";
import imgAvatar5 from "@/imports/PollCard/4d9cb718b54351e9495877aaff97c6dd9bd51c1b.png";
import imgAvatar6 from "@/imports/PollCard/0bc33b996aff842436388818b088550fb34b3bf2.png";

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

function Badge({ voted }: { voted: boolean }) {
  return (
    <div className="bg-[#fff4f3] content-stretch flex gap-[3.938px] items-center pl-[3.938px] pr-[7.877px] py-[1.969px] relative rounded-[36.431px] shrink-0" data-name="badge">
      <Clock />
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[16.937px] relative shrink-0 text-[#d32d1d] text-[11.815px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        {voted ? "20 m left" : "58 m left"}
      </p>
    </div>
  );
}

function Title({ voted }: { voted: boolean }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title">
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Where are we eating tonight?
      </p>
      <Badge voted={voted} />
    </div>
  );
}

function Header({ voted }: { voted: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[1.969px] items-start relative shrink-0 w-full" data-name="header">
      <Title voted={voted} />
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[16.937px] relative shrink-0 text-[#808080] text-[11.815px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Vote one option before poll closes
      </p>
    </div>
  );
}

function TextualInfo({ option }: { option: PollOption }) {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Textual info">
      <p className="font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        {option.name}
      </p>
      <p className="font-['Nunito_Sans',sans-serif] font-semibold leading-[17.202px] relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        {option.description}
      </p>
    </div>
  );
}

function OptionInfo({ option }: { option: PollOption }) {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Option info">
      <div className="relative rounded-[6px] shrink-0 size-[40px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={option.image} />
        </div>
      </div>
      <TextualInfo option={option} />
    </div>
  );
}

function AvatarStack({ visible }: { visible: number }) {
  return (
    <div className="content-stretch flex items-center pointer-events-none relative shrink-0" data-name="avatar stack">
      <div className={`mr-[-16px] relative rounded-[45.029px] shrink-0 size-[28px] transition-opacity duration-500 ease-out ${visible > 2 ? "opacity-100" : "opacity-0"}`} data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[45.029px]">
          <img alt="" className="absolute h-[345.58%] left-[-34.38%] max-w-none top-[-112.89%] w-[159.41%]" src={imgAvatar} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[45.029px]" />
      </div>
      <div className={`mr-[-16px] relative rounded-[29.677px] shrink-0 size-[28px] transition-opacity duration-500 ease-out ${visible > 1 ? "opacity-100" : "opacity-0"}`} data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[29.677px]">
          <img alt="" className="absolute h-[371.43%] left-[-454.05%] max-w-none top-[-135.47%] w-[663.06%]" src={imgAvatar1} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[29.677px]" />
      </div>
      <div className={`relative rounded-[45.029px] shrink-0 size-[28px] transition-opacity duration-500 ease-out ${visible > 0 ? "opacity-100" : "opacity-0"}`} data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[45.029px]">
          <img alt="" className="absolute h-[338.92%] left-[-55.21%] max-w-none top-[-62.79%] w-[224.29%]" src={imgAvatar2} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[45.029px]" />
      </div>
    </div>
  );
}

function AvatarStack1({ visible }: { visible: number }) {
  return (
    <div className="content-stretch flex items-center pointer-events-none relative shrink-0" data-name="avatar stack">
      <div className={`mr-[-16px] relative rounded-[45.029px] shrink-0 size-[28px] transition-opacity duration-500 ease-out ${visible > 2 ? "opacity-100" : "opacity-0"}`} data-name="avatar">
        <div aria-hidden className="absolute inset-0 rounded-[45.029px]">
          <div className="absolute inset-0 overflow-hidden rounded-[45.029px]">
            <img alt="" className="absolute h-[345.58%] left-[-34.38%] max-w-none top-[-112.89%] w-[159.41%]" src={imgAvatar} />
          </div>
          <img alt="" className="absolute max-w-none object-cover rounded-[45.029px] size-full" src={imgAvatar3} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[45.029px]" />
      </div>
      <div className={`mr-[-16px] relative rounded-[29.677px] shrink-0 size-[28px] transition-opacity duration-500 ease-out ${visible > 1 ? "opacity-100" : "opacity-0"}`} data-name="avatar">
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
      <div className={`relative rounded-[45.029px] shrink-0 size-[28px] transition-opacity duration-500 ease-out ${visible > 0 ? "opacity-100" : "opacity-0"}`} data-name="avatar">
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

function AvatarStack2({ visible }: { visible: number }) {
  return (
    <div className="content-stretch flex items-center pointer-events-none relative shrink-0" data-name="avatar stack">
      <div className={`mr-[-16px] relative rounded-[45.029px] shrink-0 size-[28px] transition-opacity duration-500 ease-out ${visible > 2 ? "opacity-100" : "opacity-0"}`} data-name="avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[45.029px] size-full" src={imgAvatar3} />
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[45.029px]" />
      </div>
      <div className={`mr-[-16px] relative rounded-[29.677px] shrink-0 size-[28px] transition-opacity duration-500 ease-out ${visible > 1 ? "opacity-100" : "opacity-0"}`} data-name="avatar">
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
      <div className={`relative rounded-[45.029px] shrink-0 size-[28px] transition-opacity duration-500 ease-out ${visible > 0 ? "opacity-100" : "opacity-0"}`} data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[45.029px]">
          <img alt="" className="absolute h-[648.04%] left-[-141.18%] max-w-none top-[-484.8%] w-[331.37%]" src={imgAvatar6} />
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 rounded-[45.029px]" />
      </div>
    </div>
  );
}

// vote layer per row: the fill grows with the number of votes on that row
const VOTE_STEP = 54;

const ROWS = [
  { avatars: AvatarStack, fill: "bg-[#f0f2ff]" },
  { avatars: AvatarStack1, fill: "bg-[#eaf9f1]" },
  { avatars: AvatarStack2, fill: "bg-[#fff6e9]" },
];

// the automatic vote drip lands on these rows in order, ending on 3 / 3 / 1
export const POLL_VOTE_SEQUENCE = [0, 1, 0, 2, 1, 0, 1];
export const POLL_TOTAL_VOTES = POLL_VOTE_SEQUENCE.length;

// widths match the reference: one vote is 81px wide, each extra vote adds 22.5px
function fillWidth(votes: number, mine: boolean) {
  if (votes === 0) return 0;
  return 81 + (votes - 1) * 22.5 + (mine ? VOTE_STEP : 0);
}

export type PollWinner = { fill: string; option: PollOption };

// most voted row wins: dripped votes plus the user's own vote
export function pollWinnerRow(votes: number[], myVote: number | null) {
  let winner = 0;
  let best = -1;
  ROWS.forEach((_, index) => {
    const total = (votes[index] ?? 0) + (myVote === index ? 1 : 0);
    if (total > best) {
      best = total;
      winner = index;
    }
  });
  return winner;
}

export function pollWinnerFor(options: PollOption[], votes: number[], myVote: number | null): PollWinner {
  const row = pollWinnerRow(votes, myVote);
  return { fill: ROWS[row].fill, option: options[row] };
}

function OptionCard({ mine, onVote, option, row, votes }: { mine: boolean; onVote: () => void; option: PollOption; row: number; votes: number }) {
  const { avatars: Avatars, fill } = ROWS[row];
  const total = votes + (mine ? 1 : 0);

  return (
    <div
      className={`border-solid ${mine ? "border border-[#222]" : "border border-[#e1dfe0]"} content-stretch cursor-pointer flex items-center justify-between overflow-clip pl-[6px] pr-[12px] py-[6px] relative rounded-[12px] shrink-0 text-left w-full`}
      data-name={mine ? "option card voted" : "option card"}
      onClick={onVote}
      role="button"
      tabIndex={0}
    >
      <div
        className={`absolute h-[55px] left-[-1px] top-[-1px] transition-[width] duration-500 ease-out ${fill}`}
        data-name="Vote fill"
        style={{ width: fillWidth(votes, mine) }}
      />
      <OptionInfo option={option} />
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="vote stack">
        <Avatars visible={total} />
        <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
          {total}
        </p>
      </div>
    </div>
  );
}

function OptionCardStack({ myVote, onVote, options, votes }: { myVote: number | null; onVote: (row: number) => void; options: PollOption[]; votes: number[] }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="option card stack">
      {options.map((option, index) => (
        <OptionCard
          key={option.name}
          mine={myVote === index}
          onVote={() => onVote(index)}
          option={option}
          row={index}
          votes={votes[index] ?? 0}
        />
      ))}
    </div>
  );
}

function WinnerHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[1.969px] items-start relative shrink-0 w-full" data-name="header">
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Title">
        <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
          Tonight dinner’s winner is...!
        </p>
        <div className="relative shrink-0 size-[20px]" data-name="icon">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[159.22%] left-[-30.71%] max-w-none top-[-34.32%] w-[160.78%]" src={imgWinnerIcon} />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-semibold leading-[16.937px] min-w-full relative shrink-0 text-[#808080] text-[11.815px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Added to itinerary, you can book your table
      </p>
    </div>
  );
}

function WinnerRow({ option, row, votes }: { option: PollOption; row: number; votes: number }) {
  const { avatars: Avatars, fill } = ROWS[row];

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="option card stack">
      <div className="border border-[#e1dfe0] border-solid content-stretch flex items-center justify-between overflow-clip pl-[6px] pr-[12px] py-[6px] relative rounded-[12px] shrink-0 w-full" data-name="option card">
        <div className={`absolute h-[55px] left-[-1px] top-[-0.97px] w-[calc(100%_+_2px)] ${fill}`} data-name="Vote fill" />
        <OptionInfo option={option} />
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="vote stack">
          <Avatars visible={votes} />
          <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
            {votes}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TripPollCard({ myVote, onVote, options = [], votes, winnerRow = null }: { myVote: number | null; onVote: (row: number) => void; options?: PollOption[]; votes: number[]; winnerRow?: number | null }) {
  const rows = options.slice(0, ROWS.length);

  if (winnerRow !== null) {
    return (
      <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[24px] shrink-0 w-full" data-name="poll card winner">
        <WinnerHeader />
        <WinnerRow option={rows[winnerRow]} row={winnerRow} votes={(votes[winnerRow] ?? 0) + (myVote === winnerRow ? 1 : 0)} />
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#e1dfe0] border-solid content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[24px] shrink-0 w-full" data-name="poll card">
      <Header voted={votes.some((count) => count > 0)} />
      <OptionCardStack myVote={myVote} onVote={onVote} options={rows} votes={votes} />
    </div>
  );
}

import { FaDiscord } from "react-icons/fa6";

const DISCORD_INVITE_URL = "https://discord.com/oauth2/authorize?client_id=1474700135383564320&permissions=8&integration_type=0&scope=bot";

export default function DiscordJoinButton() {
  return (
    <a
      href={DISCORD_INVITE_URL}
      aria-label="Add Fushia to Discord"
      className="inline-flex items-center gap-2 transition-transform duration-200 hover:scale-[1.03]"
      style={{
        position: "fixed",
        left: "16px",
        bottom: "16px",
        zIndex: 2147483647,
      }}
    >
      <span className="grid h-14 w-14 place-content-center rounded-full bg-[#5865F2] text-[24px] text-white shadow-[0_10px_26px_rgba(88,101,242,0.45)]">
        <FaDiscord />
      </span>
      <span className="rounded-full border border-white/12 bg-[#0d0b12]/90 px-6 py-3 text-xl font-semibold leading-none text-white shadow-[0_8px_30px_rgba(0,0,0,0.36)] backdrop-blur-sm">
        Join Us
      </span>
    </a>
  );
}

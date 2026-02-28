"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  FaBan,
  FaCircle,
  FaCopy,
  FaFilter,
  FaGear,
  FaGift,
  FaMusic,
  FaRegFaceSmile,
  FaRegFileLines,
  FaShieldHalved,
  FaVolumeHigh,
  FaWrench,
} from "react-icons/fa6";
import SiteFooter from "../../components/SiteFooter";

type CategoryName =
  | "Welcome"
  | "Music"
  | "Utility"
  | "Moderation"
  | "Voice"
  | "Fun"
  | "AutoMod"
  | "Giveaway"
  | "Logging"
  | "Antinuke";

type Category = {
  name: CategoryName;
  icon: React.ComponentType;
};

type CommandItem = {
  name: string;
  usage: string;
  desc: string;
};

const categories: Category[] = [
  { name: "Welcome", icon: FaRegFileLines },
  { name: "Music", icon: FaMusic },
  { name: "Utility", icon: FaWrench },
  { name: "Moderation", icon: FaGear },
  { name: "Voice", icon: FaVolumeHigh },
  { name: "Fun", icon: FaRegFaceSmile },
  { name: "AutoMod", icon: FaBan },
  { name: "Giveaway", icon: FaGift },
  { name: "Logging", icon: FaFilter },
  { name: "Antinuke", icon: FaShieldHalved },
];

const commandMap: Record<CategoryName, CommandItem[]> = {
  Welcome: [
    {
      name: "create",
      usage: "welcome create <custom id> <channel>",
      desc: "Create a welcome setup bound to a custom ID and target channel.",
    },
    {
      name: "reset",
      usage: "welcome reset",
      desc: "Reset the current welcome configuration to defaults.",
    },
    {
      name: "show/list",
      usage: "welcome show/list",
      desc: "Display all configured welcome entries and their details.",
    },
    {
      name: "remove",
      usage: "welcome remove <custom id>",
      desc: "Remove an existing welcome entry using its custom ID.",
    },
    {
      name: "edit",
      usage: "welcome edit <custom id>",
      desc: "Edit an existing welcome entry with the selected custom ID.",
    },
    {
      name: "test",
      usage: "welcome test",
      desc: "Send a preview welcome message to validate configuration.",
    },
  ],
  Music: [
    {
      name: "play",
      usage: "play <song/url>",
      desc: "Play a song using a track name or direct URL.",
    },
    {
      name: "skip",
      usage: "skip",
      desc: "Skip the current track and move to the next song in queue.",
    },
    {
      name: "volume",
      usage: "volume <1-100>",
      desc: "Adjust playback volume from 1 to 100.",
    },
    {
      name: "nowplaying",
      usage: "nowplaying",
      desc: "Show details of the currently playing song.",
    },
    {
      name: "autoplay",
      usage: "autoplay",
      desc: "Automatically queue related tracks when the queue ends.",
    },
    {
      name: "247",
      usage: "247",
      desc: "Keep the bot connected in the voice channel in 24/7 mode.",
    },
  ],
  Utility: [
    { name: "ping", usage: "ping", desc: "Check bot latency and response speed." },
    { name: "serverinfo", usage: "serverinfo", desc: "Show detailed information about the current server." },
    { name: "avatar", usage: "avatar <user>", desc: "Display the avatar of a selected user." },
    { name: "list bots", usage: "list bots", desc: "List all bot accounts in the server." },
    { name: "list roles", usage: "list roles", desc: "List all server roles with their order." },
    { name: "list channels", usage: "list channels", desc: "List all channels in the server." },
    { name: "list categories", usage: "list categories", desc: "List all category channels." },
    { name: "list admins", usage: "list admins", desc: "List members with admin permissions." },
    { name: "list voice", usage: "list voice", desc: "List active voice channels and participants." },
    { name: "botinfo", usage: "botinfo", desc: "Show information about Fushia bot build and stats." },
    { name: "banner", usage: "banner", desc: "Show the server banner or user banner when available." },
    { name: "uptime", usage: "uptime", desc: "Display bot uptime and runtime status." },
    { name: "help", usage: "help", desc: "Show command help and usage guidance." },
  ],
  Moderation: [
    { name: "ban", usage: "ban", desc: "Ban a member from the server." },
    { name: "kick", usage: "kick", desc: "Kick a member from the server." },
    { name: "mute", usage: "mute", desc: "Mute a member in the server." },
    { name: "unmute", usage: "unmute", desc: "Remove mute from a member." },
    { name: "purge bots", usage: "purge bots", desc: "Bulk remove recent messages sent by bots." },
    { name: "hide", usage: "hide", desc: "Hide a channel from selected members or roles." },
    { name: "unhide", usage: "unhide", desc: "Restore channel visibility." },
    { name: "lock", usage: "lock", desc: "Lock a channel to stop new messages." },
    { name: "unlock", usage: "unlock", desc: "Unlock a channel for normal messaging." },
    { name: "hideall", usage: "hideall", desc: "Hide all channels in the server." },
    { name: "lockall", usage: "lockall", desc: "Lock all channels in the server." },
    { name: "nick", usage: "nick", desc: "Change a member nickname." },
    { name: "nuke", usage: "nuke", desc: "Clone and reset a channel instantly." },
    { name: "role", usage: "role", desc: "Add or remove a role from a member." },
    { name: "roleicon", usage: "roleicon", desc: "Set or update a role icon." },
    { name: "unban", usage: "unban", desc: "Unban a user from the server." },
    { name: "unbanall", usage: "unbanall", desc: "Unban all currently banned users." },
    { name: "unhideall", usage: "unhideall", desc: "Unhide all channels in the server." },
    { name: "unlockall", usage: "unlockall", desc: "Unlock all channels in the server." },
  ],
  Voice: [
    { name: "voice pull", usage: "voice pull", desc: "Pull a member into your current voice channel." },
    { name: "voice move", usage: "voice move", desc: "Move a member to another voice channel." },
    { name: "voice mute", usage: "voice mute", desc: "Mute a member in voice channels." },
    { name: "voice muteall", usage: "voice muteall", desc: "Mute all members in the current voice channel." },
    { name: "voice kick", usage: "voice kick", desc: "Disconnect a member from voice." },
    { name: "voice moveall", usage: "voice moveall", desc: "Move all users from one voice channel to another." },
    { name: "voice kickall", usage: "voice kickall", desc: "Disconnect all users from a voice channel." },
    { name: "voice unmuteall", usage: "voice unmuteall", desc: "Unmute all muted users in voice." },
    { name: "voice unlock", usage: "voice unlock", desc: "Unlock a voice channel for joining." },
    { name: "voice lock", usage: "voice lock", desc: "Lock a voice channel from new joins." },
    { name: "voice deafen", usage: "voice deafen", desc: "Deafen a member in voice channel." },
    { name: "voice undeafen", usage: "voice undeafen", desc: "Remove deafen from a member." },
    { name: "voicerole add", usage: "voicerole add", desc: "Add an auto voice role mapping." },
    { name: "voicerole remove", usage: "voicerole remove", desc: "Remove a configured voice role mapping." },
    { name: "voicerole show", usage: "voicerole show", desc: "Show current voice role mappings." },
    { name: "voicerole reset", usage: "voicerole reset", desc: "Reset all configured voice role mappings." },
  ],
  Fun: [
    { name: "ship", usage: "ship", desc: "Generate a fun compatibility result between users." },
    { name: "joke", usage: "joke", desc: "Send a random joke in chat." },
    { name: "spank", usage: "spank", desc: "Trigger a playful action-style fun command." },
  ],
  AutoMod: [
    { name: "automod", usage: "automod", desc: "Show AutoMod status and quick options." },
    { name: "automod enable", usage: "automod enable", desc: "Enable AutoMod protections." },
    { name: "automod disable", usage: "automod disable", desc: "Disable AutoMod protections." },
    { name: "automod punishment", usage: "automod punishment", desc: "Configure punishment behavior for violations." },
    { name: "automod config", usage: "automod config", desc: "Open or edit AutoMod rule configuration." },
    { name: "automod logging", usage: "automod logging", desc: "Configure logging for AutoMod events." },
    { name: "automod ignore", usage: "automod ignore", desc: "Ignore a target from AutoMod checks." },
    { name: "automod ignore channel", usage: "automod ignore channel", desc: "Ignore a channel from AutoMod checks." },
    { name: "automod ignore role", usage: "automod ignore role", desc: "Ignore a role from AutoMod checks." },
    { name: "automod ignore show", usage: "automod ignore show", desc: "Show all ignored channels, roles, and targets." },
    { name: "automod ignore reset", usage: "automod ignore reset", desc: "Reset all AutoMod ignore entries." },
    { name: "automod unignore", usage: "automod unignore", desc: "Remove ignore from a target." },
    { name: "automod unignore channel", usage: "automod unignore channel", desc: "Remove ignore from a channel." },
    { name: "automod unignore role", usage: "automod unignore role", desc: "Remove ignore from a role." },
  ],
  Giveaway: [
    {
      name: "gstart",
      usage: "gstart <duration> <winners> <prize>",
      desc: "Start a giveaway with duration, winner count, and prize.",
    },
    { name: "gend", usage: "gend <message id>", desc: "End an active giveaway using its message ID." },
    { name: "greroll", usage: "greroll <message id>", desc: "Reroll winners for a completed giveaway." },
    { name: "glist", usage: "glist", desc: "List all active and recent giveaways." },
  ],
  Logging: [
    { name: "logging", usage: "logging", desc: "Show logging status and quick controls." },
    { name: "logging setup", usage: "logging setup", desc: "Set the server logging channel and options." },
    { name: "logging remove", usage: "logging remove", desc: "Disable or remove active logging configuration." },
    { name: "logging show", usage: "logging show", desc: "Display current logging configuration and targets." },
  ],
  Antinuke: [
    { name: "antinuke", usage: "antinuke", desc: "Show antinuke system status." },
    { name: "antinuke enable", usage: "antinuke enable", desc: "Enable antinuke protections." },
    { name: "antinuke disable", usage: "antinuke disable", desc: "Disable antinuke protections." },
    { name: "antinuke config", usage: "antinuke config", desc: "Configure antinuke rules and thresholds." },
    { name: "antinuke logging", usage: "antinuke logging", desc: "Set logging behavior for antinuke events." },
    { name: "extraowner", usage: "extraowner", desc: "Show extra owner management options." },
    { name: "extraowner set", usage: "extraowner set", desc: "Set an extra owner for emergency controls." },
    { name: "extraowner view", usage: "extraowner view", desc: "View the configured extra owner." },
    { name: "extraowner reset", usage: "extraowner reset", desc: "Reset/remove the configured extra owner." },
    { name: "wl @user", usage: "wl @user", desc: "Whitelist a user from antinuke actions." },
    { name: "unwl @user", usage: "unwl @user", desc: "Remove a user from the antinuke whitelist." },
    { name: "whitelisted", usage: "whitelisted", desc: "Show all currently whitelisted users." },
    { name: "whitelistreset", usage: "whitelistreset", desc: "Reset the antinuke whitelist." },
  ],
};

export default function CommandsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryName>("Welcome");
  const [query, setQuery] = useState("");

  const totalCommands = useMemo(
    () => Object.values(commandMap).reduce((sum, list) => sum + list.length, 0),
    [],
  );

  const activeCommands = useMemo(() => {
    const base = commandMap[activeCategory] ?? [];
    const q = query.trim().toLowerCase();
    if (!q) return base;
    return base.filter(
      (cmd) =>
        cmd.name.toLowerCase().includes(q) ||
        cmd.usage.toLowerCase().includes(q) ||
        cmd.desc.toLowerCase().includes(q),
    );
  }, [activeCategory, query]);

  const activeCount = commandMap[activeCategory]?.length ?? 0;

  return (
    <main className="min-h-screen px-5 py-14 text-white">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-4 py-1.5 text-sm font-semibold text-fuchsia-300 transition hover:bg-fuchsia-500/20"
        >
          ← Back to Home
        </Link>

        <section className="pt-10 text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-fuchsia-400/35 bg-fuchsia-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-fuchsia-200">
            <FaCircle className="text-[8px]" />
            {totalCommands} Commands
          </p>
          <h1 className="mt-4 bg-gradient-to-r from-fuchsia-200 via-fuchsia-300 to-purple-300 bg-clip-text text-5xl font-black text-transparent sm:text-6xl">
            All Commands
          </h1>
          <p className="mt-3 text-fuchsia-100/70">Complete command reference across 10 categories</p>
        </section>

        <section className="glass neon-box mt-10 overflow-hidden rounded-[2rem] border border-fuchsia-300/20 bg-[linear-gradient(180deg,rgba(21,10,31,0.92),rgba(12,6,20,0.94))]">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-fuchsia-100/70">
              <span className="inline-block h-2 w-2 rounded-full bg-fuchsia-400" />
              {activeCategory} • {activeCount} commands
            </div>
            <input
              type="text"
              placeholder="Search commands..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full max-w-[280px] rounded-xl border border-white/10 bg-[#0f071a]/90 px-4 py-2.5 text-sm text-fuchsia-100 outline-none placeholder:text-fuchsia-100/40 focus:border-fuchsia-400/40"
            />
          </div>

          <div className="grid min-h-[660px] grid-cols-1 md:grid-cols-[240px_1fr]">
            <aside className="border-r border-white/10 p-4">
              <div className="space-y-2.5">
                {categories.map((cat) => {
                  const isActive = cat.name === activeCategory;
                  const categoryCount = commandMap[cat.name]?.length ?? 0;
                  return (
                    <button
                      key={cat.name}
                      type="button"
                      onClick={() => setActiveCategory(cat.name)}
                      className={`flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-left transition ${
                        isActive
                          ? "border-fuchsia-400/45 bg-fuchsia-500/18 text-white shadow-[0_0_0_1px_rgba(236,72,255,0.18)]"
                          : "border-white/10 bg-white/[0.015] text-fuchsia-100/70 hover:border-fuchsia-400/25 hover:bg-fuchsia-400/10"
                      }`}
                    >
                      <span className="grid h-9 w-9 place-content-center rounded-lg border border-white/10 bg-white/[0.03]">
                        <cat.icon />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold">{cat.name}</span>
                        <span className="block text-xs opacity-70">{categoryCount} cmds</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>

            <div className="max-h-[660px] overflow-y-auto p-4 pr-3">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-200/80">
                {activeCategory}
              </p>
              {activeCommands.length === 0 ? (
                <div className="rounded-2xl border border-white/10 bg-[#0d0717]/88 p-6 text-fuchsia-100/70">
                  Commands for {activeCategory} will be added here.
                </div>
              ) : (
                <div className="grid gap-3 sm:grid-cols-2">
                  {activeCommands.map((cmd) => (
                    <article
                      key={`${activeCategory}-${cmd.name}`}
                      className="rounded-2xl border border-white/10 bg-[#0d0717]/88 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition hover:border-fuchsia-400/35 hover:bg-[#120a20]"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="text-3xl font-black leading-none">{cmd.name}</h3>
                          <p className="mt-2 text-sm text-fuchsia-100/65">{cmd.desc}</p>
                        </div>
                        <div className="flex shrink-0 items-center gap-2">
                          <code className="rounded-md border border-fuchsia-400/25 bg-[#140a20] px-2.5 py-1 text-xs font-semibold text-fuchsia-200">
                            {cmd.usage}
                          </code>
                          <button
                            type="button"
                            aria-label={`Copy ${cmd.name} command`}
                            className="grid h-8 w-8 place-content-center rounded-md border border-white/12 bg-white/[0.03] text-fuchsia-100/75 transition hover:border-fuchsia-400/35 hover:text-fuchsia-100"
                          >
                            <FaCopy className="text-xs" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}

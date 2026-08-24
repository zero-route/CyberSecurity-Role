"use client";

export default function SearchBar({ value, onChange, placeholder = "Cari role, skill, atau tools..." }) {
  return (
    <div className="relative w-full">
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
        🔍
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-white/10 bg-white/[0.03] py-3 pl-11 pr-4 text-sm text-neutral-100 placeholder:text-neutral-500 outline-none backdrop-blur-sm transition focus:border-cyan-400/40 focus:bg-white/[0.05]"
      />
    </div>
  );
}

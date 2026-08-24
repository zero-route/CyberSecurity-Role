export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/** Ubah hex color jadi rgba dengan opacity tertentu, dipakai untuk border/bg tema tim */
export function hexToRgba(hex, alpha = 1) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

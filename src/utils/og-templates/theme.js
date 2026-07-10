export const OG_THEME = {
  background: "#fdfdfd",
  foreground: "#282728",
  accent: "#006cac",
  accentMuted: "#e8f4fa",
  mutedText: "#5a5a5a",
  border: "#ece9e9",
};

export function truncateText(text, maxLength = 140) {
  if (!text || text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}

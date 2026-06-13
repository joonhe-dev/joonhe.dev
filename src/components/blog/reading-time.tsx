interface ReadingTimeProps {
  content: string;
}

/**
 * Estimate reading time based on Chinese/English word count.
 * Chinese: ~300 chars/min, English: ~200 words/min
 */
function estimateReadingTime(text: string): number {
  // Strip markdown syntax for more accurate word count
  const clean = text
    .replace(/```[\s\S]*?```/g, "")
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[([^\]]*)\]\(.*?\)/g, "$1")
    .replace(/[#*`>~|_\-]/g, "")
    .replace(/\n{2,}/g, "\n")
    .trim();

  // Count Chinese characters
  const chineseChars = (clean.match(/[\u4e00-\u9fff]/g) || []).length;

  // Count English words
  const englishText = clean.replace(/[\u4e00-\u9fff]/g, " ");
  const englishWords = englishText
    .split(/\s+/)
    .filter((w) => w.length > 0).length;

  // Estimate: 300 Chinese chars/min, 200 English words/min
  const chineseMinutes = chineseChars / 300;
  const englishMinutes = englishWords / 200;

  const totalMinutes = chineseMinutes + englishMinutes;

  // Return at least 1 minute
  return Math.max(1, Math.round(totalMinutes));
}

export function ReadingTime({ content }: ReadingTimeProps) {
  const minutes = estimateReadingTime(content);

  return (
    <span className="text-sm text-zinc-500 dark:text-zinc-400">
      {minutes} min read
    </span>
  );
}

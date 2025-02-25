export function parseSRT(srtContent) {
  try {
    // Return empty array if content is empty or invalid
    if (!srtContent || typeof srtContent !== "string") {
      return [];
    }

    // Split on double newlines to separate subtitle blocks
    const subtitleBlocks = srtContent.trim().split("\n\n");

    const subtitles = subtitleBlocks
      .map((block) => {
        try {
          // Split each block into lines
          const lines = block.split("\n");
          if (lines.length < 2) return null; // Skip invalid blocks

          // Get the timing line and split into start and end times
          const timeLine = lines[1];
          if (!timeLine?.includes("-->")) return null; // Skip if timing line is invalid

          const [startTime, endTime] = timeLine
            .split(" --> ")
            .map((timeStr) => {
              try {
                return timeToSeconds(timeStr);
              } catch (e) {
                console.warn("Invalid time format:", timeStr);
                return 0;
              }
            });

          // Join the remaining lines as the text content
          const text = lines.slice(2).join(" ");

          return {
            start: startTime,
            end: endTime,
            text: text.trim(),
          };
        } catch (e) {
          console.warn("Error parsing subtitle block:", e);
          return null;
        }
      })
      .filter(Boolean); // Remove any null entries

    return subtitles;
  } catch (e) {
    console.error("Error parsing SRT file:", e);
    return [];
  }
}

function timeToSeconds(timeString) {
  if (!timeString || typeof timeString !== "string") {
    return 0;
  }

  const parts = timeString.split(":");
  if (parts.length !== 3) return 0;

  const [hours, minutes, rest] = parts;
  if (!rest) return 0;

  const [seconds, milliseconds] = rest.split(",");
  if (!seconds || !milliseconds) return 0;

  return (
    parseInt(hours) * 3600 +
    parseInt(minutes) * 60 +
    parseInt(seconds) +
    parseInt(milliseconds) / 1000
  );
}

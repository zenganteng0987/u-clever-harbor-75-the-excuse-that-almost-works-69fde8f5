import { mkdirSync, writeFileSync } from "node:fs";

// The excuse that almost works: one line a gamer texts the boss to skip
// work on GTA 6 launch week. 17 words, one line, plain words, no setup,
// no signature. The joke is the delivery window itself: "between 7am and
// whenever" is a real, specific, boring detail a tired manager has heard
// from every courier, and it quietly traps the sender at home all day.
const entry =
  "Sorry, I have to wait in for the fridge delivery, they said between 7am and whenever, apparently";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);

export function randomWithSeed(seed: number) {
  let randomSeed = seed;
  return ({ min, max } = { min: 0, max: 1 }) => {
    randomSeed = (randomSeed * 9301 + 49297) % 233280;
    const rnd = randomSeed / 233280.0;
    return min + rnd * (max - min);
  };
}

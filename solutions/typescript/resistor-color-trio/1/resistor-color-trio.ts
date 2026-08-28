export const BANDS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
] as const;

export type Color = typeof BANDS[number];

const METRIC_PREFIXES = ['', 'kilo', 'mega', 'giga'] as const;

export function decodedResistorValue([band1, band2, band3]: [Color, Color, Color] | [string, string, string]): string {
  const digit1 = BANDS.indexOf(band1 as Color);
  const digit2 = BANDS.indexOf(band2 as Color);
  const exponent = BANDS.indexOf(band3 as Color);

  if (digit1 === -1 || digit2 === -1 || exponent === -1) {
    throw new Error('Invalid resistor color band provided.');
  }

  // Calculate the raw numerical resistance
  let value = (digit1 * 10 + digit2) * (10 ** exponent);
  let prefixIndex = 0;

  // Reduce magnitude across SI prefixes (ohms -> kiloohms -> megaohms -> gigaohms)
  while (value > 0 && value % 1000 === 0 && prefixIndex < METRIC_PREFIXES.length - 1) {
    value /= 1000;
    prefixIndex++;
  }

  return `${value} ${METRIC_PREFIXES[prefixIndex]}ohms`;
}
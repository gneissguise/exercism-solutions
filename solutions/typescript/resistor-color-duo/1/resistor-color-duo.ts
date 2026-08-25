export function decodedValue(colors: Array<string>): number {
  const colorList = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
  ];

  const nums = colors.slice(0, 2).map( c => colorList.indexOf(c) )

  return Number(nums.join(''));  
}

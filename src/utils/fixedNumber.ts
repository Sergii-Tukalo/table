
export const fixedNumber = (number:number, countNumberAfterDot: number) => {
  return parseFloat((number).toFixed(countNumberAfterDot))
}
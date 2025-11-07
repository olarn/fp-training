type SumAll = (xs: number[]) => number

export const sumAll: SumAll = (xs) => {
  if (xs.length === 0) {
    return 0
  }
  const [head, ...tail] = xs
  return head + sumAll(tail)
}

export const sumAll2: SumAll = (xs) =>
  xs.length === 0 ?
    0 :
    xs[0] + sumAll2(xs.slice(1))
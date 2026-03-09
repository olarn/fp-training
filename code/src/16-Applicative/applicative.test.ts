import { Array, Either, Option, pipe } from "effect"
import * as FpArray from "fp-ts/Array"

// Array has no ap in Effect; define applicative ap via flatMap + map
const arrayAp = <A, B>(fa: ReadonlyArray<A>) =>
  (fab: ReadonlyArray<(a: A) => B>): Array<B> =>
    pipe(fab, Array.flatMap((f) => pipe(fa, Array.map(f))))

const sum = (x: number) => (y: number) => x + y
const sum3 = (x: number) => (y: number) => (z: number) => x + y + z

describe("Applicative", () => {
  it("Apply 2 arrays of numbers with sum function with fp-ts", () => {
    expect(
      pipe(
        FpArray.of(sum), 
        FpArray.ap([1, 2, 3]), 
        FpArray.ap([4, 5, 6]))
    ).toEqual([5, 6, 7, 6, 7, 8, 7, 8, 9])
  })

  it("Apply 2 arrays of numbers with sum function with effect", () => {
    expect(
      pipe(
        Array.of(sum), 
        arrayAp([1, 2, 3]), 
        arrayAp([4, 5, 6]))
    ).toEqual([5, 6, 7, 6, 7, 8, 7, 8, 9])
  })

  it("Apply 2 and 3 Options of numbers with sum, sum3 function", () => {
    expect(
      pipe(
        Option.some(sum),
        Option.ap(Option.some(1)),
        Option.ap(Option.some(2))
      )
    ).toEqual(Option.some(3))

    expect(
      pipe(
        Option.some(sum3),
        Option.ap(Option.some(1)),
        Option.ap(Option.some(2)),
        Option.ap(Option.some(3))
      )
    ).toEqual(Option.some(6))
  })
  
  it("Apply some and none Options of left and right with sum function", () => {
      expect(
      pipe(
        Option.some(sum),
        Option.ap(Option.some(1)),
        Option.ap(Option.none())
      )
    ).toEqual(Option.none())
  })

  it("Apply Eithers of numbers with sum3 function", () => {
    expect(
      pipe(
        Either.right(sum3),
        Either.ap(Either.right(1)),
        Either.ap(Either.right(2)),
        Either.ap(Either.right(3))
      )
    ).toEqual(Either.right(6))
  })

  it("Apply Eithers of left and right with sum function", () => {
    expect(
    pipe(
      Either.right(sum),
      Either.ap(Either.right(1)),
      Either.ap(Either.left('error'))
    )
    ).toEqual(Either.left('error'))
  })
})

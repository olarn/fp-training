// fmap0 :: a -> f a
type Fmap0 = <A>(f: (x: A) => A) => (x: A) => A
const fmap0: Fmap0 = f => x => f(x)

// fmap1 :: (a -> b) -> f a -> f b
type Fmap1 = <A, B>(f: (a: A) => B) => (x: A) => B
const fmap1: Fmap1 = f => x => f(x)

// fmap2 :: (a -> b -> c) -> f a -> f b -> f c
type Fmap2 = <A, B, C>(f: (a: A) => (b: B) => C) => (a: A) => (b: B) => C
const fmap2: Fmap2 = f => a => b => f(a)(b)

// fmap3 :: (a -> b -> c -> d) -> f a -> f b -> f c -> f d
type Fmap3 = <A, B, C, D>(f: (a: A) => (b: B) => (c: C) => D) => (a: A) => (b: B) => (c: C) => D
const fmap3: Fmap3 = f => a => b => c => f(a)(b)(c)

describe('Applicative', () => {
  it('should apply a function to a value', () => {
    expect(fmap0((x: number) => x + 1)(1)).toEqual(2)
    expect(fmap1((x: number) => x + 1)(1)).toEqual(2)
    expect(fmap2((x: number) => (y: number) => x + y)(1)(2)).toEqual(3)
    expect(fmap3((x: number) => (y: number) => (z: number) => x + y + z)(1)(2)(3)).toEqual(6)
  })
})
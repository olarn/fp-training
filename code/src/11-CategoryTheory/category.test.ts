import { flow } from "effect/Function"

const findLength = (x: string): number => x.length
const isGreaterThan5 = (x: number): boolean => x > 5
const convertToShortOrLong = (x: boolean): string => x ? 'long' : 'short'

describe('Category Theory', () => {
  it('proof composition definition law', () => {
    const gThenF = isGreaterThan5(findLength('tiny'))
    const k = flow(findLength, isGreaterThan5)('tiny')

    expect(k).toEqual(gThenF)
  })

  it('proof composition association', () => {
    // ( h .  g ) . f 
    const h_and_g_then_f = flow(findLength, flow(isGreaterThan5, toString))
    // h . ( g . f )
    const h_after_g_and_f = flow(flow(findLength, isGreaterThan5), toString)

    expect(
      h_and_g_then_f('tiny')
    ).toEqual(
      h_after_g_and_f('tiny')
    )
  })

  it('proof composition identity', () => {
    // f = id1 ๐ f
    const id1 = (x: string): string => x
    const id_f = flow(id1, findLength)
    expect(id_f('tiny')).toEqual(findLength('tiny'))

    // f = f ๐ id2
    const id2 = (x: number): number => x
    const f_id = flow(findLength, id2)
    expect(f_id('tiny')).toEqual(findLength('tiny'))
  })
})
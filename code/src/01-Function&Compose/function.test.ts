type Count = (uniqueWords: string[]) => number
type Unique = (words: string[]) => string[]
type Words = (text: string) => string[]

const count: Count = (uniqueWords) => uniqueWords.length
const unique: Unique = (words) => [...new Set(words)]
const words: Words = (text) => text.split(" ")

describe('Function', () => {
  it('should count unique words', () => {
    expect(
      count(unique(words("this cat this bat this dog this rat")))
    ).toEqual(5)
  })
})
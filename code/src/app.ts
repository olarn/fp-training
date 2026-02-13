type IO<A> = () => A

const ioIncrement = (value: number): IO<number> => {
  const output = value + 1
  return () => {
    console.log(output)
    return output
  }
}

const incrementAndLog = ioIncrement(5)
incrementAndLog()
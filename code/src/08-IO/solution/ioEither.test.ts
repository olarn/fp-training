import { Effect, Console } from "effect"
import { pipe } from "effect/Function"

type IOEither<E, A> = Effect.Effect<A, E>

const rightReadLine: IOEither<string, string> = Effect.succeed('OK')
const leftReadLine: IOEither<string, string> = Effect.fail('Error')

const printLine = (message: string): IOEither<never, void> => Console.log(message)
const printHello: IOEither<never, void> = printLine('Hello')

const program = pipe(
  printHello,
  Effect.flatMap(() => rightReadLine),
  Effect.map(str => `You entered: ${str}`),
  Effect.tap(message => printLine(message)),
  Effect.match({
    onFailure: () => 'Error',
    onSuccess: (message) => message
  })
)

const program2 = pipe(
  printHello,
  Effect.flatMap(() => leftReadLine),
  Effect.map(str => `You entered: ${str}`),
  Effect.tap(message => printLine(message)),
  Effect.match({
    onFailure: () => 'Error',
    onSuccess: (message) => message
  })
)

describe("ioEither", () => {
  it("should be able to read string from console and print it", () => {
    expect(Effect.runSync(program)).toEqual('You entered: OK')
  })

  it("should be able to read string from console", () => {
    expect(Effect.runSync(program2)).toEqual('Error')
  })
})

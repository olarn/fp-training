import { pipe } from "effect/Function"

type IO<A> = () => A
const ioHello = (message: string): IO<string> => 
  () => {
    console.log(message)
    return message
  }

const sayHello = pipe(
  'Hello, Functional Programming',
  ioHello
)

sayHello()
// import { IO } from "fp-ts/IO"

// type Book = {
//   id: number
//   title: string
//   author: string
// }

// function fetchBooks(): IO<Promise<Book[]>> {
//   return () => fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data => data as Book[])
// }

// fetchBooks().run()
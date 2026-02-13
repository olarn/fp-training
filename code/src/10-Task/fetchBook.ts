import { IO, of } from "fp-ts/lib/IO"

type Book = {
  id: number
  title: string
  author: string
}

const fetchBooks = (): IO<Promise<Book[]>> => {
  return () => (fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => data as Book[]))
}

fetchBooks()().then(books => console.log(books))
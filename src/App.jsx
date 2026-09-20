import BookCard from "./components/BookCard"

function App() {
  const books = [
    {
      id: 1,
      title: "イン・ザ・メガチャージ",
      author: "朝井リョウ",
      rating: 5,
      comment: "世の中を見る目が変わります。"
    },
    {
      id: 2,
      title: "今夜世界からこの恋が消えても",
      author: "一条岬",
      rating: 4,
      comment: "泣ける感動作品。"
    },
    {
      id: 3,
      title: "そして、バトンは渡された",
      author: "瀬尾まいこ",
      rating: 5,
      comment: "家族について考えさせられる本です。"
    }
  ]

  return (
    <div>
      <h1>おすすめ本紹介</h1>

      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          rating={book.rating}
          comment={book.comment}
        />
      ))}
    </div>
  )
}

export default App
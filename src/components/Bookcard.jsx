function BookCard({ title, author, rating, comment }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:scale-105 transition">
      <h2 className="text-xl font-bold mb-2">
        {title}
      </h2>

      <p className="text-gray-600 mb-2">
        著者：{author}
      </p>

      <p className="mb-3">
        {"⭐".repeat(rating)}
      </p>

      <p className="text-gray-700">
        {comment}
      </p>
    </div>
  )
}

export default BookCard
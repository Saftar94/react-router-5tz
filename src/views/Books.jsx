function Books() {
  const styleH1 = {
    color: 'black',
    textAlign: 'center',
    backgroundColor: '#38b3b3',
    marginLeft: 100,
    marginRight: 100,
    height: 50,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  return (
    <>
      <div>
        <h1 style={styleH1}>Книги</h1>
        <img
          src="https://sbooks.net/wp-content/uploads/2021/10/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg"
          alt="google-foto"
          width={500}
          height={200}
        />
        <h1>WHY INDEPENDENCE MATTERS</h1>
        <p>
          Think about the last good book you read. Did it make you feel more
          connected to others? Maybe it served as a welcome escape. Maybe it
          helped you rediscover the beauty in life. Did it surprise you? As an
          independent bookstore, we strive to offer the same variety and
          richness of experience as the books on our shelves. And because the
          only people we’re beholden to are our customers and ourselves, we can
          focus on what really matters — promoting diverse perspectives,
          upholding the free exchange of ideas, championing the enduring power
          of books, and bolstering the great community of readers and authors
          we’re lucky to be a part of. Thank you for supporting these lofty
          goals. Your choice sustains a family business, and allows us to follow
          our passion for getting the right books into the right hands, 365 days
          a year
        </p>
      </div>
    </>
  )
}

export default Books

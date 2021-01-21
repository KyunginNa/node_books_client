const apiURL = 'http://localhost:3000'
const displayBooks = async () => {
  const data = await (await fetch(apiURL + '/books')).json()
  data.books.forEach((book) => {
    displayBook(book)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  displayBooks()
})

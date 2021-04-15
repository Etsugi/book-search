const BASE_URL = 'https://openlibrary.org';

async function searchBooks(search) {
  return await fetch(`${BASE_URL}/search.json?q=${search}`, {
    method: 'GET'
  })
  .then((res) => {
    return resHandler(res);
  })
}

function resHandler(res) {
  if (res.ok) {
    return res.json();
  }
  return res.status;
}

export default {
  searchBooks
}
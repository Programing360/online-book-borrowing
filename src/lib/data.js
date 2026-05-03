export const allBooksData = async () => {
  const data = await fetch("https://online-book-server-n8my.onrender.com/Data");
  const res = await data.json();
  return res;
};

export const allBooksId = async (id) => {
  const bookDetails = await fetch(`https://online-book-server-n8my.onrender.com/Data/${id}`);
  const res = await bookDetails.json();
  return res
};

export const allBooksData = async () => {
  const data = await fetch("http://localhost:5000/Data");
  const res = await data.json();
  return res;
};

export const allBooksId = async (id) => {
  const bookDetails = await fetch(`http://localhost:5000/Data/${id}`);
  const res = await bookDetails.json();
  return res
};

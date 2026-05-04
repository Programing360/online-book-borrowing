export const allBooksData = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Data`);
  const res = await data.json();
  return res;
};

export const allBooksId = async (id) => {
  const bookDetails = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Data/${id}`);
  const res = await bookDetails.json();
  return res;
};

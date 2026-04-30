export const allBooksData = async () => {
    const data = await fetch('http://localhost:5000/Data')
    const res = await data.json();
    return res
}
const API = "https://fake-coffee-api.vercel.app/api";

const getAllMenu = function () {
  const getMenu = async function () {
    const res = await fetch(API);
    const data = await res.json();
    return data;
  };
  getMenu();
};

export { getAllMenu };

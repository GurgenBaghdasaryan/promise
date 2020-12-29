const delayedUpperCase = (item) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (typeof item === "string") {
        res(item.toUpperCase());
      } else {
        rej("Error:");
      }
    }, 500);
  });
};

const isStr = async (check) => {
  try {
    let result = await delayedUpperCase(check);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

isStr("asd");

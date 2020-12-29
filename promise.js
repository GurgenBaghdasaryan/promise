const delayedUpperCase = (item) => {
  return new Promise((res, rej) => {
    if (typeof item === 'string') {
      setTimeout(() => {
        res(item.toUpperCase());
      }, 500);
    } else
      [
        setTimeout(() => {
          rej("Error:");
        }, 500),
      ];
  });
};

const isStr= async (check) => {
  try {
    let result = await prom(check);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

isStr("asd");

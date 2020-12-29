const prom = (item) => {
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

const itemProm = async (check) => {
  try {
    let result = await prom(check);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

itemProm("asd");

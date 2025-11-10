const number = 20;

const promise = (number) => {
  return new Promise((resolve, reject) => {    
    setTimeout(() => {
      if (number) {
        resolve(number);
      } else {
        reject("Invalid")
      }
    }, 1000);
  });
};

(async (number, callback) => {
  try {
    for (let i = 1; i <= number; i++) {
      console.log(await callback(i));
    }
  } catch (error) {
    console.log(error);
  }
})(number, promise);

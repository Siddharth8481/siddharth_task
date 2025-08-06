function fetchdata(apiendpoint) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        apiendpoint === "http://localhost:4040/app/user/external_api_one" ||
        apiendpoint === "http://localhost:4040/app/user/external_api_two"
      ) {
        resolve({ source: apiendpoint, data: { message: "data from api" } });
        // } else if (

        // ) {
        //   resolve({ source: apiendpoint, data: { message: "data from api" } });
      } else {
        reject(new error(`Error : ${enpoint}`));
      }
    });
  }, 2000);
}
Promise.all([
  fetchdata(`http://localhost:4040/app/user/external_api_one`),
  fetchdata(`http://localhost:4040/app/user/external_api_two`),
])
  .then((results) => {
    console.log("fetchdata from external_api_one ", results);
    console.log("fetchdata from external_api_two ", results);
  })
  .catch((error) => {
    console.error("error fatching data ", error.message);
  });

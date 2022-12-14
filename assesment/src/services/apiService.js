let apiBaseUrl = "https://restcountries.com/v3.1/";

// get all Country

const getCountriessFromApi = () =>
    new Promise((resolve, reject) => {

        const productsEndpoint = apiBaseUrl + "all";

        console.log("API URL " + productsEndpoint);

        fetch(productsEndpoint)
            .then((res) => res.json())
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            });
    });

// Search Specific Country
const searchCountryFromApi = (queryy) =>
    new Promise((resolve, reject) => {

        const productsEndpoint = apiBaseUrl + "/alpha/" +queryy;

        console.log("API URL " + productsEndpoint);

        fetch(productsEndpoint)
            .then((res) => res.json())
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            });
    });

const apiData = {
    getCountriessFromApi,
    searchCountryFromApi,
};

export default apiData;

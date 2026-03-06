export const renderDetail = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const countryCode = searchParams.get("country");

    if (!countryCode) {
        window.location.href = "/";
        return;
    }

    const API_URL_DETAIL = `https://restcountries.com/v3.1/alpha/${countryCode}`;

    fetch(API_URL_DETAIL)
        .then(res => res.json())
        .then(data => console.log(data))
};
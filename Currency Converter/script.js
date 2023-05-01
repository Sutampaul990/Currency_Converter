let api = `https://v6.exchangerate-api.com/v6/${api_key}/latest/USD`;

const fromDropdown = document.getElementById("from-currency-select");
const toDropdown = document.getElementById("to-currency-select");

//Creating Dropdown with Currencies

currencies.forEach(currency => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropdown.add(option);
});

// For another Dropdown

currencies.forEach(currency => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropdown.add(option);
});

// Default Values

fromDropdown.value = "USD";
toDropdown.value = "INR";

let convertCurrency = () => {
    const amount = document.querySelector("#amount").value;
    const currencyFrom = fromDropdown.value;
    const currencyTo = toDropdown.value;

    if(amount.length != 0){
        fetch(api)
        .then((resp )=> resp.json())
        .then((data)=>{
            let FromExchangeRate = data.conversion_rates[currencyFrom];
            let ToExchangeRate = data.conversion_rates[currencyTo];

            const convertedAmount = (amount / FromExchangeRate) * ToExchangeRate;

            result.innerHTML = `${amount} ${currencyFrom} = ${convertedAmount} ${currencyTo}`;
        });
    }
    else{
        alert("Please Fill the Amount...")
    }
};

document.querySelector("#convert").addEventListener("click",convertCurrency);
window.addEventListener("load",convertCurrency);
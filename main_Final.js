function roundUpTwoDecimals(num) {
  return Math.ceil(num * 100) / 100;
}
const populate= async (from_currency,to_currency,amount)=>{
    from_currency = from_currency.toUpperCase();
    to_currency = to_currency.toUpperCase();
    const out=document.querySelector(".out");
    out.style.display="block";
    let myString=``;

    // const url="ENTER_YOUR_API_URL=" + from_currency;
    // let response= await fetch(url);
    // let rJson=await response.json();

//For API use uncomment the above commented lines and add your API url for real and actual data and comment the below rJson complete variable, OtherWise if you do not want to use API then below sample data is there in rJson which contains the dummy sample data not the real data , it is just to make the webpage still work without any API url

    let rJson = { "data": { "USD": { "code": "USD", "value": 0.01204 }, "INR": { "code": "INR", "value": 1 }, "EUR": { "code": "EUR", "value": 0.01132 }, "JPY": { "code": "JPY", "value": 1.797 }, "GBP": { "code": "GBP", "value": 0.00987 }, "CAD": { "code": "CAD", "value": 0.01637 }, "AUD": { "code": "AUD", "value": 0.0189 }, "CNY": { "code": "CNY", "value": 0.0877 }, "SAR": { "code": "SAR", "value": 0.04515 } } }

    for(let key of Object.keys(rJson["data"])){
        let code = rJson["data"][key]["code"];
        if(code==to_currency){
            let factor=rJson["data"][key]["value"];
            myString=`The equivalent amount is ${roundUpTwoDecimals(amount*factor)} ${to_currency}.`
        }
    }
    // const out=document.querySelector(".out");
    out.innerHTML=myString;
}
const btn=document.querySelector(".btn");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let from_currency=document.querySelector("input[name='from_currency']").value;
    let to_currency=document.querySelector("input[name='to_currency']").value;
    let amount=parseInt(document.querySelector("input[name='quantity']").value);
    populate(from_currency,to_currency,amount);
})



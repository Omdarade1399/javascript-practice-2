const URL = "https://cat-fact.herokuapp.com/facts"
const factPara = document.querySelector("#fact");
const factPara1 = document.querySelector("#fact1");
const factPara2 = document.querySelector("#fact2");
const factPara3 = document.querySelector("#fact3");
const factPara4 = document.querySelector("#fact4");
const btn = document.querySelector("#btn");

const getFacts = async() => {
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    factPara.innerText = data[0].text;
    factPara1.innerText = data[1].text;
    factPara2.innerText = data[2].text;
    factPara3.innerText = data[3].text;
    factPara4.innerText = data[4].text;
}

btn.addEventListener("click", getFacts);



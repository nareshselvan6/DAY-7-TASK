//! 1.Solving problems using array functions on the rest countries' data
// ! a.Get all the countries from the Asia continent /region using the Filter function

let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var res=result.filter((ele)=>ele.region==="Asia");
var final = res.map((ele)=>console.log(ele.name.common))

};


// ! b.Get all the countries with a population of less than 2 lakhs using Filter function

var request1 = new XMLHttpRequest();


request1.open("GET","https://restcountries.com/v2/all");

request1.send();

request1.onload=function(){
    var data1 = request1.response;
    var result1=JSON.parse(data1);
    var res1=result1.filter((ele)=>ele.population<200000);
    var final1=res1.map((ele)=>console.log(ele.name));
};


// ! c.Print the following details name, capital, flag using forEach function

var requestt = new XMLHttpRequest();

requestt.open("GET","https://restcountries.com/v2/all");

requestt.send();

requestt.onload=function(){
    var resultt=JSON.parse(requestt.response);
   resultt.forEach(element => {
    console.log(element.name);
        console.log(element.capital);
        console.log(element.flag);

   });
}


// ! d.Print the total population of countries using reduce function


var reques = new XMLHttpRequest();

reques.open("GET","https://restcountries.com/v2/all");

reques.send();

reques.onload=function(){
    var resul=JSON.parse(reques.response);
    var total = resul.reduce((acc,curr) =>{
        return acc+curr.population;
    } ,0);

    console.log(total);

}


// ! e.Print the country which uses US Dollars as currency

var req = new XMLHttpRequest();

req.open("GET","https://restcountries.com/v2/all");

req.send();

req.onload=function(){
    var res4=JSON.parse(req.response);
   var currency = res4.filter((element) => {
     for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
            return element;
        }
     }
   })
        console.log(currency);
    }


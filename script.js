//Get all the countries from the Asia continent /region using the Filter function


var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var data=request.response;
    var result=JSON.parse(data);
    var res=result.filter((ele)=>{console.log(ele.region)});
}

//Get all the countries with a population of less than 2 lakhs using Filter function


var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var data=request.response;
    var result=JSON.parse(data);
    var res=result.filter((ele)=>ele.population<200000);
    res.map((ele)=>{console.log(`${ele.population} : ${ele.name.common}`);});
   // console.log(res);
}

//Print the following details name, capital, flag using forEach function


var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var data=request.response;
    var result=JSON.parse(data);
   var res=result.forEach((ele)=>{console.log(`${ele.name.common} : ${ele.capital} : ${ele.region}`);});
}

//Print the total population of countries using reduce function


var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var data=request.response;
    var result=JSON.parse(data);
    var res=result.reduce((acc,cv)=>acc+cv.population,0);
    console.log(res);
} 

//Print the country which uses US Dollars as currency.



var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload = function(){
    var data=request.response;
    var result=JSON.parse(data);
    var res=result.filter((ele)=>{
        for(let key in ele.currencies){
            if(ele.currencies[key].code==="USD"){
                console.log(ele.name)
    }
}
    });
}


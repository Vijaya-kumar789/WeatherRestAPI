var res = fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json()).then((data1)=>bar(data1))
var container = document.createElement("div");
container.className= "container"
var row = document.createElement("div");
row.className= "row"



function bar (data1){
for (var i=0;i<data1.length;i++){
    var col = document.createElement("div");
    col.className= "col-lg-4 col-sm-12 "
   col.innerHTML =` <div class="card" style="width: 18rem;">
  <div class="card-header "><h6>${data1[i].name.common}</h6></div>
  
  
  <div class="card-body">
  <img src="${data1[i].flags.png}" class="card-img-top" alt="...">
    <p class="card-text">Region:${data1[i].region}</p>
    <p class="card-text">Capital:${data1[i].capital}</p>
    <p class="card-text">Country Code:${data1[i].cca3}</p>
    <a href="#" class="btn btn-primary" onclick="foo(${data1[i].latlng[0]}, ${data1[i].latlng[1]})">Click for Weather</a>
  
    </div>
</div>`


row.append(col)
container.append(row)
document.body.append(container)

}

}
function foo(lat,lon){
  var f_res = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fb565750bc25a6c7ff079b3631e07697`
 
  fetch(f_res)
  .then((data2)=>data2.json())
  .then((data1)=>{
    alert(`
    
The Current Humidity is ${data1.main.humidity}
The Current Pressure is ${data1.main.pressure}
The Current Temperature is ${Math.ceil(data1.main.temp-273.15)} °C `)
})
}





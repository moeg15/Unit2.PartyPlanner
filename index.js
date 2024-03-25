const names = document.querySelector("#names");
const dates = document.querySelector("#dates")
const times = document.querySelector("#times")
const locations = document.querySelector("#locations")
const description = document.querySelector("#descriptions")


const render = () => {
  arrayofnames.forEach((elm)=>{
    const newword= document.createElement('p')
    newword.innerText = elm
    names.append(newword)
  })


  arrayofdates.forEach((elm)=>{
    const newword= document.createElement('p')
    newword.innerText = elm
    dates.append(newword)
  })

  arrayoflocations.forEach((elm)=>{
    const newword= document.createElement('p')
    newword.innerText = elm
    locations.append(newword)
  })


  arrayofdescriptions.forEach((elm)=>{
    const newword= document.createElement('p')
    newword.innerText = elm
    description.append(newword)
  })


}


const arrayofnames = [];
const arrayofdates = [];
const arrayoflocations = [];
const arrayofdescriptions = [];
fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2402-FTB-ET-WEB-FT/events")
.then((suc)=>{
  console.log("yayyy",suc)
  return suc.json();
})
.then((data1)=>{
  console.log(data1.data)
  const obj = data1.data
  for(let i = 0; i < obj.length; i ++){
    console.log(obj[i].name)
    arrayofnames.push(obj[i].name)
    arrayofdates.push(obj[i].date)
    arrayoflocations.push(obj[i].location)
    arrayofdescriptions.push(obj[i].description)
  }
  render()
})
.catch((err)=>{
  console.log("error",err)
})
let url3="http://universities.hipolabs.com/search?name=";


let btn5 = document.querySelector(".btn5");
btn5.addEventListener("click",async()=>{
    let country=document.querySelector("input").value;
    console.log(country);
    let colleges = await getColleges(country);
    show(colleges);

});

function show(colleges){
    let list = document.querySelector("#list");
    list.innerText="";
    for(col of colleges){
    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
    }
}




async function  getColleges(country){
    try{
        let res = await axios.get(url3 + country );
        return res.data;
    }
    catch(e){
        console.log("error : ",e)
        return [];
    }
}
var tab1 = document.getElementById("tab1");
var tab2 = document.getElementById("tab2");
var przycisk = document.getElementById("b");
var wynik = document.getElementById("wynik");

przycisk.addEventListener("click", ()=>{
    var array1 = tab1.value.trim().split(",").map((i) => Number(i));
    var array2 = tab2.value.trim().split(",").map((i) => Number(i));

    var result = [];
    array1.forEach(element => {
        if(!array2.includes(element))
            result.push(element);
    }); 
    wynik.innerText = result.join(",");
});

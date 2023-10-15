
let inputText = document.querySelector("input")

inputText.addEventListener("keyup",()=>{
    inputText = document.querySelector("input").value.toLowerCase();
    // console.log(inputText.value.toLowerCase());
    let myTable = document.getElementById("myTable");
    let rows = myTable.getElementsByTagName("tr");

    for(let i=0; i<rows.length; i++){
        let td = rows[i].getElementsByTagName("td")[0];
        if(td){
            let tableTextValue = td.textContent || td.innerHTML;

            if(tableTextValue.toLowerCase().indexOf(inputText) > -1){
                rows[i].style.display = "block";
            }else{
                rows[i].style.display = "none";
            }
        }
    }
})
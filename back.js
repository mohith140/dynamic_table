var roll;var fname;var lname;var branch;

function fetch1(){
     roll = document.getElementById("roll").value;
 fname = document.getElementById("fname").value;
     lname = document.getElementById("lname").value;
 branch = document.getElementById("branch").value;
}
function submit(){
   
    fetch1();
    var table = document.getElementById("table");
    var tr = document.createElement("tr");
    fetch('http://localhost:3000/students',{method:'POST',body: JSON.stringify({
      "id": `${roll}`,
      "fname": `${fname}`,
      "lname": `${lname}`,
      "branch": `${branch}`
    })})
    .then((res)=>res.json())
    .then((res)=>console.log(res))
   
    tr.innerHTML = `
      <td>${roll}</td>
      <td>${fname}</td>
      <td>${lname}</td>
      <td>${branch}</td>
      <button onclick='Edit(this)'>Edit</button> <button onclick="Delete(this)">Delete </button>
    `;
    table.appendChild(tr);
    
  console.log("jk")

}
function Delete(this1){
    var row=this1.parentNode;
    console.log(this1.innerHTML+" "+this1.value+" "+this1.value)
    fetch(`http://localhost:3000/students/${row.querySelector('td:first-child').textContent}`,{method:'DELETE'})
    .then((res)=>res.json())
    .then((res)=>console.log(res))
   
    row.parentNode.removeChild(row);
}
function Edit(this1){
    fetch1();
    var row=this1.parentNode;
    var patchData={}
    if(roll!==''||roll!==undefined)
    patchData['id']=roll
    if(fname!==''||fname!==undefined)
      patchData[fname]=fname
    if(lname!==''||lname!==undefined)
      patchData[lname]=lname
    if(branch!==''||branch!==undefined)
      patchData[branch]=branch
    fetch(`http://localhost:3000/students/${row.querySelector('td:first-child').textContent}`,{method:'PATCH',body: JSON.stringify(patchData)})
    .then((res)=>res.json())
    .then((res)=>console.log(res))
   
    row.innerHTML = `
    <td>${roll}</td>
    <td>${fname}</td>
    <td>${lname}</td>
    <td>${branch}</td>
    <button onclick='Edit(this)'>Edit</button> <button onclick="Delete(this)">Delete </button>
  `;
}
function submit1(){
   
    fetch1();
    axios.post("",{roll,fname,lname,branch})

}

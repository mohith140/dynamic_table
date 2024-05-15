var roll;var fname;var lname;var branch;
function fetch(){
     roll = document.getElementById("roll").value;
 fname = document.getElementById("fname").value;
     lname = document.getElementById("lname").value;
 branch = document.getElementById("branch").value;
}
function submit(){
   
    fetch();
    var table = document.getElementById("table");
    var tr = document.createElement("tr");
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
    console.log(row)
    row.parentNode.removeChild(row);
}
function Edit(this1){
    fetch();
    var row=this1.parentNode;
    row.innerHTML = `
    <td>${roll}</td>
    <td>${fname}</td>
    <td>${lname}</td>
    <td>${branch}</td>
    <button onclick='Edit(this)'>Edit</button> <button onclick="Delete(this)">Delete </button>
  `;
}
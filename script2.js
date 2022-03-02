function adicionarTab() {

    let email2 = document.getElementById('email2').value;
    let password = document.getElementById('password').value;
    let table2 = document.getElementById("myTable2");

    let tableSize = table2.rows.length;
    let row = table2.insertRow(tableSize);
    let cell1 = row.insertCell(0); 
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    
    row.id = tableSize;

    let btnCode = "<button class='remove-btn' onclick='removerTab(this)'>Remover</button>";
    let edCode = "<button class='remove-btn' onclick='editarCadastro(this)' >Editar</button>";

    cell1.innerHTML = tableSize;
    cell2.innerHTML = email2;
    cell3.innerHTML = password;
    cell4.innerHTML = btnCode;
    cell5.innerHTML = edCode;

    document.getElementById('email2').value = "";
    document.getElementById('password').value = "";

    return false;
}


function removerTab(id){

    let row = id.parentNode.parentNode.id;
    row = document.getElementById(row);
    row.parentNode.removeChild(row); 

    return false;
}
function editarCadastro(myTable2) {
    selectedRow = myTable2.parentElement.parentElement;
    document.getElementById("email2").value = selectedRow.cells[1].innerHTML;
    document.getElementById("password").value = selectedRow.cells[2].innerHTML;

}
function valorEditado(newForm) {
    selectedRow.cells[1].innerHTML = newForm.email2;
    selectedRow.cells[2].innerHTML = newForm.password;
}
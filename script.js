function adicionarTab() {

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let livro = document.getElementById('livro').value;
    let table = document.getElementById("myTable");

    let tableSize = table.rows.length; 
    let row = table.insertRow(tableSize);
    let cell1 = row.insertCell(0); 
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    
    row.id = tableSize; 

    let btnCode = "<button class='remove-btn' onclick='removerTab(this)'>Remover</button>";
    let edCode = "<button class='remove-btn' onclick='editarCadastro(this)'>Editar</button>";

    cell1.innerHTML = tableSize;
    cell2.innerHTML = nome;
    cell3.innerHTML = email;
    cell4.innerHTML = telefone;
    cell5.innerHTML = livro;
    cell6.innerHTML = btnCode;
    cell7.innerHTML = edCode;

    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('telefone').value = "";
    document.getElementById('livro').value = "";

    return false;
}

function removerTab(id){

    let row = id.parentNode.parentNode.id; 
    row = document.getElementById(row); 
    row.parentNode.removeChild(row); 

    return false;
}
function editarCadastro(myTable) {
    selectedRow = myTable.parentElement.parentElement;
    document.getElementById("nome").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("telefone").value = selectedRow.cells[3].innerHTML;
    document.getElementById("livro").value = selectedRow.cells[4].innerHTML;
}
function valorEditado(newForm) {
    selectedRow.cells[1].innerHTML = newForm.nome;
    selectedRow.cells[2].innerHTML = newForm.email;
    selectedRow.cells[3].innerHTML = newForm.telefone;
    selectedRow.cells[4].innerHTML = newForm.livro;
}

function adicionarTab() {
  
    livro = document.getElementById('mytable3');
    let nomelivro = document.getElementById('nomelivro').value;
    let edicao = document.getElementById('edicao').value;
    let autor = document.getElementById('autor').value;
    let reserva = document.getElementById('reserva').value;
    let table3 = document.getElementById("myTable3");

    let tableSize = table3.rows.length; 
    let row = table3.insertRow(tableSize); 
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);


    row.id = tableSize;

    
    let btnCode = "<button class='remove-btn' onclick='removerTab(this)'>Remover</button>";
 
    let edCode = "<button class='remove-btn' onclick='editarLivro(this)'>Editar</button>";


    
    cell1.innerHTML = tableSize;
    cell2.innerHTML = nomelivro;
    cell3.innerHTML = edicao;
    cell4.innerHTML = autor;
    cell5.innerHTML = reserva;
    cell6.innerHTML = btnCode;
    cell7.innerHTML = edCode;

    
    document.getElementById('nomelivro').value = "";
    document.getElementById('edicao').value = "";
    document.getElementById('autor').value = "";
    document.getElementById('reserva').value = "";


    
    return false;
}


function removerTab(id){

    let row = id.parentNode.parentNode.id;
    row = document.getElementById(row);
    row.parentNode.removeChild(row); 

    return false;
}

function editarLivro(myTable3){

        selectedRow = myTable3.parentElement.parentElement;
        document.getElementById("nomelivro").value = selectedRow.cells[1].innerHTML;
        document.getElementById("edicao").value = selectedRow.cells[2].innerHTML;
        document.getElementById("autor").value = selectedRow.cells[3].innerHTML;
        document.getElementById("reserva").value = selectedRow.cells[3].innerHTML;
}
function valorEditado(newForm) {

        selectedRow.cells[1].innerHTML = newForm.nomelivro;
        selectedRow.cells[2].innerHTML = newForm.edicao;
        selectedRow.cells[3].innerHTML = newForm.autor;
        selectedRow.cells[3].innerHTML = newForm.reserva;
}

  

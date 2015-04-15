function addTable(data) {
	var table = document.createElement("table");
	table.classList.add('table');       
	document.body.appendChild(table);

	for (var i = 0; i < data.length; i++) { 
		addRow(table, data[i]);
	}
}


function addRow(table, d) {
	var row = table.insertRow();
	addCell(row, d.name);
	addCell(row, d.id);
	addCell(row, d.rightAscension);	
}

function addCell(row, val) {
	var cell = row.insertCell();
	cell.innerHTML = val;
}
 

function fetchJson() {
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               console.log(xmlhttp.responseText);
           }
    }
    xmlhttp.open("GET", "https://api.myjson.com/bins/1r3r5", true);
    xmlhttp.send();
}


fetchJson();



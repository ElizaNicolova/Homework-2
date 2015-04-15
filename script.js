function addTable(data) {
	var table = document.createElement("table");
	table.classList.add('table');       
	document.body.appendChild(table);

	for (var i = 0; i < data.length; i++) { 
		addRow(data[i]);
	}
}


function addRow(d) {
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
               addTable(data);
           }
    }

    xmlhttp.open("GET", "https://bitbucket.org/nedislav-denev/space-busters-nasa-app-challenge-2015/raw/b1072e0facea8861306666faaf15df7ed1d9db46/maxi-flux-tracker/www/demo-api/test.json", true);
    xmlhttp.send();
}


fetchJson();



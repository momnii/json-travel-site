// Variablen zur Aufnahme der JSON Daten
let sammlung;
let choice1;
let choice2;

//Anfrage an den Server
let request = new XMLHttpRequest();

request.open("GET", "data/collection.json", true);
request.responseType = "json";
request.send();
request.onload = function() {
    // Antwort des Servers wird auf die Variable gelegt    
    sammlung = request.response;
    console.log(sammlung);
    header(); // direkter Objektzugriff ohne Arraydurchlauf
    content(); // Zugriff auf Array innerhalb des Objektes
};

function header(){
    document.getElementById("ueberschrift").innerHTML = sammlung.collection.name;
    document.getElementById("sammlungBild").src = sammlung.collection.bild;
	document.getElementById("verantwortlich").innerHTML += sammlung.collection.verantwortlich;
	document.getElementById("url").innerHTML += sammlung.collection.url;
	document.getElementById("url").style.textDecoration ="underline";
}
// Zugriff auf Array innerhalb des Objektes ohne Auswahlkriterium
function content(){
    let items = sammlung.collection.item; // alle items
    console.log(items);
	
	document.getElementById("ausgabeContent").innerHTML = "<ul>";
	
    for (let i = 0; i < items.length; i++) { 
		
    document.getElementById("ausgabeContent").innerHTML += 
		"<li><span class='red'>" 
		+items[i].title +"</span> von " 
		
		+" brauchen Sie ein Budget von " 
		+items[i].price 
		+".</li>";
    }
	
	document.getElementById("ausgabeContent").innerHTML += "</ul>";
}

// Zugriff auf Array items mit 1 Auswahlkriterium
function filtern(choice){
	
	let items = sammlung.collection.item; // alle items
    
 //Erzeugen und Belegen eines Arrays, das nur die items aufnimmt, die den Kriterien entsprechen   
    let filtertItems = items.filter(function (dummy) {
        return dummy.format === choice;
    });
	//Kontrollausgabe
    console.log(filtertItems);
	
	if (filtertItems.length === 0){
        document.getElementById("ausgabeContentFilter").innerHTML = "<br>Die Suche ergab keinen Treffer.";
    }else {
		// Überschrift einblenden
		document.getElementById("headline1").style.display = "block";
    	//Durchlauf durch das Array
	
		//document.getElementById("ausgabeContentFilter").innerHTML = "";
    
    	document.getElementById("ausgabeContentFilter").innerHTML = "<ul>";
	
    	for (let i = 0; i < filtertItems.length; i++) { 
		
    	document.getElementById("ausgabeContentFilter").innerHTML += 
			"<li> <span class='red'>Für eine Reise nach " 
			+ filtertItems[i].format +"</span>" 
			
			+" brauchen Sie einen Budget von " 
			+filtertItems[i].price 
			+".</li>";
    	}
		document.getElementById("ausgabeContentFilter").innerHTML += "</ul>";
    }
}

// Zugriff auf Array items mit 2 Auswahlkriterien
function ersteAuswahl(ersteAuswahl){
	choice1 = ersteAuswahl;
	console.log(choice1);
}

function zweiteAuswahl(zweiteAuswahl){
	choice2 = zweiteAuswahl;
	console.log(choice2);
}

function filtern2aruments(){
	
	let items = sammlung.collection.item;
	
	let filtertItems= items.filter(function (dummy) {
	return dummy.type === choice1 && dummy.season === choice2;
	});
	
	console.log(filtertItems);
	document.getElementById("ausgabeContentFilter2").innerHTML = "";
	// Abfrage, ob das Array mit den Treffern leer, weil dann keine Ergebnisliste ausgegeben werden kann
	if (filtertItems.length === 0){
		document.getElementById("ausgabeContentFilter2").innerHTML = "<br>Die Suche ergab keinen Treffer.";
	}else {
		// Überschrift einblenden
		document.getElementById("headline2").style.display = "block";
		
		for (let i = 0; i < filtertItems.length; i++) { 
		document.getElementById("ausgabeContentFilter2").innerHTML += "<br>Recommendation: Visit"  + filtertItems[i].format + "<br>for " + filtertItems[i].type + "<br>in " +filtertItems[i].season +"<br>";
		}
	}
}









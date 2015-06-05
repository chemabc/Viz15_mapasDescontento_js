
function createTimeGraphPerCatAndMonth(data){
	
	console.log(data)
	//Data es un diccionario
	//{"19830126": 0, "19830127": 0,...}
	
	var categories = ['categories'];
	
	
	for (var key in data) {
  		if (data.hasOwnProperty(key)) {
    		categories.push(key);
    		createTimeGraphPerCat(data[key], key)
  		}	
	}
	
	
};

function createTimeGraphPerCat(dataPerCat, title) {
	//console.log("Datos per category: " + title,  dataPerCat)
	console.log("Num datos " + title + ": " + Object.keys(dataPerCat).length)
	
	var keys = ['keys'];
	var things = ['things'];
	var tags = ['tags']
	var num = 0
	
	for (var key in dataPerCat) {
  		if (dataPerCat.hasOwnProperty(key)) {
    		keys.push(key);
    		//console.log(key)
    		things.push(dataPerCat[key].things);
    		date = new Date();
    		date.setFullYear(dataPerCat[key].year);
    		date.setMonth(dataPerCat[key].month);
    		tags.push(date)
    		//console.log(data[key].things)
    		//console.log(tag)
    		num += 1;
  		}	
  		//if(num >=50) break;
	}	
	
	
	//console.log("Num datos: "+ things.length)
	var chart_ = c3.generate({
	    bindto: '#chart_'+ String(title),
	    data: {
	    	x: 'tags',
	      columns: [
	      	tags,
	        things
	      ]
	    },	    	
	    axis:{
	    	x: {
	    		type: 'timeseries',
	    		tick:{
	    			format:'%m-%Y'
	    		}
	    	}
	    }
	});
	
	
	
};
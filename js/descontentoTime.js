window.onload = function(){
	
	console.log("descontentoTime loading" );
	
	var data = JSON.parse(jotason); //require('../dataJson/test.json'); //with path
	console.log("Data length: " + data[0].length);
	console.log("Keys length:" + Object.keys(data[0]).length)
	createTimeGraph(data[0])
	
	var dataCatYMes = JSON.parse(jotasonCatYMes);
	console.log("Keys length:" + Object.keys(dataCatYMes).length)
	createTimeGraphPerCatAndMonth(dataCatYMes)
};

function createTimeGraph(data){
	//Data es un diccionario
	//{"19830126": 0, "19830127": 0,...}
	
	var keys = ['keys'];
	var things = ['things'];
	var tags = ['tags']
	var num = 0
	
	for (var key in data) {
  		if (data.hasOwnProperty(key)) {
    		keys.push(key);
    		//console.log(key)
    		things.push(data[key].things);
    		date = new Date();
    		date.setFullYear(data[key].year);
    		date.setMonth(data[key].month);
    		tags.push(date)
    		//console.log(data[key].things)
    		//console.log(tag)
    		num += 1;
  		}	
  		//if(num >=50) break;
	}	
	
	console.log("Num datos: "+ things.length)
	var chart = c3.generate({
	    bindto: '#chart_global',
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
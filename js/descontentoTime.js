window.onload = function(){
	
	console.log("descontentoTime loading" );
	
	var data = JSON.parse(jotason); //require('../dataJson/test.json'); //with path
	console.log("Data length: " + data[0].length);
	console.log("Keys length:" + Object.keys(data[0]).length)
	createTimeGraph(data[0])
	
	var dataCatYMes = JSON.parse(jotasonCatYMes);
	console.log("Keys length:" + Object.keys(dataCatYMes).length);
	createTimeGraphPerCatAndMonth(dataCatYMes);
};

function createTimeGraph(data){
	//Data es un diccionario
	//{"19830126": 0, "19830127": 0,...}
	
	var keys = ['keys'];
	var things = ['Suma Descontentos'];
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
	var specificDates = [
		[new Date(1976, 12), 'Referendum Ley Reforma Política'], 
		[new Date(1978, 12), 'Referendum Constitución Española'],
		[new Date(1986, 3), 'Referendum OTAN'],
		[new Date(2005, 2), 'Referencum Constitución Europea'],
		[new Date(1987, 6), 'Elecciones parlamento europeo'],
		[new Date(1989, 6), 'Elecciones parlamento europeo'],
		[new Date(1994, 6), 'Elecciones parlamento europeo'],
		[new Date(1999, 6), 'Elecciones parlamento europeo'],
		[new Date(2004, 6), 'Elecciones parlamento europeo'],
		[new Date(2009, 6), 'Elecciones parlamento europeo'],
		[new Date(2014, 5), 'Elecciones parlamento europeo'],
		[new Date(1977, 6), 'Elec. generales: Adolfo Suarez - UCD'],
		[new Date(1976, 5), 'Afdolfo Suarez nombrado por el Rey para reforma política'],
		[new Date(1979, 3), 'Elec. Gen.: Adolfo Suarez - UCD'],
		[new Date(1982, 10), 'Elec. Gen.: Felipe González - PSOE'],
		[new Date(1986, 6), 'Elec. Gen.: Felipe González - PSOE'],
		[new Date(1989, 10), 'Elec. Gen.: Felipe González - PSOE'],
		[new Date(1993, 6), 'Elec. Gen.:Felipe González - PSOE'],
		[new Date(1996, 3), 'Elec. Gen.: José María Aznar - PP'],
		[new Date(2000, 3), 'Elec. Gen.: José María Aznar - PP'],
		[new Date(2004, 3), 'Elec. Gen.: José Luis Rodríguez Zapatero - PSOE'],
		[new Date(2008, 3), 'Elec. Gen.: José Luis Rodríguez Zapatero - PSOE'],
		[new Date(2011, 11), 'Elec. Gen.: Mariano Rajoy - PP']
		
	];
	
	console.log("Num datos: "+ things.length)
	var chart = c3.generate({
	    bindto: '#chart_global',
	    size:{
	    	height : 250,
	    	width : 850
	    },
	    data: {
	    	x: 'tags',
	      columns: [
	      	tags,
	        things
	      ],
	      type: 'area',
	      colors: {
	      	'Suma Descontentos' : '#000000'
	      }
	    },
	    grid: {
        	x: {
	            lines: [
	                /*{value: specificDates[0][0], text: specificDates[0][1]},
	                {value: specificDates[1][0], text: specificDates[1][1]},
	                {value: specificDates[2][0], text: specificDates[2][1]},
	                {value: specificDates[3][0], text: specificDates[3][1]},
	                {value: specificDates[4][0], text: specificDates[4][1]},
	                {value: specificDates[5][0], text: specificDates[5][1]},
	                {value: specificDates[6][0], text: specificDates[6][1]},
	                {value: specificDates[7][0], text: specificDates[7][1]},
	                {value: specificDates[8][0], text: specificDates[8][1]},
	                {value: specificDates[9][0], text: specificDates[9][1]},
	                {value: specificDates[10][0], text: specificDates[10][1]},*/
	                {value: specificDates[11][0], text: specificDates[11][1]},
	                {value: specificDates[12][0], text: specificDates[12][1]},
	                {value: specificDates[13][0], text: specificDates[13][1]},
	                {value: specificDates[14][0], text: specificDates[14][1]},
	                {value: specificDates[15][0], text: specificDates[15][1]},
	                {value: specificDates[16][0], text: specificDates[16][1]},
	                {value: specificDates[17][0], text: specificDates[17][1]},
	                {value: specificDates[18][0], text: specificDates[18][1]},
	                {value: specificDates[19][0], text: specificDates[19][1]},
	                {value: specificDates[20][0], text: specificDates[20][1]},
	                {value: specificDates[21][0], text: specificDates[21][1]},
	                {value: specificDates[22][0], text: specificDates[22][1]}
	                
	            ]
        	}
    	},  	    	
	    axis:{
	    	x: {
	    		label:{
	    			text: '',
	    			position: 'outer-center'
	    		},
	    		type: 'timeseries',
	    		tick:{
	    			//format:'%m-%Y'
	    			count: 40,
	    			format: function(x) {return x.getFullYear()}//'%m-%Y'
	    		}
	    	},
	    	y: {
	            label: {
	                text: 'Gente descontenta (miles)',
	                position: 'outer-middle'
	            },
	            max: 550000,
	            min: 0,
	            padding: {top: 0, bottom:0},
	            tick:{
		    			//format:'%m-%Y'
		    			count: 10,
		    			format: function(x) {return Math.round(x/1000);}//'%m-%Y'
		    		}
        	}
	    },
	    zoom: {
	    	enabled: true
	    },
	    tooltip: {
	    	format: {
	    		title: function(d) {return  "Fecha (mm/yy): "+ d.getMonth() + "-" + d.getFullYear(); },
	    		value: function(value, ratio, id){
	    			return value;
	    		}
	    		
	    	}
	    }
	});
	
	
};
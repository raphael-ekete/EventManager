const express = require('express');
	router = express.Router();

global.events = [
	{
		id:1,
		name: "Marriage",
		date: "08/06/2018"
		// add center name: 
	}
];

// Get all events on a center using center.id and center.name
/* router.get('/', function(req, res){ 
	return res.json({
		center: global.center,
		error: false
	});
}); */

// Create an event
router.post('/', function(req, res){
	if (!req.body.name){
		return res.json({
			message: 'name is missing',
			error: true
		});
	}
	global.events.push(req.body);
	return res.json({
		message: 'Success',
		error: false
	});
});

// Edit an event
router.put('/:eventsid', function(req, res){
	for(let events_count=0; events_count < global.events.length; events_count++){
		if(global.events[events_count].id ===parseInt(req.params.eventsid)){
			global.events[events_count].name = req.body.name;
			global.events[events_count].date = req.body.date;
			return res.json({
				message: 'Success',
				error: false
			});
		}
		
	}
	return res.status(404).json({
		message: 'Center not found',
		error: true
	});
})

// Get a center
router.get('/:centerid', function(req, res){
	for(let center_count=0; center_count < global.center.length; center_count++){
		if(global.center[center_count].id ===parseInt(req.params.centerid)){
			return res.json({
				center: global.center[center_count],
				error: false
			});
		}
		
	}
	return res.status(404).json({
		message: 'Center not found',
		error: true
	});
})

module.exports = router;

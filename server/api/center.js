const express = require('express');
	router = express.Router();

global.center = [
	{
		id:1,
		name: "Eden Hotels",
		location: "Surulere",
		price: "N320,000",
		capacity: "500 seaters",
		projector: "Yes",
		car_space: "50 cars",
		type:  "Enclosed",
		security: "Yes"
	},
	{
	    id: 2,
	    name: "Trump Hotels",
	    location: "Surulere",
	    price: "450,000",
	    capacity: "500 seaters",
	    projector: "Yes",
	    car_space: "100 cars",
	    type: "Enclosed",
	    security: "Yes"
	}
];
// Get all centers
router.get('/', function(req, res){ 
	return res.json({
		center: global.center,
		error: false
	});
});

// Add a new center
router.post('/', function(req, res){
	if (!req.body.name){
		return res.json({
			message: 'name is missing',
			error: true
		});
	}
	global.center.push(req.body);
	return res.json({
		message: 'Success',
		error: false
	});
});

// Modify the details of a center
router.put('/:centerid', function(req, res){
	for(let center_count=0; center_count < global.center.length; center_count++){
		if(global.center[center_count].id ===parseInt(req.params.centerid)){
			global.center[center_count].name = req.body.name;
			global.center[center_count].location = req.body.location;
			global.center[center_count].price = req.body.price;
			global.center[center_count].capacity = req.body.capacity;
			global.center[center_count].projector = req.body.projector;
			global.center[center_count].car_space = req.body.car_space;
			global.center[center_count].type = req.body.type;
			global.center[center_count].security = req.body.security;
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

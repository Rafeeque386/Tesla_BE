const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    headers: ['Content-Type', 'Authorization'],
}));

// Define your car data
const teslaCars = [
    {
        id: 1,
        name: 'Model S',
        description: 'The Tesla Model S is a full-size all-electric luxury sedan developed by Tesla.',
        image: '/src/assets/model-s.jpg',
        price: '$79,990',
        range: '412',
        topSpeed: '155',
        acceleration: '3.1',
        images: {
            red: '/src/assets/red-tesla.jpg',
            black: '/src/assets/black-tesla.jpg',
            blue: '/src/assets/blue-tesla.jpg',
            white: '/src/assets/white-tesla.jpg',
            grey: '/src/assets/grey-tesla.jpg',
        },
    },
    {
        id: 2,
        name: 'Model 3',
        description:
            'The Tesla Model 3 is a compact all-electric four-door luxury sedan developed by Tesla.',
        image: '/src/assets/model-3.jpg',
        price: '$39,990',
        range: '263',
        topSpeed: '140',
        acceleration: '5.3',
        images: {
            red: '/src/assets/red-tesla.jpg',
            black: '/src/assets/black-tesla.jpg',
            blue: '/src/assets/blue-tesla.jpg',
            white: '/src/assets/white-tesla.jpg',
            grey: '/src/assets/grey-tesla.jpg',
        },
    },
    {
        id: 3,
        name: 'Model X',
        description:
            'The Tesla Model X is a mid-size all-electric luxury crossover SUV developed by Tesla.',
        image: '/src/assets/model-x.jpg',
        price: '$89,990',
        range: '360',
        topSpeed: '155',
        acceleration: '4.4',
        images: {
            red: '/src/assets/red-tesla.jpg',
            black: '/src/assets/black-tesla.jpg',
            blue: '/src/assets/blue-tesla.jpg',
            white: '/src/assets/white-tesla.jpg',
            grey: '/src/assets/grey-tesla.jpg',
        },
    },
    {
        id: 4,
        name: 'Model Y',
        description:
            'The Tesla Model Y is a mid-size all-electric luxury crossover SUV developed by Tesla.',
        image: '/src/assets/model-y.jpg',
        price: '$49,990',
        range: '326',
        topSpeed: '135',
        acceleration: '4.8',
        images: {
            red: '/src/assets/red-tesla.jpg',
            black: '/src/assets/black-tesla.jpg',
            blue: '/src/assets/blue-tesla.jpg',
            white: '/src/assets/white-tesla.jpg',
            grey: '/src/assets/grey-tesla.jpg',
        },
    },
];

// API endpoint to get all cars
app.get('/cars', (req, res) => {
    res.json(teslaCars);
});

// API endpoint to get a car by ID
app.get('/cars/:id', (req, res) => {
    const carId = parseInt(req.params.id);
    const car = teslaCars.find((car) => car.id === carId);
    if (!car) {
        res.status(404).json({ message: 'Car not found' });
    } else {
        res.json(car);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


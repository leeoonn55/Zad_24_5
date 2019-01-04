const calculateDistancePoints = (distance, hillSize, kPoint) => {
    if (hillSize === 'normal') {
        return (distance - kPoint) * 2 + 60;
    }
    else if (hillSize === 'large') {
        return (distance - kPoint) * 1.8 + 60;
    }
    else if (hillSize === 'mamoth') {
        return (distance - kPoint) * 1.2 + 120;
    }
    else {
        return 'Not correct hillSize';
    }
};

module.exports = calculateDistancePoints;
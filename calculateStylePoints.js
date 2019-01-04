const calculateStylePoints = (styleNotes) => {
    var sum = 0;
    const max = Math.max(...styleNotes);
    const min = Math.min(...styleNotes);
    for (let i = 0; i < styleNotes.length; i++) {
        sum += styleNotes[i];
    }
    return sum - min - max;
};

module.exports = calculateStylePoints;
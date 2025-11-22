const removeFromArray = function(array, ...itemsToBeRemoved) {
    return array.filter(item => {return !itemsToBeRemoved.includes(item)});
};

// Do not edit below this line
module.exports = removeFromArray;

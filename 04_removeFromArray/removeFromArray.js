const removeFromArray = function(array, ...element) {
    let newArray = ([])
    array.forEach((item) => {
        if (!element.includes(item)) {
            newArray.push(item)
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

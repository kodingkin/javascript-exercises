const findTheOldest = function(arr) {
    const res = arr.sort((a, b) => 
        ((b.yearOfDeath ? (b.yearOfDeath) : (new Date().getFullYear())) - b.yearOfBirth) 
        - 
        ((a.yearOfDeath ? (a.yearOfDeath) : (new Date().getFullYear())) - a.yearOfBirth)
    )
    return res[0];
};

// Do not edit below this line
module.exports = findTheOldest;

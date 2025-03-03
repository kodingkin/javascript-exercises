const leapYears = function(int) {
    // check whethe the input is valid or not
    if (typeof int != 'number' || int < 0 || int != Math.floor(int)) {
        return 'ERROR';
    // check if the input fit the first two requirement
    } else if (int % 4 == 0 && int % 100 != 0) {
        return true;
    // check if input fit the second 
    } else if (int % 400 == 0) {
        return true;
    // return false for those input which none of the requirement
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

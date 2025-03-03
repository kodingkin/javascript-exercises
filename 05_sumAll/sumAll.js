const sumAll = function(firstInt, secondInt) {
    // check whether the input is valid or not
    if (typeof firstInt != 'number' || 
        typeof secondInt != 'number' || 
        firstInt < 0 || 
        secondInt < 0 || 
        firstInt != Math.floor(firstInt) || 
        secondInt != Math.floor(secondInt)) {
        return 'ERROR';
    } else {

        // find out which is the larger integer
        let largerInt = 
        (firstInt > secondInt) ? firstInt :
        (secondInt > firstInt) ? secondInt:
        firstInt;

        let smallerInt = 
        (firstInt > secondInt) ? secondInt :
        (secondInt > firstInt) ? firstInt:
        secondInt;

        // if (firstInt > secondInt) [firstInt, secondInt] = [secondInt, firstInt]
        
        // calculate the sum
        let sum =0;
        for (let i = smallerInt; i<=largerInt; i++) {
            sum += i;
        }

        return sum;
    }




};

// Do not edit below this line
module.exports = sumAll;

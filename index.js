const returnFirstTwoDrivers= firstDrivers => firstDrivers.slice(0, 2);

const returnLastTwoDrivers= lastDrivers => lastDrivers.slice(-2);

const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier= function(multiplier){return fareMultiplier =fare =>fare * multiplier};

const fareDoubler = function createFareMultiplier(fare){
    return (fare * 2)
}

const fareTripler = function createFareMultiplier(fare){
    return (fare * 3)
}

function selectDifferentDrivers(arrayOfDrivers, fn){
    return fn(arrayOfDrivers)
}


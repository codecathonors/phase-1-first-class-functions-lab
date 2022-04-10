const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);

const returnLastTwoDrivers = (drivers) => drivers.slice(2,4);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(n) {
    return fare => (fare*n)
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers (arr, callback) => {
    return (arr => callback);
}

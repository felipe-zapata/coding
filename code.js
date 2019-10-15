function resultAges(ages) {
    // 1. numbers divisable by 3
    // 2. square them
    // 3. sum them

    const divisableByThree = (val) => {
        return Number.isInteger(val/3);
    }

    const squared = (val) => {
        return val**2
    };

    const sum = (acc, curr) => {
        return acc + curr
    };

    return ages
    .filter(divisableByThree)
    .map(squared)
    .reduce(sum);;
}

module.exports = {
    resultAges
}
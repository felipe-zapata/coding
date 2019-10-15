function arrayMedian(A) {
    const even = A.length % 2 === 0;
    const sorted = A.sort();
    if(even) {
        const evenIndexA = A.length/2;
        const evenIndexB = evenIndexA - 1;
        return twoNumbersMean(sorted[evenIndexA], sorted[evenIndexB]);
    } else {
        return sorted[Math.floor(A.length/2)];
    }
}

function sliceArray(val, index, array) {
    return array.slice(0, index + 1);
}

function twoNumbersMean(A, B) {
    return (A+B)/2;
}

function multipleArrayMedian(A) {
    return A
        .map(sliceArray)
        .map(arrayMedian);
}

module.exports = {
    arrayMedian,
    twoNumbersMean,
    multipleArrayMedian
}
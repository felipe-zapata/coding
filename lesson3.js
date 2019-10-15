function frogJmp(X, Y, D) {
    return Math.ceil((Y-X)/D);
}

function permMissingElem(A) {
    if(A.length !== 0) {
        const desired = (A.length+2)*(A.length+1)/2;
        const arraySum = A.reduce((acc, curr) => {
            return acc + curr;
        });
        return desired - arraySum;
    } else {
        return 1;
    }
}

function tapeEquilibrium(A) {
    let minimum = Number.POSITIVE_INFINITY;
    const totalSum = A.reduce((acc, curr) => {
        return acc + curr;
    });
    let sumA = 0;
    let sumB = totalSum;
    
    A.forEach((curr) => {
        sumA += curr;
        sumB -= curr;
        if (Math.abs(sumA - sumB) < minimum) {
            minimum = Math.abs(sumA - sumB);
        }
    });

    return minimum
}

module.exports = {
    frogJmp,
    permMissingElem,
    tapeEquilibrium
};
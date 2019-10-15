function permCheck(A) {
    //75%
    /*const desired = (A.length+1)*(A.length)/2;
    const arraySum = A.reduce((acc, curr) => {
        return acc + curr;
    });
    return desired === arraySum ? 1 : 0;*/
    //75%
    /*const sorted = A.sort();
    const filtered = sorted.filter((val, index) => val - 1 !== index);
    return filtered.length === 0 ? 1 : 0;*/
    //75% again xD
    const sorted = A.sort();
    const filtered = sorted.filter((val, index) => val - 1 !== index);
    const desired = (A.length+1)*(A.length)/2;
    const arraySum = A.reduce((acc, curr) => {
        return acc + curr;
    });
    return desired === arraySum && filtered.length === 0 ? 1 : 0;
}

function maxCounters(N, A) {
    //88%
    Array.prototype.customFill = function(value) {
        for(let i = 0; i < this.length ; i++) {
            this[i] = value;
        }
        return this;
    };
    let counters = new Array(N).customFill(0);
    let maximum = 0;

    A.forEach(element => {
        if(element <= N) {
            counters[element-1]++;
            maximum = maximum > counters[element-1] ? maximum : counters[element-1];
        } else {
            counters.customFill(maximum);
        }
    });

    return counters;
}

module.exports = {
    permCheck,
    maxCounters
}
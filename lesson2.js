function oddOcurrencesInArray(givenArray) {
    /*let sortedArray = givenArray.sort();
    let odd = 0;
    while(odd == 0) {
        if(sortedArray[1] && sortedArray[0] === sortedArray[1]) {
            sortedArray.splice(0,2);
        } else {
            odd = sortedArray[0];
        }
    }
    return odd;*/
    return givenArray.reduce((acc, curr) => {
        return acc ^= curr;
    });
};

function cyclicRotation(A, K) {
    function rotate(givenArray){
        const poped = givenArray.pop();
        givenArray.unshift(poped);
        return givenArray;
    }
    
    if(A.length !== K && A.length > 0) {
        for (let i = 0; i < K ; i++) {
            A = rotate(A);
        }
    }
    
    return A;
};

module.exports = {
    oddOcurrencesInArray,
    cyclicRotation
};
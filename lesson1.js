function binaryGap(N) {
    const binaryN = (+N).toString(2);
    const endWithOne = binaryN.slice(-1) == '1';
    const splitted = binaryN.split('1');
    const cleaned = splitted.filter((value) => value != '');
    const ifEnded = endWithOne ? cleaned : cleaned.slice(0, cleaned.length - 1);
    const count = ifEnded.map((value) => {
        return value.length
    });
    return count.length === 0 ? 0 : Math.max(...count);
};

module.exports = {
    binaryGap
};
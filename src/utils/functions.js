const concatArrayElems = (arr) => {
    const result = [];
    const backtrack = (i, arr) => {
        if (i === arr.length) {
            result.push(arr.join(''));
            return;
        }
        for (let j = i; j < arr.length; j++) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            backtrack(i + 1, arr);
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    backtrack(0, arr);
    return result;
};

module.exports = { concatArrayElems };

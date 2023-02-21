function autoType(types, words) {
    const stopType = false; // 用于停止自动打字的
    let index = 0;
    let tempWords = "";
    let isNext = true;
    let time = 100;

    const startType = setInterval(function () {
        if (stopType) {
            // 如果需要停止打字
            clearInterval(startType);
        }
        if (tempWords.length === 0) {
            // 如果删完了，就开始
            if (isNext) {
                index++;
                index = index % types.length;
                isNext = false;
            }
            tempWords = types[index].substring(0, tempWords.length + 1);
        } else if (
            tempWords.length === types[index].length &&
            isNext === false
        ) {
            // 如果已经到头了，就要删去
            setTimeout(() => {
                isNext = true;
            }, 1000);
        } else {
            // 如果既没删完也没显示完
            if (isNext) {
                // 如果是在减少
                tempWords = tempWords.substring(0, tempWords.length - 1);
                time = 50;
            } else {
                // 如果在增多
                time = 100;
                tempWords = types[index].substring(0, tempWords.length + 1);
            }
        }
        words.innerHTML = tempWords;
    }, time);
}

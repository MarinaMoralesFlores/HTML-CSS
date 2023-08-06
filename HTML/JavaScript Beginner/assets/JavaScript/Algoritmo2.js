// Declaring a comparison function
function compare(value1, value2) {
    if (value1 < value2) {
    return -1;
    } else if (value1 > value2) {
    return 1;
    } else {
    return 0;
    }
    }

    let numbers = [0, 1, 5, 10, 15];
    numbers.reverse();

    moreNumbers.sort(compare);
    alert(moreNumbers); // 0,1,5,10,15
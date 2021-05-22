function birthdayCakeCandles(candles) {
    // filter for all of the tallest candles and return length of the filtered array
    const max = Math.max(...candles)
    const numOfCandles =  candles.filter(c => c === max).length
    
    return numOfCandles
}

birthdayCakeCandles([3,2,1,3]);
birthdayCakeCandles([4,4,1,3]);

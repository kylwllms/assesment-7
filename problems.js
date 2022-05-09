const addtoZero = arr => {
    if (arr.length < 2){
        return false;
    } else {
        for(let i =0; i < arr.length; i++){
            for(let j=1; j<arr.length; j++){
                if(arr[i] + arr[j] ===0){
                    return false;
                }
            }
        }
        return true;
    }
}
// 0(n^2)
const hasUniqueChars = str => {
    const strSet = new Set(str)
    return( strSet === str ? true: flase)
}
//0
const isPangram = str => {
    let panRes = true
    let nArr = str.split('')
    let abcArr= [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    abcArr.forEach(letter => {
      if(!nArr.includes(letter)){
        panRes =false;
      }
    })
    return panRes;
  }
  //0(n^2)

  const findLongestWord = arr => {
    let longestWord =''
    arr.forEach(word => {
        if(word.length > longestWord.length){
            longestWord = word;
        }
    })
    return longestWord;
}
//0(n)
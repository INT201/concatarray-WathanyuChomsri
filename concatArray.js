const { template } = require('@babel/core')

function concatArray(array1, array2) {
  //code here
  // array1=[5, 10, 15]
  // array2=[2, 4, 6, 7]
  if(array1 && array2 == null || undefined){
    return undefined
  }else if (array1 && array2 == []){
    return []
  }else if(array1 || array2 ==[] || null || undefined){
    return array1.length + array2.length
  }

  return concatArray(array1, array2)
}

module.exports = concatArray

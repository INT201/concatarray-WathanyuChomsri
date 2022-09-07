//const { template } = require('@babel/core')

function concatArray(array1, array2) {
  //code here
  array1=[]
  array2=[]
  if(array1 && array2 == null || undefined){
    return undefined
  }else if (array1 && array2 == []){
    return []
  }else if(array1 || array2 ==[] || null || undefined){
    return array1.length + array2.length
  }

  return concatArray(array1, array2)
}

//module.exports = concatArray

// Code your solution in this file!
function distanceFromHqInBlocks (block){
  let result
  if (block > 34){
    result = block - 42
  }
  else {
    result = (block - 42) * -1
  }
  return result
}
function distanceFromHqInFeet(feet){
  let result = distanceFromHqInBlocks(feet);
  let joe = result * 264
  return joe
}
function distanceTravelledInFeet(start, end){
  let result
  if (end > 28){
    result = (end - start) * 264
  }
  else {result = (start - end )*264}
  return result
}
function calculatesFarePrice(start, destination){
  let result = distanceTravelledInFeet(start, destination);
  if (result > 400 && result < 2000 ){
    result = 2.56
  }
  else if (result > 2000 && result < 2500){
    result = 25
  }
  else if (result > 2500){
    result = "cannot travel that far"
  }
  else {
    result = 125
  }
  return result
}

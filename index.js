// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  const newArray = drivers.filter(function(item) {return item.revenue > revenue})
  return newArray
}

function driverNamesWithRevenueOver(drivers, revenue){
  const newArray = drivers.filter(function(item) {return item.revenue > revenue})
  const finalArray = newArray.map(function(item) {return item.name})
  return finalArray
}

function exactMatch(drivers, attribute){
  const newArray = drivers.filter(function(item) {return item === attribute })
  return newArray
}

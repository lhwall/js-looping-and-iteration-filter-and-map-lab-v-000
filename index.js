// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  const newArray = drivers.filter(function(item) {return item.revenue > revenue})
  return newArray
}

function driverNamesWithRevenueOver(drivers, revenue){
  const newArray = drivers.filter(function(item) {
    return item.name if item.revenue > revenue
  end })
  return newArray
}

"use strict";


// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(`${items[0]} ${i}`);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  const result = []
  for (const i in items) {
    if (i %2 === 0) {
      result.push(i)
    }
    console.log(result)
    } 
}


// 3. smallestNItems
function smallestNItems(items, n) {
  const sorted_items == items.sort((a, b) => a - b).slice(0,n);
  sorted_items.reverse() ;
  console.log(sorted_items);
}

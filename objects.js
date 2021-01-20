"use strict";


function countWords(phrase) {
  const (wordCounts = {})
  for (const word of phrase.split(' ')) {
    if (wordCounts[word]) {
      wordsCounts[word] += 1;
    } else {
       wordCounts[word] = 1;
    }

  return wordCounts
  } 
} 


function getMelonsAtPrice(price) {
  const melonPrices = {
    2.50 : ['Cantaloupe' , 'Honeydew'];
    2.95 : ['watermelon'];
    3.25 : ['Musk', 'Crenshaw'];
    14.25 : ['Christmas'];
  } ;
  if (!melonPrices[price]) {
    return melonPrices[price].sort();
  } 
}

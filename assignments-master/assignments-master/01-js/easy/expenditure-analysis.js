/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
 
  let mp={};
  for (let trx of transactions) {
    let cat=trx.category;
    let price=trx.price;
    if(cat in mp)mp[cat]+=price;
    else mp[cat]=price;
  }

  let ans=[];
  for( let key in mp)
  {
     let obj={};
     obj.category=key;
     obj.totalSpent=mp[key];
     ans.push(obj);
  }

  return ans;
}

module.exports = calculateTotalSpentByCategory;

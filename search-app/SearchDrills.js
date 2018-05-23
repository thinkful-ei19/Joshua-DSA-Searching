'use strict';

//Find a book

//The best way to implement a search through a database containing dewey decimal values would be to run a binary search on the database. This would ensure that the run-time complexity of the operation remained efficient and would allow the person running the search to search through thousands of values without issue. 

//The steps you would take in using the algorithm to run this search are as follow:
// Get the total number of books in the database
// Sort the books numerically from lowest to highest
// Begin your search at the middle value
// Based on whether the book you are searching for has a higher value dewey decimal or a lower value dewey decimal, reduce the sample of data being searched through by eliminating the data on either the right or left side of the book in the middle. 
//Repeat the process until you find the book in question.


class BinarySearchTree {
  constructor(key=null, value=null, parent=null){
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
      
  insert(key, value) {
    if(this.key === null) {
      this.key = key;
      this.value = value;
    } else if(key < this.key) { //flip > back after testing isBST
      if(this.left === null) {
        this.left = new BinarySearchTree(key, value, this);
      }
      
      else {
        this.left.insert(key, value);
      }
    }
      
    else {
      if(this.right === null) {
        this.right = new BinarySearchTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }
      
  find(key) {
    if(this.key === key){
      return this.value;
    }
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }
    else if (key > this.key && this.rigt) {
      return this.right.find(key);
    }
    else {
      throw new Error('Key Error');
    }
  }
      
  remove(key) {
    if(this.key === key) {
      if(this.left && this.right){
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      else if (this.left) {
        this._replaceWith(this.left);
      }
      else if (this.right) {
        this._replaceWith(this.right);
      }
      else {
        this._replaceWith(null);
      }
    }
    else if( key < this.key && this.left) {
      this.left.remove(key);
    }
    else if(key > this.key && this.right) {
      this.right.remove(key);
    }
    else {
      throw new Error('Key Error');
    }
  }
      
  _replaceWith(node) {
    if(this.parent) {
      if (this === this.parent.left) {
        this.parent.left = node;
      }
      else if (this === this.parent.right) {
        this.parent.right = node;
      }
      if (node) {
        node.parent = this.parent;
      }
    }
    else {
      if(node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }
      
  _findMin() {
    if(!this.left) {
      return this;
    }
    return this.left._findMin();
  }
      
  _findMax(){
    if(!this.right) {
      return this;
    }
    return this.right._findMax();
  }

  preOrderTraversal(node = this) {
    console.log(node.key);

    if (node.left) {
      this.preOrderTraversal(node.left);
    }
    if (node.right) {
      this.preOrderTraversal(node.right);
    }
  }

  inOrderTraversal(node = this) {

    if (node.left) {
      this.inOrderTraversal(node.left);
    }
    console.log(node.key);
    if (node.right) {
      this.inOrderTraversal(node.right);
    }
  }

  postOrderTraversal(node = this) {

    if (node.left) {
      this.postOrderTraversal(node.left);
    }
    if (node.right) {
      this.postOrderTraversal(node.right);
    }
    console.log(node.key);        
  }
}


let BST = new BinarySearchTree();

let arr = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
arr.forEach(item=> BST.insert(item));

//console.log(BST);

//BST.preOrderTraversal();
//BST.inOrderTraversal();
//BST.postOrderTraversal();

function bestProfit(prices) {
  if (!prices.length) return 0;
 
  let buy = prices[0];
  let sell = prices[0];
  let profit = 0;
  for (var i = 1; i < prices.length; ++i) {
    sell = prices[i];
    console.log('this is sell', sell);
    if (sell < buy) buy = sell;
    console.log('this is buy', buy);
    if (sell - buy > profit) profit = sell - buy;
    console.log('this is profit', profit);
  }
  return profit;
}

console.log(bestProfit([128, 97, 121, 123, 98, 97, 105]));
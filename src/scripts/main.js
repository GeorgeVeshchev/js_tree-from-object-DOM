'use strict';

// const { createElement } = require('react');

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  if (Object.keys(data).length === 0) {
    return;
  }

  const newUl = document.createElement('ul');

  for (const key in data) {
    const newLi = document.createElement('li');

    newLi.textContent = key;

    createTree(newLi, data[key]);

    newUl.append(newLi);
  }
  element.append(newUl);
}

createTree(tree, food);

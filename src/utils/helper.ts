/*
* ****** Helper Functions ******
*/

export const addItemToList = (val: any) => {
  var node = document.createElement('li');
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
}

/*
* ****** END ******
*/

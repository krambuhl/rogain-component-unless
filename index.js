const Empty = require('rogain-component-empty');
const splitTree = require('rogain-utils').splitTree;
module.exports = function Unless(tree, props) {
  if (!tree.attrs.value) {
    return Empty(tree, props);
  }

  var split = splitTrees(tree, { type: 'component', name: 'Else' });
  var res = split[1];
  
  if (tree.data != tree.attrs.value) {
    res = split[0];
  }

  return res && res.length > 0 ? res : undefined;
};
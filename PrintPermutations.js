
//function to print all possible permutations of a list of numbers
var printPerm = function() { 
  var list = [0, 1, 2];
  //array to hold all permutations
  var perms = [];

  var findPermOfCurrentNumber = function(list, n, perm) {
    //if you have done 'n' comparisons 
    if (n === 0) {
      //add your findings to a the perms array
      perms.push(perm);
      return;
    }
    //for each element in the list, perform subroutine
    //to compare current element in the list against
    //all elements in the list
    for (var i = 0; i < list.length; i++) {
      var current = list[i];
      findPermOfCurrentNumber(list, n - 1, perm.concat(current)); 
      //go down a layer in your tree each recursive call
    }

  }
  findPermOfCurrentNumber(list, 3, []);
  //3 results in the a depth of 3 in your tree

  return perms;

}

printPerm();



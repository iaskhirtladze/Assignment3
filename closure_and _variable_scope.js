
(function(){
  
  let addBread = function() {
  console.log('Adding bread');
  }

  let spreadSoya = function() {
  console.log('Now spreading the soya magarine');
  }
  let spreadJam = function() {
  console.log('Spreading jam');
  }
  
  window.makeSandwitch = function () {
    addBread();
    spreadSoya();
    spreadJam();
    }
  
})();

 makeSandwitch();
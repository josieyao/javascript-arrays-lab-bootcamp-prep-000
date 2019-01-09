/*describe('Arrays', function() {
  describe('kittens', function() {
    it('defines kittens as `var kittens = ["Milo", "Otis", "Garfield"]`', function() {
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })*/

var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here

/*  describe('destructivelyAppendKitten(name)', function() {
    it('appends a kitten to the end of the kittens array', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      destructivelyAppendKitten('Ralph')
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield", "Ralph"])
    })
  })*/
  
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

/*  describe('destructivelyPrependKitten(name)', function() {
    it('prepends a kitten to the beginning of the kittens array', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      destructivelyPrependKitten("Bob")

      expect(window.kittens).toEqual(["Bob", "Milo", "Otis", "Garfield"])
    })
  })*/

function destructivelyPrependKitten (name) {
  kittens.unshift(name);
  return kittens;
}

/*  describe('destructivelyRemoveLastKitten()', function() {
    it('removes the last kitten from the kittens array', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      destructivelyRemoveLastKitten()

      expect(window.kittens).toEqual(["Milo", "Otis"])
    })
  })*/

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

/*  describe('destructivelyRemoveFirstKitten()', function() {
    it('removes the First kitten from the kittens array', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      destructivelyRemoveFirstKitten()

      expect(window.kittens).toEqual(["Otis", "Garfield"])
    })
  })*/

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}



function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
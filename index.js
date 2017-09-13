const app = kittens

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  var kittens
  kittens.push(name);
  return kittens
}

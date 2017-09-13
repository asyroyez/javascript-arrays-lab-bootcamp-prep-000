const app = kittens

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  var kittens.push(name)
  return kittens
}

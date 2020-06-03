let blob

function setup() {
  createCanvas(windowWidth, windowHeight)
  blob = new Blobbo()
}

function draw () {
  background("#F67D67")
  blob.draw()
}
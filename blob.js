class Blobbo {
  constructor() {
    // lets set up the blobbo
    this.numOfPoints = 500
   	this.time = 0
  }
  
  wave(num, amp, freq, speed) {
    return amp * sin(freq * TWO_PI * num / this.numOfPoints + this.time * speed)
  }
  
  draw() {
    noStroke()
    fill('#FBF5F4')
    beginShape()
    // lets draw the blobbo
    for (let num = 0; num < this.numOfPoints; num = num + 1) {
      
      let angle = TWO_PI * num / this.numOfPoints
      let r = 250 
      	+ this.wave(num, 10, 4, 1) 
      	+ this.wave(num, 10, 3, 3) 
      	+ this.wave(num, 5, 2, 0)
      
      let x = (windowWidth / 2) + r * cos(angle)
      let y = (windowHeight / 2) + r * sin(angle)
      
      vertex(x, y)
      
    }
    
    endShape()
    
    this.time = this.time + 0.01
  }
}
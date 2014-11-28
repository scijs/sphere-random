'use strict'

module.exports = sampleSphere

function sampleSphere(d) {
  var v = new Array(d)
  var d2 = Math.floor(d/2)<<1
  var r2 = 0.0
  for(var i=0; i<d2; i+=2) {
    var rr = -2.0 * Math.log(Math.random())
    var r =  Math.sqrt(rr)
    var theta = 2.0 * Math.PI * Math.random()
    r2 += rr
    v[i] = r * Math.cos(theta)
    v[i+1] = r * Math.sin(theta)
  }
  if(d % 2) {
    var x = Math.sqrt(-2.0 * Math.log(Math.random())) * 
            Math.cos(2.0 * Math.PI * Math.random())
    v[d-1] = x
    r2 += Math.pow(x, 2)
  }
  var h = 1.0 / Math.sqrt(r2)
  for(var i=0; i<d; ++i) {
    v[i] *= h
  }
  return v
}
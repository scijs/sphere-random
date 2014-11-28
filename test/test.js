'use strict'

var tape = require('tape')
var sampleSphere = require('../rand-sphere')

tape('sample-sphere', function(t) {

  for(var d=1; d<=6; ++d)
  for(var i=0; i<10; ++i) {
    var p = sampleSphere(d)
    var l = 0.0
    for(var j=0; j<d; ++j) {
      l += p[j] * p[j]
    }
    t.equals(p.length, d)
    t.ok(Math.abs(l-1.0) < 0.0001)
  }

  t.end()
})
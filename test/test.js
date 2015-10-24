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

tape('sample-sphere, passing rng as argument', function(t) {
    var riggedRng = function () { return 0.5; }

    var p = sampleSphere(2, riggedRng)

    t.equals(p[0], -1)
    t.equals(p[1], 1.2246063538223773e-16)

    t.end();
})

await initHydra({feedStrudel: 1});
voronoi(50,0.5)
    .modulateScale(osc(8).rotate(Math.sin(time)),.01)
    .thresh(.8)
    .modulateRotate(osc(2),.1)
    .thresh(.7)
    .diff(src(o0).scale(0.2))
    .modulateScale(osc(2).modulateRotate(o0,.74))
    .diff(src(o0).rotate([-.012,.01,-.002,0]).scrollY(0,[-1/100,0].fast(0.7)))
    .brightness([-.02,-.15].smooth().fast(.1))
    .out()
setcps(96/60)

$:stack(
  note(`<
[[a2,d3,g3]~@5][[g3,b3,e4]~@5][[a2,d3,g3]~@5][[g3,b3,e4]~@5]
[[a2,d3,g3]~@5][[g3,b3,e4]~@5]~ ~
~@32
>`)
    .sound("gm_distortion_guitar:5")
    .lpf(800)
    .gain(1.5),

 s("<linnlm1_sh!8 ~@32>").gain(0.8)
)

$: stack(
  note(`<~@8
[e2,b2,e3][~[[d3,a3,d4][d3,a3,d4]]][d3,a3,d4][~[[a2,e3,a3][a2,e3,a3]]]
[a2,e3,a3] ~ [~ g4 e4 d4][b3 a3@1.3 c4@0.7 g3]
[e2,b2,e3][~[[d3,a3,d4][d3,a3,d4]]][d3,a3,d4][~[[a2,e3,a3][a2,e3,a3]]]
[a2,e3,a3][b2 ab2@2 b2][a2@2 b2 bb2][~ b2 c3@2]
[e2,b2,e3][~[[d3,a3,d4][d3,a3,d4]]][d3,a3,d4][~[[a2,e3,a3][a2,e3,a3]]]
[a2,e3,a3] ~ [~ g4 e4 d4][b3 a3@1.3 c4@0.7 g3]
[e2,b2,e3][~[[d3,a3,d4][d3,a3,d4]]][d3,a3,d4][~[[a2,e3,a3][a2,e3,a3]]]
[a2,e3,a3][b2 ab2@2 b2][a2@2 b2 bb2][~ b2 c3@2]
>`)
    .sound("gm_distortion_guitar:1")
    .room(0.1)
    .gain(0.8),

note(`<~@8
[e2,b2,e3][~[[d3,a3,d4][d3,a3,d4]]][d3,a3,d4][~[[a2,e3,a3][a2,e3,a3]]]
[a2,e3,a3] ~ ~
[e2,b2,e3][~[[d3,a3,d4][d3,a3,d4]]][d3,a3,d4][~[[a2,e3,a3][a2,e3,a3]]]
[a2,e3,a3][c3@2 ab2@2 c3][a2@2 c3 bb2][~ c3 c3@2]
[e2,b2,e3][~[[d3,a3,d4][d3,a3,d4]]][d3,a3,d4][~[[a2,e3,a3][a2,e3,a3]]]
[a2,e3,a3] ~ ~
[e2,b2,e3][~[[d3,a3,d4][d3,a3,d4]]][d3,a3,d4][~[[a2,e3,a3][a2,e3,a3]]]
[a2,e3,a3][c3@2 ab2@2 c3][a2@2 c3 bb2][~ c3 c3@2]
>`)
    .sound("gm_electric_guitar_jazz:1")
    .room(0.3)
    .gain(0.8),

note(`<~@8
e2 [~[d3 d3]] d3 [~ [a2 a2]]
a2 ~ ~
e2 [~[d3 d3]] d3 [~ [a2 a2]]
a2 [c3@2 ab2@2 c3][a2@2 c3 bb2][~ c3 c3@2]
e2 [~[d3 d3]] d3 [~ [a2 a2]]
a2 ~ ~
e2 [~[d3 d3]] d3 [~ [a2 a2]]
a2 [c3@2 ab2@2 c3][a2@2 c3 bb2][~ c3 c3@2]
>`)
    .sound("gm_electric_bass_finger")
    .room(0.5),

stack(
    s(`<~@16
        bd ~@3 bd ~@3 bd ~@3 bd ~@3 bd ~@3 bd ~@3
        bd ~ [~ bd] ~ bd [~ bd] ~ bd
        bd ~@3 bd ~@3 bd ~@3 bd ~@3 bd ~@3 bd ~@3
        bd ~ [~ bd] ~ bd [~ bd] ~ bd
        >*2`)
        .gain(1.1),
    s(`<~@16
        ~@2 sd ~@3 sd ~ ~@2 sd ~@3 sd ~ ~@2 sd ~@3 sd ~
        ~ ~ [sd ~] [~ sd] ~ [sd ~] [~ sd] ~
        ~@2 sd ~@3 sd ~ ~@2 sd ~@3 sd ~ ~@2 sd ~@3 sd ~
        ~ ~ [sd ~] [~ sd] ~ [sd ~] [~ sd] ~
        >*2`)
        .room(0.6)
        .size(0.8)
        .gain(1.2),
    s(`<~@16
        ~ hh!7 hh!8 hh!8
        hh hh [hh ~] [~ hh] ~ [hh ~] [~ hh] ~
        ~ hh!7 hh!8 hh!8
        hh hh [hh ~] [~ hh] ~ [hh ~] [~ hh] ~
        >*2`)
    .gain(1.2),

    sound(`<~@16
        cr ~@25 [~ cr] ~ cr [~ cr] ~ cr
        cr ~@25 [~ cr] ~ cr [~ cr] ~ cr
        >*2`)
    .bank("circuitstom")
    .gain(0.8)
  )
)
.pianoroll({ cycles: 4, smear: 0.7 })

input.onButtonPressed(Button.A, function () {
    music.changeTempoBy(-5)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(music.tempo())
})
input.onButtonPressed(Button.B, function () {
    music.changeTempoBy(5)
})
music.setTempo(100)
basic.forever(function () {
    while (true) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Sixteenth))
    }
})

input.onButtonPressed(Button.A, function () {
    radio.sendValue("rz557g", 2473 * 3821)
    alarm = 0
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("rz557g", 2897 * 3821)
})
radio.onReceivedValue(function (name, value) {
    // 1st security measure - has to have correct name
    // AND
    // 2nd security measure - number that are too big are filtered out
    if (name == "" && (code > 0 && code <= 11112)) {
        // decodes the message
        code = value + 4021
        // if code > 0
        // check value of 'code'
        // else
        // all is good
        if (code > 0) {
            if (code == 1) {
                basic.showLeds(`
                    # . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 10) {
                basic.showLeds(`
                    . # . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 11) {
                basic.showLeds(`
                    # # . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 100) {
                basic.showLeds(`
                    . . # . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 101) {
                basic.showLeds(`
                    # . # . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 110) {
                basic.showLeds(`
                    . # # . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 111) {
                basic.showLeds(`
                    # # # . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 1000) {
                basic.showLeds(`
                    . . . # .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 1001) {
                basic.showLeds(`
                    # . . # .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 1010) {
                basic.showLeds(`
                    . # . # .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 1011) {
                basic.showLeds(`
                    # # . # .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 1100) {
                basic.showLeds(`
                    . . # # .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 1101) {
                basic.showLeds(`
                    # . # # .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 1110) {
                basic.showLeds(`
                    . # # # .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 1111) {
                basic.showLeds(`
                    # # # # .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 10000) {
                basic.showLeds(`
                    . . . . #
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 10001) {
                basic.showLeds(`
                    # . . . #
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 10010) {
                basic.showLeds(`
                    . # . . #
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 10011) {
                basic.showLeds(`
                    # # . . #
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 10100) {
                basic.showLeds(`
                    . . # . #
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 10101) {
                basic.showLeds(`
                    # . # . #
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 10110) {
                basic.showLeds(`
                    . # # . #
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 10111) {
                basic.showLeds(`
                    # # # . #
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 11000) {
                basic.showLeds(`
                    . . . # #
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 11001) {
                basic.showLeds(`
                    # . . # #
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 11010) {
                basic.showLeds(`
                    . # . # #
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 11011) {
                basic.showLeds(`
                    # # . # #
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 11100) {
                basic.showLeds(`
                    . . # # #
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 11101) {
                basic.showLeds(`
                    # . # # #
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 11110) {
                basic.showLeds(`
                    . # # # #
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else if (code == 11111) {
                basic.showLeds(`
                    # # # # #
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            }
            alarm = 1
        } else {
            ready = 1
            basic.clearScreen()
        }
    }
})
let code = 0
let alarm = 0
let ready = 0
radio.setGroup(1)
ready = 1
alarm = 0
basic.forever(function () {
    // turns it off when the alarm is activated
    if (ready == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
    }
    if (alarm == 1) {
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.playTone(659, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Sixteenth))
    }
})

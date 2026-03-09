input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() < 100) {
        basic.showNumber(input.lightLevel())
        basic.showIcon(IconNames.Sad)
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    } else {
        basic.showNumber(input.lightLevel())
        basic.showIcon(IconNames.Happy)
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    }
    basic.pause(100)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("HOLA")
})
input.onButtonPressed(Button.B, function () {
    if (input.temperature() < 20) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Sad)
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    } else if (input.temperature() < 24) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Happy)
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    }
    basic.pause(100)
})
basic.showString("HOLA")

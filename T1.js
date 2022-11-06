radio.setGroup(87)
basic.forever(function () {
    radio.sendValue("T1", input.temperature())
    basic.showNumber(input.temperature())
})

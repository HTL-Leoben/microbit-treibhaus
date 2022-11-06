let T2 = 0
let T1 = 0
radio.setGroup(87)
serial.redirectToUSB()

radio.onReceivedValue(function (name, value) {
    if (name == "T1") {
        T1 = value
    } else if (name == "T2") {
        T2 = value
    } else {
        basic.showString("Unbekanntes Thermometer")
    }
    basic.clearScreen()
})

basic.forever(function () {
    serial.writeNumbers([T1, T2])
})

while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() > 2) {
        light.setBrightness(5)
        light.setAll(light.rgb(255, 153, 51))
        music.setVolume(50)
        music.powerUp.playUntilDone()
    }
    
}

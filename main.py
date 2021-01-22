while True:
    print("Light Level:" + input.light_level())
    if input.light_level() > 2:
        light.set_brightness(5)
        light.set_all(light.rgb(255,153,51))
        music.set_volume(50)
        music.power_up.play_until_done()
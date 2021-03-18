from server.src.topshot import get_moment_data

seeing_stars_set_id = "122b048d-585e-4c63-8275-c23949576fd6"
play_ids = [
    "d54193d1-e0ed-4217-b2d1-884406d78acf",  # embiid
    "dfff6981-37e2-43c3-ada5-ab6e3b007b99",  # tatum
    "665aaac2-f124-4303-a945-e002a4a3f298",  # booker
]
for play_id in play_ids:
    get_moment_data(seeing_stars_set_id, play_id)

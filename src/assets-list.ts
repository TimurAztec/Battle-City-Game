import {Constants} from "./constants";

const loaderAssets = [
    { name: Constants.AssetsTextures.LOADER_BAR_BG, url: "./assets/loader/loader-bg.png" },
    { name: Constants.AssetsTextures.LOADER_BAR, url: "./assets/loader/loader-bar.png" },
]

const assets = [
    { name: Constants.AssetsTextures.BONUS_IMMORTAL, url: "./assets/bonus/bonus_immortal.png" },
    { name: Constants.AssetsTextures.BONUS_LIVE, url: "./assets/bonus/bonus_live.png" },
    { name: Constants.AssetsTextures.BONUS_SLOW, url: "./assets/bonus/bonus_slow.png" },
    { name: Constants.AssetsTextures.BONUS_SPEED, url: "./assets/bonus/bonus_speed.png" },
    { name: Constants.AssetsTextures.BONUS_TRACTOR, url: "./assets/bonus/bonus_tractor.png" },
    { name: Constants.AssetsTextures.BUTTON_PLAY, url: "./assets/buttons/play.png" },
    { name: Constants.AssetsTextures.BUTTON_EXIT, url: "./assets/buttons/exit.png" },
    { name: Constants.AssetsTextures.MENU_BG, url: "./assets/game_background.png" },
    { name: Constants.AssetsTextures.WIN_MENU_BG, url: "./assets/win_screen_background.png" },
    { name: Constants.AssetsTextures.APPEAR_FX, url: "./assets/effects/appear.png" },
    { name: Constants.AssetsTextures.SPLASH_FX, url: "./assets/effects/splash.png" },
    { name: Constants.AssetsTextures.BULLET_1, url: "./assets/effects/bullet.png" },
    { name: Constants.AssetsTextures.BULLET_2, url: "./assets/effects/enemy_bullet.png" },
    { name: Constants.AssetsTextures.EXPLODE_BIG_FX, url: "./assets/effects/explode.png" },
    { name: Constants.AssetsTextures.EXPLODE_SMALL_FX, url: "./assets/effects/explode_small.png" },
    { name: Constants.AssetsTextures.TANK_2, url: "./assets/tanks/tank_enemy1_move.png" },
    { name: Constants.AssetsTextures.TANK_3, url: "./assets/tanks/tank_enemy2_move.png" },
    { name: Constants.AssetsTextures.TANK_4, url: "./assets/tanks/tank_enemy3_move.png" },
    { name: Constants.AssetsTextures.TANK_1, url: "./assets/tanks/tank_player_move.png" },
    { name: Constants.AssetsTextures.TANK_DEAD, url: "./assets/tanks/tank_dead_move.png" },
    { name: Constants.AssetsTextures.TRACTOR, url: "./assets/tanks/tractor_move.png" },
    { name: Constants.AssetsTextures.SOLIDER, url: "./assets/entities/soldier.png" },
    { name: Constants.AssetsTextures.SOLIDER_DEAD, url: "./assets/entities/good_russian.png" },
    { name: Constants.AssetsTextures.EMPTY_SPACE, url: "./assets/tanks/empty.png" },
    { name: Constants.AssetsTextures.EAGLE, url: "./assets/tiles/eagle.png" },
    { name: Constants.AssetsTextures.LEAVES, url: "./assets/tiles/leaves.png" },
    { name: Constants.AssetsTextures.SMALL_WALL, url: "./assets/tiles/small_wall.png" },
    { name: Constants.AssetsTextures.AT_BARRICADE, url: "./assets/tiles/anti_tank_hedgehogs.png" },
    { name: Constants.AssetsTextures.HARD_WALL, url: "./assets/tiles/wall.png" },
    { name: Constants.AssetsTextures.DIRT, url: "./assets/tiles/dirt.png" },
    { name: Constants.AssetsTextures.GRASS, url: "./assets/tiles/grass.png" },
    { name: Constants.AssetsTextures.WATER, url: "./assets/tiles/water.png" },
    { name: Constants.AssetsSounds.SHOT, url: "./assets/sounds/shot.wav" },
    { name: Constants.AssetsSounds.BONUS, url: "./assets/sounds/bonus.wav" },
    { name: Constants.AssetsSounds.WIN, url: "./assets/sounds/win.wav" },
    { name: Constants.AssetsSounds.LOSE, url: "./assets/sounds/lose.wav" },
    { name: Constants.AssetsSounds.EXPLODE_BIG, url: "./assets/sounds/explode.wav" },
    { name: Constants.AssetsSounds.EXPLODE_SMALL, url: "./assets/sounds/hit.wav" },
    { name: Constants.AssetsSounds.WIN_GAME_MUSIC, url: "./assets/sounds/endgame_music.mp3" },
    { name: Constants.AssetsSounds.HEAVY_TRANSPORT_MOVE, url: "./assets/sounds/heavy_transport_move.wav" },
    { name: Constants.AssetsSounds.WATER_SPLASH, url: "./assets/sounds/water_splash.wav" },
]

export { loaderAssets, assets }
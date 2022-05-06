import {RpgPlayer, RpgPlayerHooks, Control, Move, RpgClassMap, RpgMap} from '@rpgjs/server'

export const player: RpgPlayerHooks = {
    onConnected(player: RpgPlayer) {
        player.setGraphic('male012')
        player.setHitbox(16, 16)
        player.changeMap('simplemap')
    },
    onDisconnected(player: RpgPlayer) {
        console.log(player.worldPositionX);
        console.log(player.getCurrentMap());
    },
    onInput(player: RpgPlayer, {input}) {
        // console.log(player.map());

        if (input == Control.Back) {
            player.callMainMenu()
        }
        if (input == "attack") {
            player.showAnimation("male012", "attack", true);
        }
    },
    async onJoinMap(player: RpgPlayer) {
        if (player.getVariable('AFTER_INTRO')) {
            return
        }
        // await player.showText('Welcome to the start of RPGJS. Short presentation of the structure:')
        // await player.showText('1. Open the map src/modules/main/server/maps/tmx/samplemap.tmx with Tiled Map Editor !')
        // await player.showText('2. All the modules are in src/modules/index.ts, it is a suite of systems to make a complete set. Remove modules or add some!')
        // await player.showText('3. The global configuration is done in src/config')
        // await player.showText('And, please, support the project on github https://github.com/RSamaium/RPG-JS ! :)')
        player.setVariable('AFTER_INTRO', true)
    }
}

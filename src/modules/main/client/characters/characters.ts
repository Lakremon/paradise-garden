import {Spritesheet, Presets, Direction, Animation} from '@rpgjs/client'

const { RMSpritesheet } = Presets

const frameY = direction => {
    return {
        [Direction.Down]: 0,
        [Direction.Left]: 1,
        [Direction.Right]: 2,
        [Direction.Up]: 3
    }[direction]
}
@Spritesheet({
    images: {
        female132: require('./assets/Female 13-2.png'),
        male012: require('./assets/Male-sw 01-2.png'),
    },
    width: 96,
    height: 256,
    framesWidth: 3, // number of frames of the image across the width
    framesHeight: 8, // number of frames of the image across the height
    textures: {
        [Animation.Stand]: {
            animations: direction => [
                [{ time: 0, frameX: 1, frameY: frameY(direction) }]
            ]
        },
        [Animation.Walk]:  {
            animations: direction => [
                [
                    { time: 0, frameX: 0, frameY: frameY(direction) },
                    { time: 10, frameX: 1, frameY: frameY(direction) },
                    { time: 20, frameX: 2, frameY: frameY(direction) }
                ]
            ]
        },
        ["attack"]:  {
            animations: direction => [
                [
                    { time: 0, frameX: 0, frameY: frameY(direction) + 4 },
                    { time: 10, frameX: 1, frameY: frameY(direction) + 4 },
                    { time: 20, frameX: 2, frameY: frameY(direction) + 4 }
                ]
            ]
        }
    }
})
export class Characters { }

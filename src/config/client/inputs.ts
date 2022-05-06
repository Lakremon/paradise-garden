import { Input, Control } from '@rpgjs/client'

export const inputs = {
    [Control.Up]: {
        repeat: true,
        bind: Input.Up
    },
    [Control.Down]: {
        repeat: true,
        bind: Input.Down
    },
    [Control.Right]: {
        repeat: true,
        bind: Input.Right
    },
    [Control.Left]: {
        repeat: true,
        bind: Input.Left
    },
    [Control.Action]: {
        bind: [Input.Enter]
    },
    ["attack"]: {
        bind: [Input.Space]
    },
    [Control.Back]: {
        bind: Input.Escape
    }
}

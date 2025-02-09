import { isDef, isObject } from './basic'

type ObjectIndex = Record<string, unknown>

const { hasOwnProperty } = Object.prototype

function assignKey(to: ObjectIndex, from: ObjectIndex, key: string) {
    const val = from[key]

    if (!isDef(val)) {
        return
    }

    if (!hasOwnProperty.call(to, key) || !isObject(val)) {
        to[key] = val
    }
    else {
        // eslint-disable-next-line unicorn/new-for-builtins
        to[key] = deepAssign(Object(to[key]), val)
    }
}

export function deepAssign(to: ObjectIndex, from: ObjectIndex): ObjectIndex {
    Object.keys(from).forEach((key) => {
        assignKey(to, from, key)
    })

    return to
}

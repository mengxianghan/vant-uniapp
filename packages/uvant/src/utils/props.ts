/**
 * prop type helpers
 * help us to write less code and reduce bundle size
 */
import type { PropType } from 'vue'

export const unknownProp = null as unknown as PropType<unknown>

export const numericProp = [Number, String]

export const truthProp = {
    type: Boolean,
    default: true as const,
}

export function makeRequiredProp<T>(type: T) {
    return {
        type,
        required: true as const,
    }
}

export function makeArrayProp<T>(defaultVal: T[] = [] as T[]) {
    return {
        type: Array as PropType<T[]>,
        default: () => defaultVal,
    }
}

export function makeNumberProp<T>(defaultVal: T) {
    return {
        type: Number,
        default: defaultVal,
    }
}

export function makeNumericProp<T>(defaultVal: T) {
    return {
        type: numericProp,
        default: defaultVal,
    }
}

export function makeStringProp<T>(defaultVal: T) {
    return {
        type: String as unknown as PropType<T>,
        default: defaultVal,
    }
}

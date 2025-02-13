import { ref, watch, type WatchSource } from 'vue'

export function useLazyRender(show: WatchSource<boolean | undefined>) {
    const inited = ref(false)

    watch(
        show,
        (value) => {
            if (value) {
                inited.value = value
            }
        },
        { immediate: true },
    )

    return (render: () => void) => () => (inited.value ? render() : null)
}

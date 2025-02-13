<script setup lang="ts">
import { useTranslate } from '@/composables'
import { ref } from 'vue'

const t = useTranslate({
    'zh-CN': {
        position: '弹出位置',
        buttonBasic: '展示弹出层',
        buttonTop: '顶部弹出',
        buttonBottom: '底部弹出',
        buttonLeft: '左侧弹出',
        buttonRight: '右侧弹出',
        roundCorner: '圆角弹窗',
        roundCornerBottom: '圆角弹窗（底部）',
        roundCornerCenter: '圆角弹窗（居中）',
        closeIcon: '关闭图标',
        customCloseIcon: '自定义图标',
        customIconPosition: '图标位置',
        listenEvents: '事件监听',
        clickEvents: '监听点击事件',
        displayEvents: '监听显示事件',
    },
})

const showBasic = ref(false)
const showTop = ref(false)
const showBottom = ref(false)
const showLeft = ref(false)
const showRight = ref(false)
const showCloseIcon = ref(false)
const showRoundCornerBottom = ref(false)
const showRoundCornerCenter = ref(false)
const showCustomCloseIcon = ref(false)
const showCustomIconPosition = ref(false)
const showClickEvents = ref(false)
const showDisplayEvents = ref(false)

const showToast = title => uni.showToast({ title, icon: 'none' })
</script>

<template>
    <view class="demo-doc doc-popup">
        <demo-block
            card
            :title="t('basicUsage')"
        >
            <van-cell
                :title="t('buttonBasic')"
                is-link
                :border="false"
                @click="showBasic = true"
            />
            <van-popup
                v-model:show="showBasic"
                :custom-style="{ padding: '64px' }"
            >
                {{ t('content') }}
            </van-popup>
        </demo-block>

        <demo-block
            card
            :title="t('position')"
        >
            <van-grid clickable>
                <van-grid-item
                    icon="arrow-up"
                    :text="t('buttonTop')"
                    @click="showTop = true"
                />
                <van-grid-item
                    icon="arrow-down"
                    :text="t('buttonBottom')"
                    @click="showBottom = true"
                />
                <van-grid-item
                    icon="arrow-left"
                    :text="t('buttonLeft')"
                    @click="showLeft = true"
                />
                <van-grid-item
                    icon="arrow"
                    :border="false"
                    :text="t('buttonRight')"
                    @click="showRight = true"
                />
            </van-grid>

            <van-popup
                v-model:show="showTop"
                position="top"
                :custom-style="{ height: '30%' }"
            />
            <van-popup
                v-model:show="showBottom"
                position="bottom"
                :custom-style="{ height: '30%' }"
            />
            <van-popup
                v-model:show="showLeft"
                :custom-style="{ width: '30%', height: '100%' }"
                position="left"
            />
            <van-popup
                v-model:show="showRight"
                :custom-style="{ width: '30%', height: '100%' }"
                position="right"
            />
        </demo-block>

        <demo-block
            card
            :title="t('closeIcon')"
        >
            <van-cell
                :title="t('closeIcon')"
                is-link
                @click="showCloseIcon = true"
            />
            <van-cell
                :title="t('customCloseIcon')"
                is-link
                @click="showCustomCloseIcon = true"
            />
            <van-cell
                :title="t('customIconPosition')"
                :border="false"
                is-link
                @click="showCustomIconPosition = true"
            />

            <van-popup
                v-model:show="showCloseIcon"
                :custom-style="{ height: '30%' }"
                closeable
                position="bottom"
            />
            <van-popup
                v-model:show="showCustomCloseIcon"
                :custom-style="{ height: '30%' }"
                closeable
                close-icon="close"
                position="bottom"
            />
            <van-popup
                v-model:show="showCustomIconPosition"
                :custom-style="{ height: '30%' }"
                closeable
                close-icon-position="top-left"
                position="bottom"
            />
        </demo-block>

        <demo-block
            card
            :title="t('roundCorner')"
        >
            <van-cell
                :title="t('roundCornerCenter')"
                is-link
                @click="showRoundCornerCenter = true"
            />
            <van-popup
                v-model:show="showRoundCornerCenter"
                round
                position="center"
            >
                <view class="p-12">
                    {{ t('content') }}
                </view>
            </van-popup>

            <van-cell
                :title="t('roundCornerBottom')"
                :border="false"
                is-link
                @click="showRoundCornerBottom = true"
            />
            <van-popup
                v-model:show="showRoundCornerBottom"
                round
                position="bottom"
            >
                <view class="h-[30vh]" />
            </van-popup>
        </demo-block>

        <demo-block
            card
            :title="t('listenEvents')"
        >
            <van-cell
                :title="t('clickEvents')"
                :border="false"
                is-link
                @click="showClickEvents = true"
            />
            <van-popup
                v-model:show="showClickEvents"
                :custom-style="{ height: '30%' }"
                position="bottom"
                closeable
                @click-overlay="showToast('click-overlay')"
                @click-close-icon="showToast('click-close-icon')"
            />

            <van-cell
                :title="t('displayEvents')"
                :border="false"
                is-link
                @click="showDisplayEvents = true"
            />
            <van-popup
                v-model:show="showDisplayEvents"
                :custom-style="{ height: '30%' }"
                position="bottom"
                @open="showToast('open')"
                @opened="showToast('opened')"
                @close="showToast('close')"
                @closed="showToast('closed')"
            />
        </demo-block>
    </view>
</template>

<style lang="scss" scoped></style>

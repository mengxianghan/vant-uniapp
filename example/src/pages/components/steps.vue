<script setup lang="ts">
import { useTranslate } from '@/composables'
import { ref } from 'vue'

const t = useTranslate({
    'zh-CN': {
        nextStep: '下一步',
        step1: '买家下单',
        step2: '商家接单',
        step3: '买家提货',
        step4: '交易完成',
        title2: '描述信息',
        title3: '竖向步骤条',
        status1: '【城市】物流状态1',
        status2: '【城市】物流状态',
        status3: '快件已发货',
        customStyle: '自定义样式',
    },
    'en-US': {
        nextStep: 'Next Step',
        step1: 'Step1',
        step2: 'Step2',
        step3: 'Step3',
        step4: 'Step4',
        title2: 'Description',
        title3: 'Vertical Steps',
        status1: '【City】Status1',
        status2: '【City】Status2',
        status3: '【City】Status3',
        customStyle: 'Custom Style',
    },
})

const active = ref(1)

function nextStep() {
    active.value = ++active.value % 4
}
</script>

<template>
    <demo-block
        :title="t('basicUsage')"
        :card="false"
    >
        <van-steps :active="active">
            <van-step>{{ t('step1') }}</van-step>
            <van-step>{{ t('step2') }}</van-step>
            <van-step>{{ t('step3') }}</van-step>
            <van-step>{{ t('step4') }}</van-step>
        </van-steps>

        <van-button
            custom-class="!ml-4 !mt-4"
            @click="nextStep"
        >
            {{ t('nextStep') }}
        </van-button>
    </demo-block>

    <demo-block
        :title="t('customStyle')"
        :card="false"
    >
        <van-steps
            :active="active"
            active-icon="success"
            inactive-icon="arrow"
            active-color="#07c160"
        >
            <van-step>{{ t('step1') }}</van-step>
            <van-step>{{ t('step2') }}</van-step>
            <van-step>{{ t('step3') }}</van-step>
            <van-step>{{ t('step4') }}</van-step>
        </van-steps>
    </demo-block>

    <demo-block
        :title="t('title3')"
        :card="false"
    >
        <van-steps
            :active="0"
            direction="vertical"
        >
            <van-step>
                <view>{{ t('status1') }}</view>
                <view>2016-07-12 12:40</view>
            </van-step>
            <van-step>
                <view>{{ t('status2') }}</view>
                <view>2016-07-11 10:00</view>
            </van-step>
            <van-step>
                <view>{{ t('status3') }}</view>
                <view>2016-07-10 09:30</view>
            </van-step>
        </van-steps>
    </demo-block>
</template>

<style lang="scss" scoped>
//.demo-steps {
//    .van-button {
//        margin: var(--van-padding-md) 0 0 var(--van-padding-md);
//    }
//
//    p,
//    h3 {
//        font-weight: normal;
//        font-size: inherit;
//    }
//}
</style>

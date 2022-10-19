<template>
  <button @click="add">点击</button>
  {{a.state.num}}
  {{a.getters.num}}
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useStore } from './store/store'

const a = useStore()

const add = () => {
  a.commit('addNum', 1)
}


</script>
<style lang="less" scoped>

</style>
<template>
  <div class="k-radio-group">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'KRadioGroup',
    provide(){
        return{
            RadioGroup:this
        }
    },
    props:{
        //k-radio-group接受到了value值
        //将来还需要触发， 当前组件的input事件
        //provide  与 inject  Provide/consumer
        value:null
    }
}
</script>

<style>

</style>
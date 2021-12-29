<template>
  <div class="k-checkbox-group">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'KCheckboxGroup',
    props:{
        value:{
            type:Array
        }
    },
    provide(){
        return{
            CheckboxGroup : this
        }
    }
}
</script>

<style>

</style>
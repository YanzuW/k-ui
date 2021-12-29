<template>
  <div class="k-switch" @click="handleClick" :class="{ 'is-checked': value }">
    <span class="k-switch__core" ref="core">
      <span class="k-switch__button"></span>
    </span>
    <input class="k-switch__input" type="checkbox" ref="input" :name="name" />
  </div>
</template>

<script>
export default {
  name: "KSwitch",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: "",
    },
    inactiveColor: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
  methods: {
    async handleClick() {
      this.$emit("input", !this.value);
      //点击的时候，还需要修改背景色
      //等待value发生了改变，再修改颜色
      //数据修改后，等待Dom更新，在修改按钮颜色
      await this.$nextTick();
      this.setColor();
      this.$refs.input.checked = this.value
    },
    setColor() {
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
    },
  },
  mounted() {
    //修改开关的颜色
    this.setColor();
    //控制checkbox的checkbox
    this.$refs.input.checked = this.value
  },
};
</script>

<style lang="scss">
.k-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .k-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .k-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .k-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.k-switch.is-checked {
  .k-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .k-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
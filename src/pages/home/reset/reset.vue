<template>
  <div class="list-icon">
    <ul>
      <li v-for = "(item, index) in items">
        <i class="iconfont" :class="{[`icon-${index + 1}`]: true}"></i>
        <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'reset',
  data () {
    return {
      items: [
        {
          title: '图标1'
        },
        {
          title: '图标2'
        },
        {
          title: '图标3'
        },
        {
          title: '图标4'
        },
        {
          title: '图标5'
        },
        {
          title: '图标6'
        },
        {
          title: '图标7'
        },
        {
          title: '图标8'
        },
        {
          title: '图标9'
        },
        {
          title: '图标10'
        },
        {
          title: '图标11'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-icon {
     li{
       height: 63px;
       list-style: none;
       display: inline-block;
       line-height: 63px;
       vertical-align: middle;
     }
     i {
        display: inline-block;
        margin: 20px 0 20px 20px;
        color: aqua;
        font-size: 20px;
     }
  }
</style>
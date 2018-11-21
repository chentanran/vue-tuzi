<template>
    <div>   
    <!-- 头部 mint-ui-->
      <mt-header fixed title="固定在顶部">
          <slot name="left"></slot>
          <slot name="right"></slot>
      </mt-header>

</div>
    
</template>

<script>
    
</script>

<style lang="less">
    .mint-header{
					background-color: orange;
				}
</style>
<template>
  <div class="app_contain">
		<!-- 头部 -->
			<headers>
				 <router-link to="/" slot="left">
    				<mt-button icon="back">返回</mt-button>
  					</router-link>
  					<mt-button  slot="right">...	</mt-button>
			</headers>
			<!-- 尾部 -->
			<navbar></navbar>	

		<transition mode="" >
			<router-view></router-view>
		</transition>	
  </div>
</template>

<script>
		import headers from "./components/header/header.vue"
		import navbar from "./components/footer/footer.vue"

		export default {
			components:{
				headers,
				navbar
			}
		}
</script>

<style lang="less">
		.app_contain{
			overflow-x: hidden;
			 background-color: #fff;
			padding: 40px 0 50px 0;
		}
			.v-enter{
				transform: translateX(100%);
				opacity: 0;
				// transition: all 1s;
			}
			.v-leave-to{
				position: absolute;
				opacity: 0;
				transform: translateX(-100%);
			}
			.v-enter-active, .v-leave-active{
				transition: all 1s;
			}
</style>

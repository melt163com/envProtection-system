<template>
<div>
        <el-container>
            <el-header >
                <div>
                    <!-- 面包屑 -->
                    <el-breadcrumb>
                        <el-breadcrumb-item>省级环保局管理</el-breadcrumb-item>
                        <el-breadcrumb-item class="breadcrumbColor">添加省级账号</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-header>
            <el-main style="background: #fff;" >
              <div >
                <el-form :model="form" style="padding: 25px;margin-left:200px" label-width="120px">
                  <el-form-item label="账号:">
                    <el-input style="width:300px" v-model="form.name1"  placeholder="请输入手机号"/>
                  </el-form-item>
                <el-form-item label="登录密码:">
                  <el-input style="width:300px" v-model="form.name1" type="password" placeholder="支持中文、英文或数字"/>
                </el-form-item>
                <el-form-item label="省份:">
                  <el-select style="width:300px" v-model="form.region" placeholder="请选择">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                  </el-select>
                </el-form-item>
</el-form>
                                 <div class="but">
                        <el-button class="sele-but" @click=""> 保存并添加下一个 </el-button>
                        <el-button class="sele-but" @click="clear"> 保存 </el-button>
                        <el-button class="empty-but" @click="clear">取消</el-button>
                    </div>
              </div>

            </el-main>
        </el-container>
</div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import {useRouter} from "vue-router";

export default {
  name: '',
  setup() {
    const router = useRouter()
    const clear = () => {
      router.push('/proProIndex')
    }
    const form = reactive({
      name
    })
    onBeforeMount(() => {
      console.log('2.组件挂载页面之前执行----onBeforeMount')
    })
    onMounted(() => {
      console.log('3.-组件挂载到页面之后执行-------onMounted')
    })
    return {
      form,
      clear
    }
  },
}
</script>

<style scoped>
/* 面包屑字体颜色更改 */

.breadcrumbColor>>>.el-breadcrumb__inner {
  color: #000;
}
/* 空心按钮样式 */

.empty-but {
  border: 1px solid #3780b9;
  color: #3780b9;
}
/* 实心按钮背景样式 */

.sele-but {
  background: #3780b9;
  border: 0px;
  border-radius: 2px;
  color: white;
}

.but {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center
}


</style>

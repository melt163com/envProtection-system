<template>
<div>
 <el-container>
            <el-header class="inside-header">
                <div>
                    <!-- 面包屑 -->
                    <el-breadcrumb>
                        <el-breadcrumb-item class="breadcrumbColor">省级环保局管理</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-header>
            <el-main>
                <div>
                    <el-row style="background: #fff;padding-top: 10px;height: 46px;">
                        <el-col :span="6" style="margin-left: 20px;">
                            <el-form-item label="企业名称:" size="small">
                                <el-input v-model="form.name" />
                            </el-form-item>
                        </el-col>
                      <el-col :span="4" style="margin-left: 20px;">
                        <el-form-item label="省:" size="small">
                          <el-select v-model="form.access" placeholder="省">
                            <el-option label="辽宁省" value="辽宁省" />
                            <el-option label="辽宁省" value="辽宁省" />
                          </el-select>
                        </el-form-item>
                      </el-col>
                        <el-col :span="4" style="margin-left: 20px;">
                            <el-button size="small" class="sele-but" @click="select">查询</el-button>
                            <el-button size="small" :icon="Plus" style="margin-left:20px" class="add-but" @click='add'>新增</el-button>
                        </el-col>
                    </el-row>
                </div>

                <div style="background: #fff;">
                    <!-- <el-table :row-class-name="tabName" :header-cell-style="{color:'#2A2A2A',background:'#D3ECFF'}" :data="tableData" style="width: 100%;"> -->
                    <el-table ref="tableData" :data="tableData" highlight-current-row @current-change="handleCurrentChange" :row-class-name="tabName" >
                        <el-table-column align="center" prop="账号" label="账号" />
                        <el-table-column align="center" prop="省份" label="省份" />
                        <el-table-column align="center" prop="创建人" label="创建人" />
                        <el-table-column align="center" prop="创建时间" label="创建时间" />
                        <el-table-column align="center" fixed="right" label="操作" width="120">
                            <template #default>

                                <el-button link type="primary" size="small">修改</el-button>
                                <el-button link type="primary" size="small">删除</el-button>
                            </template>
</el-table-column>
</el-table>
<el-pagination style="margin-top: 20%;display: flex;justify-content: flex-end;" v-model:current-page="currentPage3" v-model:page-size="pageSize3" :small="small" :disabled="disabled" :background="background" layout="prev, pager, next, jumper" :total="1000"
    @size-change="handleSizeChange" @current-change="handleCurrentChange" />
</div>
</el-main>
</el-container>
</div>
</template>

<script>
import {
  reactive,
  ref,
  onBeforeMount,
  onMounted
} from "vue";
import {useRouter} from "vue-router";

export default {
  name: "",
  setup() {
    const router = useRouter()
    const form = reactive({
      name:''
    });
    const add = () => {
      router.push('/proProAdd')
    }
    const tableData = [{
      账号:"ln123456",
      省份:'辽宁省',
      创建人:'张三',
      创建时间:'2022-10-12 14:02:20'
    }]
    onBeforeMount(() => {
      console.log("2.组件挂载页面之前执行----onBeforeMount");
    });
    onMounted(() => {
      console.log("3.-组件挂载到页面之后执行-------onMounted");
    });
    return {
      form,
      tableData,
      add
    };
  },
};
</script>

<style scoped>
/* 面包屑字体颜色更改 */

.breadcrumbColor>>>.el-breadcrumb__inner {
  color: #000;
}
/* 内部header */

.inside-header {
  height: 10px;
  display: flex;
  justify-content: left;
  align-items: center;
}

.add-but {
  background: #DDE5FE;
  color: #1B6AC0;
}
/* 实心按钮背景样式 */

.sele-but {
  background: #3780b9;
  border: 0px;
  border-radius: 2px;
  color: white;
}
/* 空心按钮样式 */

.empty-but {
  border: 1px solid #3780b9;
  color: #3780b9;
}
/* 新增按钮样式 */

.add {
  height: 40px;
  background: #fff;
  display: flex;
  align-items: center;
}
</style>

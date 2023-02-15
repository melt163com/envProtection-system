<template>
    <div>
        <el-container>
            <el-header class="inside-header">
                <div>
                    <!-- 面包屑 -->
                    <el-breadcrumb>
                        <el-breadcrumb-item class="breadcrumbColor">账号管理</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-header>
            <el-main>
                <div>
                    <el-row style="background: #fff;padding-top: 10px;height: 46px;">
                        <el-col :span="8" style="margin-left: 20px;">
                            <el-form-item label="用户名:" size="small">
                                <el-input v-model="form.name" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="4" style="margin-left: 20px;">
                            <el-button size="small" class="sele-but" @click="select">查询</el-button>
                            <el-button size="small" class="empty-but" @click="clear">重置</el-button>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8" style="margin-left: 20px;">
                            <el-button size="small" class="add-but">新增</el-button>
                            <el-button size="small" class="add-but">导出</el-button>
                        </el-col>
                    </el-row>
                </div>
                <div style="background: #fff;">
                    <!-- <el-table :row-class-name="tabName" :header-cell-style="{color:'#2A2A2A',background:'#D3ECFF'}" :data="tableData" style="width: 100%;"> -->
                    <el-table ref="tableData" :data="tableData" highlight-current-row @current-change="handleCurrentChange" :row-class-name="tabName" :header-cell-style="{color:'#2A2A2A',background:'#D3ECFF'}">
                        <el-table-column align="center" prop="用户名" label="用户名" />
                        <el-table-column align="center" prop="所属企业" label="所属企业" />
                        <el-table-column align="center" prop="企业编码" label="企业编码" />
                        <el-table-column align="center" prop="创建时间" label="创建时间" />
                        <el-table-column align="center" prop="角色" label="角色" />
                        <el-table-column align="center" fixed="right" label="操作" width="120">
                            <template #default>
                                <el-button link type="primary" size="small" @click="detailPage">详情</el-button>
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
    } from 'vue'
    export default {
        name: '',
        setup() {
            const form = reactive({
                    name: ''
                })
                // 表格假数据
            const tableData = [{
                用户名: "1",
                所属企业: "",
                企业编码: "",
                创建时间: "已通过",
                创建时间: "入门",
                角色: ""
            }];
            onBeforeMount(() => {
                //   console.log('2.组件挂载页面之前执行----onBeforeMount')
            })
            onMounted(() => {
                //   console.log('3.-组件挂载到页面之后执行-------onMounted')
            })
            return {
                form,
            }
        },
    }
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
</style>
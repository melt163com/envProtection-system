<template>
    <div>
        <el-container>
            <el-header class="inside-header">
                <div>
                    <!-- 面包屑 -->
                    <el-breadcrumb>
                        <el-breadcrumb-item class="breadcrumbColor">企业管理</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-header>
            <el-main>
                <div>
                    <el-row style="background: #fff;padding-top: 10px;height: 46px;">
                        <el-col :span="4" style="margin-left: 20px;">
                            <el-form-item label="企业名称:" size="small">
                                <el-input v-model="form.name" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="4" style="margin-left: 5px;">
                            <el-form-item label="省" size="small">
                                <el-select v-model="form.access" placeholder="省">
                                    <el-option label="辽宁省" value="辽宁省" />
                                    <el-option label="辽宁省" value="辽宁省" />
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4" style="margin-left: 20px;">
                            <el-form-item label="市" size="small">
                                <el-select v-model="form.access" placeholder="市">
                                    <el-option label="沈阳" value="沈阳" />
                                    <el-option label="大连" value="大连" />
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4" style="margin-left: 20px;">
                            <el-form-item label="区" size="small">
                                <el-select v-model="form.access" placeholder="区">
                                    <el-option label="铁西" value="铁西" />
                                    <el-option label="大东" value="大东" />
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4" style="margin-left: 20px;">
                            <el-button size="small" class="sele-but" @click="select">查询</el-button>
                            <el-button size="small" class="empty-but" @click="clear">重置</el-button>
                        </el-col>
                    </el-row>
                </div>
                <div class="add">
                    <el-button size="small" :icon="Plus" class="add-but" @click='addPage()'>新增</el-button>
                </div>
                <div style="background: #fff;">
                    <!-- <el-table :row-class-name="tabName" :header-cell-style="{color:'#2A2A2A',background:'#D3ECFF'}" :data="tableData" style="width: 100%;"> -->
                    <el-table ref="tableData" :data="tableData" highlight-current-row @current-change="handleCurrentChange" :row-class-name="tabName" >
                        <el-table-column align="center" prop="企业名称" label="企业名称" />
                        <el-table-column align="center" prop="企业编号" label="企业编号" />
                        <el-table-column align="center" prop="省" label="省" />
                        <el-table-column align="center" prop="市" label="市" />
                        <el-table-column align="center" prop="区" label="区" />
                        <el-table-column align="center" prop="企业法人" label="企业法人" />
                        <el-table-column align="center" prop="统一社会信用代码" label="统一社会信用代码" />
                        <el-table-column align="center" prop="企业地址" label="企业地址" />
                    </el-table>
                    <el-pagination style="margin-top: 20%;display: flex;justify-content: flex-end;" v-model:current-page="currentPage3" v-model:page-size="pageSize3" :small="small" :disabled="disabled" :background="background" layout="prev, pager, next, jumper" :total="1000" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import {
        reactive,
        toRefs,
        ref,
        onBeforeMount,
        onMounted,
    } from 'vue'
    import {
        useRouter
    } from "vue-router";
    import {
        Plus
    } from "@element-plus/icons-vue";
    export default {
        name: '',
        setup() {
            const router = useRouter()
            const addPage = () => {
                router.push('/entAdd')
            }
            const data = reactive({})
            const form = reactive({
                    name: ''
                })
                // const tabName = (rowIndex) => {
                //         tableRowClassName = ({
                //             row,
                //             rowIndex,
                //         }) => {
                //             console.log(rowIndex, 'rowIndex');
                //             if ((rowIndex + 1) % 2 === 0) {
                //                 console.log('1');
                //                 return 'warning-row'
                //             } else {
                //                 return 'success-row'
                //             }
                //             return ''
                //         }
                //     }
                // 表格假数据
            const tableData = [{
                企业名称: "华晨宝马铁西工厂",
                企业编号: "BBA00123",
                省: "辽宁省",
                市: "壮族自治区",
                区: "壮族自治区",
                企业法人: "壮族自治",
                统一社会信用代码: "统一社会信用代码",
                企业地址: "企业地址"
            }, {
                企业名称: "22华晨宝马铁西工厂",
                企业编号: "BBA00123",
                省: "辽宁省",
                市: "壮族自治区",
                区: "壮族自治区",
                企业法人: "壮族自治",
                统一社会信用代码: "统一社会信用代码",
                企业地址: "企业地址"
            }, ];
            onBeforeMount(() => {
                console.log('2.组件挂载页面之前执行----onBeforeMount')
            })
            onMounted(() => {
                console.log('3.-组件挂载到页面之后执行-------onMounted')
            })
            return {
                ...toRefs(data),
                form,
                tableData,
                addPage
            }
        },
    }
</script>
<style scoped>
    .el-table .warning-row {
        /* --el-table-tr-bg-color: var(--el-color-warning-light-9); */
        background: paleturquoise;
    }

    .el-table .success-row {
        /* --el-table-tr-bg-color: var(--el-color-success-light-9); */
        background: palegreen;
    }
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
    /* 新增按钮样式 */

    .add {
        height: 40px;
        background: #fff;
        display: flex;
        align-items: center;
    }

    .add-but {
        margin-left: 20px;
        background: #dde5fe;
        color: #3780b9;
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

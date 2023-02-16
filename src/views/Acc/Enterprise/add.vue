<template>
    <div>
        <el-container>
            <el-header class="inside-header">
                <div>
                    <!-- 面包屑 -->
                    <el-breadcrumb>
                        <el-breadcrumb-item>企业管理</el-breadcrumb-item>
                        <el-breadcrumb-item class="breadcrumbColor">添加合作企业</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-header>
            <el-main>
                <div style="background: #fff;">
                    <el-form :model="form" style="padding: 25px;" label-width="150px">
                        <el-row>
                            <el-col :span="10">
                                <el-form-item label="企业名称:">
                                    <el-input v-model="form.name1" />
                                </el-form-item>
                            </el-col>
                            <el-col :span="10">
                                <el-form-item label="企业法人:">
                                    <el-input v-model="form.name2" />
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="10">
                                <el-form-item label="企业编号:">
                                    <el-input v-model="form.name1" />
                                </el-form-item>
                            </el-col>
                            <el-col :span="10">
                                <el-form-item label="生产范围:">
                                    <el-input v-model="form.name2" />
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="10">
                                <el-form-item label="统一社会信用代码:">
                                    <el-input v-model="form.name1" />
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="企业地址:">
                                    <el-select v-model="form.region" placeholder="辽宁省">
                                        <el-option label="Zone one" value="shanghai" />
                                        <el-option label="Zone two" value="beijing" />
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="5">
                                <el-form-item label-width="50px">
                                    <el-select v-model="form.region" placeholder="沈阳市">
                                        <el-option label="Zone one" value="shanghai" />
                                        <el-option label="Zone two" value="beijing" />
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="5">
                                <el-form-item label-width="50px">
                                    <el-select v-model="form.region" placeholder="铁西区">
                                        <el-option label="Zone one" value="shanghai" />
                                        <el-option label="Zone two" value="beijing" />
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span='20'>
                                <el-form-item label="">
                                    <el-input v-model="form.desc" placeholder="详细地址" type="textarea" />
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="10">
                                <el-form-item label="联系人:">
                                    <el-input v-model="form.name1" />
                                </el-form-item>
                            </el-col>
                            <el-col :span="10">
                                <el-form-item label="联系电话:">
                                    <el-input v-model="form.name2" />
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col>
                                <el-form-item label="企业LOGO:">
                                    <el-upload v-model:file-list="fileList" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                                        <el-icon>
                                            <Plus />
                                        </el-icon>
                                    </el-upload>
                                </el-form-item>
                            </el-col>
                        </el-row>
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
    import {
        reactive,
        toRefs,
        onBeforeMount,
        onMounted
    } from 'vue'
    import {
        Plus
    } from '@element-plus/icons-vue'
    import {
        UploadProps,
        UploadUserFile
    } from 'element-plus'
    import {
        useRouter
    } from "vue-router";
    export default {
        name: '',
        setup() {
            const form = reactive({
                    name1: '',
                    name2: '',
                })
                // 定义路由
            const router = useRouter()
            const clear = () => {
                router.push('/entIndex')
            }
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
    /* 内部header */
    
    .inside-header {
        height: 10px;
        display: flex;
        justify-content: left;
        align-items: center;
    }
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
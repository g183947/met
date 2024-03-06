<template>
    <div class="about ">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column label="日期" width="180" prop="date">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">
                        {{ formatDate(scope.row.date) }}
                    </span>
                </template>
            </el-table-column>
            <el-table-column label="姓名" width="180">

                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>姓名: {{ scope.row.name }}</p>
                        <p>住址: {{ scope.row.address }}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.name }}</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="操作">

                <template slot-scope="scope">
                    <el-button size="mini" type="danger" @click="del(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="nav">
            <ul>
                <li v-for="(item, index) in list" :key="index" :class="chege(index)">
                    {{ item.nume }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {getCode} from "../../api/http"
export default {
    data() {
        return {
            list: [
                {
                    nume: "管理"
                },
                {
                    nume: "组件"
                },
                {
                    nume: "导航"
                },
                {
                    nume: "目录"
                },
            ],
            tableData: [{
                id: 1,
                date: '2016-05-02',
                name: '小明',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                id: 2,
                date: '2016-05-04',
                name: '小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                id: 3,
                date: '2016-05-01',
                name: '大虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                id: 4,
                date: '2016-05-03',
                name: '老虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    methods: {
        Code(){
            getCode().then(res => {
                console.log(res)
          })
         },
        // 隔行换色
        chege(index) {
            return index % 2 == 0 ? 'even' : 'odd'
        },
        // 删除
        del(index) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.tableData.splice(index, 1);
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        // 更改日期格式
        formatDate(Date) {
            return Date.replace(/-/g, '~');
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        }
    }
}
</script>

<style scoped>
.even {
    background-color: aquamarine;
}

.odd {
    background-color: blueviolet;
}

.nav {
    width: 100vw;
    height: 20vh;
}

li {
    width: 100vw;
    height: 5vh;
    line-height: 5vh;

}

.el-table {
    width: 90vw;
    height: 50vh;
    overflow: hidden;
    overflow-x: hidden;
}

.about {
    width: 90vw;
    height: 90vh;
    overflow: hidden;
    overflow-x: hidden;
}
</style>
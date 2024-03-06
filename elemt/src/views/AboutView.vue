<template>
  <div class="about">
    <div class="from">
      <el-form ref="form" :model="form" label-width="80px">
        <br />
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <br />
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <br />
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <br />
        <el-form-item label="即时配送">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <br />
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <br />
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <br />
        <el-form-item label="活动形式">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <br />
        <el-form-item>
          <el-button @click="drawer = true" type="primary" class="tijiao">
            提交
          </el-button>

          <el-button class="tijiao">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-drawer title="提交内容" :visible.sync="drawer" :with-header="false" :before-close="handleClose" class="size">
        活动名称: {{ form.name }}
        <br />
        活动区域: {{ form.region }}
        <br />
        活动时间: {{ form.date1 }}
        <br /> {{ form.date2 }}
        <br />
        活动性质: {{ form.type }}
        <br />
        特殊资源: {{ form.resource }}
        <br />
        活动形式: {{ form.desc }}
        <br />

      </el-drawer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(() => {
          done();
        })
        .catch(() => { });
    }
  }
}

</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
.size {
  line-height: 50px;
}

.tijiao {
  width: 150px;
  height: 50px;
}


.about {
  width: 90vw;
  height: 90vh;
  overflow: hidden;
  overflow-x: hidden;
}

.from {
  width: 500px;
  height: 550px;
  background-color: white;
  border-radius: 20px;
}
</style>

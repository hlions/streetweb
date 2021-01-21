<template>
    <div>
        <el-form :model="formData" :rules="rules">
            <h2>欢迎! Street运维平台</h2>
            <el-form-item label="用户名" prop="username">
                <el-input type='text' placeholder="用户名" v-model="formData.username"/>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" placeholder="密码" v-model="formData.password"/>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="loginFunction" round>login</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            //接收 username 及 password 的值
            formData: {
                username: '',
                password: ''
            },

            //限定 username 及 password 为必填项
            rules: {
                username: [{required: true, message: '账号不可为空', trigger: 'blur'}],
                password: [{required: true, message: '密码不可为空', trigger: 'blur'}]
            }
        }
    },

    methods: {
        loginFunction () {
            this.$requests({
                method: "POST",
                url: "/accounts/token/",
                data: this.formData
            }).then(response => {
                    // 登录成功提示
                    this.$notify({title: '登录成功', message: '登录成功', type: 'success'});
                    // 在 localStorage 中存入 token
                    const userToken = 'Bearer ' + response.data.data.token;
                    localStorage.setItem('token', userToken);
                    // 跳转至展示首页
                    this.$router.push('站内页面');
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>
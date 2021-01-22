<template>
    <el-container>
        <el-aside>
            <sidebar />
        </el-aside>
        <el-container>
            <el-header>header</el-header>
            <el-main>main</el-main>
            <el-footer>footer</el-footer>
        </el-container>
    </el-container>
</template>

<script>
import Sidebar from '../../components/Lazyouts/Sidebar.vue'
export default {
  components: { Sidebar },
    
}
</script>
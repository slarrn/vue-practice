<template>
    <div class="md-app-content">
        <CustomTable/>
    </div>
</template>

<script>
  import CustomTable from './components/CustomTable.vue';

  export default {
    name: 'app',
    components: { CustomTable }
  };
</script>

<style lang="scss">
    @import "style";
</style>
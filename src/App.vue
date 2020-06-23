<template>
    <div class="md-app-content">
        <CustomTable
          :items="cargoes"
          @add="onAddCargo"
          @delete="onDeleteCargo"
          @edit="onEditCargo">
        </CustomTable>
    </div>
</template>

<script>
  import CustomTable from './components/CustomTable.vue';

  export default {
    name: 'app',
    components: { CustomTable },
    data() {
      return {
        initID: 1,
        cargoes: [
          {
            id: 1,
            name: 'Cargo #1',
            project: 'Project #1',
            status: 'Registered',
            width: 2,
            height: 2,
            length: 10,
            weight: 50
          },
          {
            id: 2,
            name: 'Cargo #2',
            project: 'Project #1',
            status: 'Registered',
            width: 1.5,
            height: 2,
            length: 8,
            weight: 38
          },
          {
            id: 3,
            name: 'Cargo #3',
            project: 'Project #1',
            status: 'Registered',
            width: 10,
            height: 2,
            length: 10,
            weight: 75
          },
          {
            id: 4,
            name: 'Cargo #4',
            project: 'Project #2',
            status: 'Registered',
            width: 2,
            height: 2,
            length: 2,
            weight: 12
          },
          {
            id: 5,
            name: 'Cargo #5',
            project: 'Project #2',
            status: 'Registered',
            width: 5,
            height: 5,
            length: 5,
            weight: 59
          }
        ]
      };
    },
    methods: {
      onAddCargo(item) {
        console.log('on add');
        this.cargoes.push(item)
      },
      onEditCargo(item) {
        this.cargoes = this.cargoes.map(cargo => cargo.id === item.id ? item : cargo)
      },
      onDeleteCargo(items) {
        this.cargoes = this.cargoes.filter(cargo => !items.includes(cargo))
      }
    }
  };
</script>

<style lang="scss">
    @import "style";
</style>
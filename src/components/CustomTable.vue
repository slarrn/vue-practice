<template>
    <div>
        <md-table v-model="items" md-card @md-selected="onSelect">
            <md-table-toolbar>
                <h1 class="md-title">Cargoes</h1>
                <div class="md-toolbar-section-end">
                    <md-button class="md-icon-button" @click="showCreate">
                        <md-icon>add</md-icon>
                    </md-button>
                    <md-button :disabled="selected.length !== 1" class="md-icon-button" @click="showEdit">
                        <md-icon>edit</md-icon>
                    </md-button>
                    <md-button class="md-icon-button" @click="onDelete">
                        <md-icon>delete</md-icon>
                    </md-button>
                </div>
            </md-table-toolbar>

            <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" md-auto-select>
                <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Project #">{{ item.project }}</md-table-cell>
                <md-table-cell md-label="With / Height / Length (m)">{{ `${item.width} / ${item.height} /
                    ${item.length}` }}
                </md-table-cell>
                <md-table-cell md-label="Weight (mt)">{{ item.weight }}</md-table-cell>
            </md-table-row>
        </md-table>

        <md-dialog
          :md-active.sync="showDialog"
          @md-closed="item = null">
            <md-dialog-title>
                {{ `${item ? 'Edit' : 'Create'} Cargo` }}
            </md-dialog-title>
            <md-content>
                <CustomForm
                  :item="item"
                  @create="onAdd"
                  @edit="onEdit">
                </CustomForm>
            </md-content>
        </md-dialog>
    </div>
</template>

<script>
  import CustomForm from './CustomForm.vue';

  export default {
    name: 'CustomTable',
    components: { CustomForm },
    props: ['items'],
    data() {
      return {
        item: null,
        selected: [],
        showDialog: false
      };
    },
    methods: {
      getID() {
        return Math.max(this.items.map(cargo => cargo.id)) + 1;
      },
      onSelect(items) {
        this.selected = items;
      },
      onAdd(item) {
        item.id = this.getID();
        this.$emit('add', item);
      },
      onEdit(item) {
        this.$emit('edit', item);
      },
      onDelete() {
        this.$emit('delete', this.selected);
      },
      showCreate() {
        console.log('show create');
        console.log(this.showDialog);
        this.showDialog = true;
      },
      showEdit() {
        this.item = this.selected[0];
        this.showDialog = true;
      }
    }
  };
</script>

<style lang="scss">

</style>
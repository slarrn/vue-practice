<template>
    <div>
        <md-table v-model="items" md-card @md-selected="onSelect">
            <md-table-toolbar>
                <h1 class="md-title">Cargoes</h1>
                <div class="md-toolbar-section-end">
                    <md-button class="md-icon-button" @click="showCreate">
                        <md-icon>add</md-icon>
                    </md-button>
                    <md-button class="md-icon-button" @click="showEdit">
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
                <md-table-cell md-label="Status">{{ item.status }}</md-table-cell>
                <md-table-cell md-label="With / Height / Length (m)">{{ `${item.width} / ${item.height} /
                    ${item.length}` }}
                </md-table-cell>
                <md-table-cell md-label="Weight (mt)">{{ item.weight }}</md-table-cell>
            </md-table-row>
        </md-table>

        <md-dialog
          :md-active.sync="showDialog"
          @md-closed="clearItem">
            <md-dialog-title>
                {{ `${item ? 'Edit' : 'Create'} Cargo` }}
            </md-dialog-title>
            <md-content>
                <CustomForm :item="item"></CustomForm>
            </md-content>
            <md-dialog-actions>
                <md-button class="md-primary" @click="showDialog = false">Cancel</md-button>
                <md-button class="md-primary" @click="onSubmit">{{ item.id ? 'Edit' : 'Create' }}</md-button>
            </md-dialog-actions>
        </md-dialog>
    </div>
</template>

<script>
  import CustomForm from './CustomForm.vue';

  export default {
    name: 'CustomTable',
    components: { CustomForm },
    data() {
      return {
        item: {
          id: null,
          name: null,
          project: null,
          status: 'Registered',
          width: null,
          height: null,
          length: null,
          weight: null
        },
        selected: [],
        showDialog: false
      };
    },
    methods: {
      getID() {
        return Math.max(...this.items.map(cargo => cargo.id)) + 1;
      },
      onSelect(items) {
        this.selected = items;
      },
      onAdd() {
        this.item.id = this.getID();
        this.$store.dispatch('addItem', this.item);
      },
      onEdit() {
        this.$store.dispatch('editItem', this.item);
      },
      onDelete() {
        this.$store.dispatch('deleteItems', this.selected);
      },
      showCreate() {
        this.showDialog = true;
      },
      showEdit() {
        this.item = Object.assign({}, this.selected[0]);
        this.showDialog = true;
      },
      onSubmit() {
        this.item.id ? this.onEdit() : this.onAdd();
        this.showDialog = false;
      },
      clearItem() {
        this.item = {
          id: null,
          name: null,
          project: null,
          status: 'Registered',
          width: null,
          height: null,
          length: null,
          weight: null
        };
      }
    },
    computed: {
      items() {
        return this.$store.getters.cargoes;
      }
    }
  };
</script>

<style lang="scss">

</style>
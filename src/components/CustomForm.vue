<template>
    <div>
        <customForm novalidate class="md-layout">
            <md-card class="md-layout-item">
                <md-card-content>
                    <md-field>
                        <label for="name">Name</label>
                        <md-input name="name" id="name" v-model="form.name"></md-input>
                    </md-field>
                    <md-field>
                        <label for="project">Project #</label>
                        <md-input name="project" id="project" v-model="form.project"></md-input>
                    </md-field>
                    <md-field>
                        <label for="status">Status</label>
                        <md-select name="status" id="status" v-model="form.status">
                            <md-option value="Registered">Registered</md-option>
                            <md-option value="Placed on Carrier">Placed on Carrier</md-option>
                            <md-option value="On track">On track</md-option>
                            <md-option value="Delivered">Delivered</md-option>
                        </md-select>
                    </md-field>
                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-small-size-100">
                            <md-field>
                                <label for="width">Width</label>
                                <md-input type="number" name="width" id="width" v-model="form.width"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100">
                            <md-field>
                                <label for="height">Height</label>
                                <md-input type="number" name="height" id="height" v-model="form.height"></md-input>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-small-size-100">
                            <md-field>
                                <label for="length">Length</label>
                                <md-input type="number" name="length" id="length" v-model="form.length"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100">
                            <md-field>
                                <label for="weight">Weight</label>
                                <md-input type="number" name="weight" id="weight" v-model="form.weight"></md-input>
                            </md-field>
                        </div>
                    </div>
                </md-card-content>

                <md-card-actions>
                    <md-button type="submit" class="md-primary" @click="onSubmit">{{ item ? 'Edit' : 'Create' }}</md-button>
                </md-card-actions>
            </md-card>
        </customForm>
    </div>
</template>

<script>

  export default {
    name: 'CustomForm',
    props: {
      item: {
        required: false
      }
    },
    data() {
      return {
        form: this.item || {
          id: null,
          name: null,
          project: null,
          status: 'Registered',
          width: null,
          height: null,
          length: null,
          weight: null
        }
      };
    },
    methods: {
      onSubmit() {
        this.form.id ? this.$emit('edit', this.form) : this.$emit('create', this.form)
      }
    }
  };
</script>

<style lang="scss">

</style>
<template>
    <div>
        <form novalidate class="md-layout">
            <md-card class="md-layout-item form-card">
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
                                <label for="width">Width (m)</label>
                                <md-input type="number" name="width" id="width" v-model="form.width"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100">
                            <md-field>
                                <label for="height">Height (m)</label>
                                <md-input type="number" name="height" id="height" v-model="form.height"></md-input>
                            </md-field>
                        </div>
                    </div>
                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-small-size-100">
                            <md-field>
                                <label for="length">Length (m)</label>
                                <md-input type="number" name="length" id="length" v-model="form.length"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100">
                            <md-field>
                                <label for="weight">Weight (mt)</label>
                                <md-input type="number" name="weight" id="weight" v-model="form.weight"></md-input>
                            </md-field>
                        </div>
                    </div>
                </md-card-content>
            </md-card>
        </form>
    </div>
</template>

<script>

  export default {
    name: 'CustomForm',
    props: ['item'],
    data() {
      return {
        form: this.item
      };
    }
  };
</script>

<style lang="scss">
    .md-dialog-container {
        padding: 1rem;
        max-height: none !important;
    }

    .form-card {
        .md-card {
            box-shadow: none !important;
        }
    }
</style>
<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col xs12 md6>
                    <v-card>
                        <!-- <v-card class="d-flex" justify-center max-width="344"> -->
                        <v-card-text>
                            <h3>
                                UPLOAD AN EXCEL FILE
                            </h3>
                        </v-card-text>
                        <v-row wrap>
                            <v-col xs12 md6>
                                <v-file-input v-model="selectedFile" show-size accept="file/" label="File Input">
                                </v-file-input>

                            </v-col>
                            <v-col xs2 md6>
                                <v-card-actions>
                                    <v-btn elevation="2" :disabled="!selectedFile" @click="displayExcel()">Display Excel
                                        File</v-btn>
                                </v-card-actions>

                            </v-col>

                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
            <v-row d-flex justify-center>
                <div v-if="selectedFileAsJson">
                    <v-col cols="12" xs12 md6>
                        <vue-excel-editor ref="grid" v-model="selectedFileAsJson">
                            <!-- @TODO Make a for loop to create columns instead of hardcoding! -->
                            <!-- <vue-excel-column v-for="item in selectedFileAsJson" :key="item.index" field="index" label="User ID" type="number" width="80px" /> -->
                            <vue-excel-column field="index" label="User ID" type="number" width="80px" />
                            <vue-excel-column field="name" label="Name" type="string" width="150px" />
                            <vue-excel-column field="position" label="Position" type="string" width="170px" />
                        </vue-excel-editor>
                    </v-col>
                    <v-col xs12 md6>
                        <v-btn elevation="2" @click="downloadHandler()">Download File</v-btn>
                    </v-col>
                </div>
            </v-row>
        </v-container>

        <v-alert v-model="errorAlert" dense dismissible outlined type="error">
            {{ errorMessage }}
        </v-alert>
    </div>
</template>
  
<script>
import OrganizeExcelFile from "../utilities/organizeExcelFile"

export default {
    name: 'HomePage',

    data: () => ({
        errorAlert: false,
        errorMessage: null,
        selectedFile: null,
        selectedFileAsJson: null
    }),
    methods: {
        async displayExcel() {
            try {
                if (this.selectedFile) {
                    let orgFile = new OrganizeExcelFile(this.selectedFile);
                    this.selectedFileAsJson = await orgFile.convertExcelToJson();
                }
            } catch (err) {
                this.errorMessage = err;
                this.errorAlert = true;
                console.error(err);
            }
        },
        downloadHandler() {
            let format = 'xlsx'
            let exportSelectedOnly = true
            let filename = 'test'
            this.$refs.grid.exportTable(format, exportSelectedOnly, filename)
        }
    }
}
</script>
  
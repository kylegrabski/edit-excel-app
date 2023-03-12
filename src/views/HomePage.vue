<template>
    <div>
        <h3>
            UPLOAD AN EXCEL FILE
        </h3>
        <div>
            <v-file-input v-model="selectedFile" show-size accept="file/" label="File Input">
            </v-file-input>
            <v-btn elevation="2" @click="displayExcel()">Display Excel File</v-btn>
        </div>

        <div v-if="selectedFileAsJson">
            <h1>
                HERE'S THE FILE!!!
            </h1>
            <vue-excel-editor v-model="selectedFileAsJson">
                <vue-excel-column field="index"   label="User ID"       type="number" width="80px" />
                <vue-excel-column field="name"   label="Name"          type="string" width="150px" />
                <vue-excel-column field="position"  label="Position"       type="string" width="130px" />
            </vue-excel-editor>
        </div>
    </div>
</template>
  
<script>
import OrganizeOriginalExcelFile from "../utilities/organizeOriginalExcelFile"

export default {
    name: 'HomePage',

    data: () => ({
        selectedFile: null,
        selectedFileAsJson: ""
    }),
    methods: {
        async displayExcel() {
            // Display file here
            // We can then have a button to store the file
            let orgFile = new OrganizeOriginalExcelFile(this.selectedFile);
            this.selectedFileAsJson = await orgFile.convertExcelToJson();
            console.log(`ourResults: `, this.selectedFileAsJson);
        }
    }
}
</script>
  
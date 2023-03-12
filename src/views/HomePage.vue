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
                <vue-excel-column :field="selectedFileAsJson.index" label="index"
                    type="number" width="80px" />
                <vue-excel-column :field="selectedFileAsJson.name" label="Name" type="string" width="80px" />
                <!-- <vue-excel-column field="name" label="Name" type="string" width="150px" /> -->
                <!-- <vue-excel-column field="phone" label="Contact" type="string" width="130px" />
                <vue-excel-column field="gender" label="Gender" type="select" width="50px" :options="['F', 'M', 'U']" />
                <vue-excel-column field="age" label="Age" type="number" width="70px" />
                <vue-excel-column field="birth" label="Date Of Birth" type="date" width="80px" /> -->
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
  
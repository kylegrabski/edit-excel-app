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
    </div>
</template>
  
<script>
import OrganizeOriginalExcelFile from "../utilities/organizeOriginalExcelFile"

export default {
    name: 'HomePage',

    data: () => ({
        selectedFile: null
    }),
    methods : {
        async displayExcel() {
            // Display file here
            // We can then have a button to store the file
            let orgFile = new OrganizeOriginalExcelFile(this.selectedFile);
            let ourResults = await orgFile.convertExcelToJson();
            console.log(`ourResults: `, ourResults);
        }
    }
}
</script>
  
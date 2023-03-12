import * as XLSX from 'xlsx';

class OrganizeOriginalExcelFile {
    constructor(originalFile) {
        this.originalFile = originalFile
    }

    async convertExcelToJson() {
        /* Using the XLSX package, we turn the Excel file into an array of objects,
        where each object is a lane or 'stop' */
        let data = await this.originalFile.arrayBuffer();
        let workbook = XLSX.read(data);
        let firstSheetName = workbook.SheetNames[0];
        let worksheet = workbook.Sheets[firstSheetName];
        let results = XLSX.utils.sheet_to_json(worksheet, { defval: '' });
        console.log(`RESULTS!: `, results);
        return results
    }

}

export default OrganizeOriginalExcelFile;
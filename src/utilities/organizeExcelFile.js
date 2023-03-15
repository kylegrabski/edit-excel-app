import * as XLSX from 'xlsx';

class OrganizeExcelFile {
    constructor(file) {
        this.file = file
    }

    async convertExcelToJson() {
        /* Using the XLSX package, we turn the Excel file into an array of objects,
        where each object is a lane or 'stop' */
        let data = await this.file.arrayBuffer();
        let workbook = XLSX.read(data);
        let firstSheetName = workbook.SheetNames[0];
        let worksheet = workbook.Sheets[firstSheetName];
        let results = XLSX.utils.sheet_to_json(worksheet, { defval: '' });
        return results;
    }
}

export default OrganizeExcelFile;
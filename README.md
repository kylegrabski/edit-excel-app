# edit-excel-app
### __Proof of concept application.__ 

Allows users to upload Excel files (`.xlsx` or `.csv`).

The upload is then converted to JSON and is displayed on the screen that mimics an Excel file.

Users can then edit the values in the cells and can save the changes and download the updated file as `.xlsx` or `.csv`. 


## Uploading and Editing File
![Initial Excel Edit Demo](/src/assets/edit-excel-intro.gif)

## Downloading the edited file
![Initial Excel Download Demo](/src/assets/edit-excel-download-vid.gif)


## Tech used
- [Vue 2.6.14 ](https://v2.vuejs.org/)
- [Vuetify 2.6.0](https://v2.vuetifyjs.com/en/)
- [xlsx 0.17.5](https://www.npmjs.com/package/xlsx)
- [vue-excel-editor 1.5.19](https://www.npmjs.com/package/vue-excel-editor)

## FUTURE FEATURES
- Have users choose either `.xlsx` or `.csv` extensions on download
- Save uploads (limited amount)
- Allow unique users
- Connect stored uploads to each user
- Add socket to view updates in real time
- Caching of edited files
- Styling
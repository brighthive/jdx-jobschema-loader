export const convertJobSchema = (data) => {
    return {
        type: "CONVERT",
        uploadedFileData: data
    }
}
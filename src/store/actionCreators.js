
const jobSchemaAction = (data) => {
    return {
        type: "CONVERT",
        jobData: data
    }
}

export const convertJobSchema = (pond) => {
    return dispatch => {
        const file = pond.getFile().file;
		const fileReader = new FileReader();

		// Assign a handler for the load event, i.e. a function that executes when the FileReader reads a file
		// https://developer.mozilla.org/en-US/docs/Web/API/FileReader#Event_handlers
		fileReader.onloadend = () => {
			const fileContent = fileReader.result;
            const contentAsObj = JSON.parse(fileContent)
            
            dispatch(jobSchemaAction(contentAsObj['@graph']))
		}

        fileReader.readAsText(file);      
    }
}
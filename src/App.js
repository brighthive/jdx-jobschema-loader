import React, { Component } from 'react';
import './App.css';

import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

let fileReader;

class App extends Component {
  state = {
    uploadedFileData: null,
  }

  // https://medium.com/@ilonacodes/front-end-shorts-how-to-read-content-from-the-file-input-in-react-17f49b293909
  handleFileRead = (e) => {
    const content = fileReader.result;
    this.setState({
      uploadedFileData: content
    })
  }

  onChangeHandler=event=>{
    let file = this.pond.getFile().file;
    fileReader = new FileReader();
    fileReader.onloadend= this.handleFileRead;
    fileReader.readAsText(file);
  }

  render() {
    return (
      <div className="App">
          <FilePond               
            ref={ref => (this.pond = ref)}
            onaddfile={() => this.onChangeHandler()}/>
      </div>
    );
  }
}

export default App;

class FileInput extends React.Component {
    constructor(props) {
    
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.FileInput = React.createRef();
    }
    handleSubmit(event) {
        alert(`Selected file - ${this.FileInput.current.files[0].name} `);
    }
  
    render() {
   
      return (
        <form onSubmit={this.handleSubmit}>
          <lable>
            Upload file:
            <input type="file" ref={this.fileInput} 
            />
          </lable>
          <br />
          <button type="submit">Submit</button>
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <FileInput />,
    document.getElementById('root')
  );
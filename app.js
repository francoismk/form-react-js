class App extends React.Component {

    state = {
        comments:[],
        yourName: "",
        yourComment: ""
    }

    addYourName = (event) => {
        console.log(event.target.value);

        this.setState({
            yourName: tmp
        })
    }

    addYourComment = (event) => {
        console.log(event.target.value);

        this.setState({
            yourComment: tmp
        })
    }

    formSubmit = (event) => {
        event.preventDefault();

        const tmp = this.state.comments.concat(this.state.yourName.yourComment);

        this.setState({
            comments: tmp,
            yourName: "",
            yourComment: ""

       
        })
    }
    render() {
        return(
            <form onSubmit={this.formSubmit}>
                <p>say something</p>
                <input type="text" value={this.state.yourName} onChange={this.addYourName}/>
                <input type="text" value ={this.state.yourComment} onChange={this.addYourComment}/>
                <input type="submit" value ="Comment"/>
            </form>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
import React, {Component, Fragment} from 'react';
import axios from 'axios'
import Results from './components/Results';

class App extends Component {
    constructor() {
        super();
        this.state = {
            gifs: [],
            searchTerms: 'cats',
            loading: true,
        }
    }

    getTrending = async () => {

        try {
            const response = await axios.get('http://api.giphy.com/v1/gifs/trending?api_key=6lsxo45kmFDZTmLUfVi37XyaF3EyNxzq');
            const {data} = await response.data;
            this.setState({
                gifs: data,
                loading: false,
            })
        }
        catch (err) {
            console.log(err);

        }
    };

    performSearch = async (query = 'react') => {
        let search = document.getElementById('search').value;
        try {
            const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&limit=25&api_key=6lsxo45kmFDZTmLUfVi37XyaF3EyNxzq`);
            const {data} = await response.data;
            this.setState({
                gifs: data,
                loading: false,
            })
        }
        catch (err) {
            console.log(err);

        }
    };

    componentDidMount() {
        // this.performSearch(this.state.searchTerms);
        this.getTrending();
    };

    render() {
        console.log(this.state.gifs);
        return (
            <Fragment>
                <div>
                    <input onKeyUp={this.performSearch} id='search' type='text'/>
                </div>
                {
                    (this.state.loading) ?
                        <p>&hellip;Loading&hellip;</p>
                        : <Results data={this.state.gifs}></Results>
                }
            </Fragment>

        );
    }
}

export default App;

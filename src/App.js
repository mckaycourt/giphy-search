import React, {Component, Fragment} from 'react';
import axios from 'axios'
import Results from './components/Results';
import SearchForm from './components/SearchForm';

class App extends Component {
    constructor() {
        super();
        this.state = {
            gifs: [],
            loading: true,
        }
    }

    getTrending = async () => {
        let limit = document.querySelector('select').value;
        try {
            const response = await axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=6lsxo45kmFDZTmLUfVi37XyaF3EyNxzq&limit=${limit}`);
            const {data} = await response.data;
            this.setState({
                gifs: data,
                loading: false,
            })
        } catch (err) {
            console.log(err);

        }
    };

    performSearch = async (query = 'react', limit = 25) => {
        try {
            const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=${limit}&api_key=6lsxo45kmFDZTmLUfVi37XyaF3EyNxzq`);
            const {data} = await response.data;
            this.setState({
                gifs: data,
                loading: false,
            })
        } catch (err) {
            console.log(err);

        }
    };

    componentDidMount() {
        this.getTrending();
    };

    render() {
        return (
            <Fragment>
                <SearchForm performSearch={this.performSearch}/>
                <button onClick={this.getTrending}>Get Trending</button>
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

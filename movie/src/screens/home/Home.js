import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../common/header/movieData';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import genres from '../../screens/genres';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import artists from '../../screens/artists';
import Button from '@material-ui/core/Button';
import ReactDOM from 'react-dom';
import Details from '../../screens/details/Details';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    gridListMain: {
        transform: 'translateZ(0)',
        cursor: 'pointer'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
    },
    title: {
        color: theme.palette.primary.light,
    }
});

class Home extends Component {

    constructor() {
        super();
        this.state = {
            movieName: "",
            genres: [],
            artists: []
        }
    }

    movieNameChangeHandler = event => {
        this.setState({ movieName: event.target.value });
    }

    artistSelectHandler = event => {
        this.setState({ artists: event.target.value });
    }

    movieClickHandler = (movieId) => {
        ReactDOM.render(<Details movieId={movieId} />, document.getElementById('root'));
    }
    genreSelectHandler = event => {
        this.setState({ genres: event.target.value });
    }


    render() {
        const { classes } = this.props;
        return (
            <div>
                    <Header showBookShowSearch="true"/>
                    

                    </div>
        );
           } 
}

export default withStyles(styles)(Home); 
// Random Pokemon Generator
import React from 'react';
import Axios from 'axios';

class RandomPokemon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            error: false,
            guess: "",
            pokemon: "",
            caught: []
        };
    }

    generatePokemon() {
        let min = Math.ceil(1);
        let max = Math.floor(893);
        let num = Math.floor(Math.random() * (max - min + 1) + min);

        Axios("https://pokeapi.co/api/v2/pokemon/" + num)
        .then((response) => {
            this.setState({ 
                pokemon: response.data,
                loading: false 
            });
        })
        .catch((error) => {
            console.log("Error: " + error);
            this.setState({ 
                loading: false,
                error: true 
            });
        });
    }

    render() {
        return(
            <div>
                <h1>Search for Pokemon</h1>
                <br />
                <button onClick={() => this.generatePokemon()}>Search</button>
                {
                    (this.state.loading === true) ? (<p>Searching...</p>) : (
                        (this.state.error === true) ? (<p>Nothing found!</p>) : (
                            <div>
                            <p>Found!</p>
                            <img alt="pokemon" src={this.state.pokemon.sprites.front_default} />
                            </div>
                        )

                    )
                }
            </div>
        );
    }

}

export default RandomPokemon;
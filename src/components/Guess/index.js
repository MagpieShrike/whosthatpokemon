import React from 'react';

class Guess extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            //pokemon: this.props.pokemon.name,
            guess: "",
            correct: null
        }
    }

    check(pokemon) {
        (this.state.guess == pokemon) 
        ? ( this.setState({ correct: true }) )
        : ( this.setState({ correct: false }) )
    }

    render() {
        return(
            <div>
                {console.log(this.props.name)}
                <h1>Who's that Pokemon?</h1>
                <input type="text" onChange={(event) => {
                    this.setState({ guess: event.target.value})
                }} />
                <button onClick={() => this.check(this.props.name)}>Identify</button>
            
                {
                    (this.state.correct === null) ? ( <></>)
                    : (
                        (this.state.correct == true) 
                        ? ( <p>Correct!</p> )
                        : ( <p>Try again.</p> )
                    )
                    
                }
            </div>
        );
    }
}

export default Guess;
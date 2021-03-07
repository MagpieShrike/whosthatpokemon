import React from 'react';
import iCSS from './identify.module.css'

class Identify extends React.Component {
    constructor(props){
        super(props);

        this.state = {

            guess: "",
            correct: null,
            newItem: ""
        }
    }

    check(pokemon) {
        (this.state.guess == pokemon) 
        ? ( this.setState({ correct: true }) )
        : ( this.setState({ correct: false }) )
    }

    updateCollection() {
        this.setState(() => {
            let newItem = this.props.name;
            this.props.updateCollection(newItem)
            return {
                collection: newItem,
            };
        })
    }

    render() {
        return(
            <div className={iCSS.box}>
                {console.log(this.props.name)}
                <h1 className={iCSS.h1}>Who's that Pokemon?</h1>
                <input className={iCSS.input} type="text" onChange={(event) => {
                    this.setState({ guess: event.target.value})
                }} />
                <button className={iCSS.button} onClick={() => this.check(this.props.name)}>Identify</button>
            
                {
                    (this.state.correct === null) ? ( <></>)
                    : (
                        (this.state.correct == true) 
                        ? ( <>
                                <p className={iCSS.p}>Correct!</p>
                                {
                                    this.updateCollection
                                    // Error: maximum update depth exceeded
                                }
                            </> )
                        : ( <p className={iCSS.p}>Try again.</p> )
                    )
                    
                }
            </div>
        );
    }
}

export default Identify;
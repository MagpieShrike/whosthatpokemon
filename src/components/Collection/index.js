// Collection Screen
import React from 'react';
import Identify from '../Identify'

class Collection extends React.Component{
    constructor(props){
        super(props);

        this.state = { 
            collection: this.props.collection
        }
    }

    render() {
        return(
            <div>
                {
                    this.props.collection.map((item, index) => {
                        return item;
                    })
                }
            </div>
        )
    }
}

export default Collection;
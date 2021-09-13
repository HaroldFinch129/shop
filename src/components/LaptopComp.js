import React from 'react'
import { connect } from 'react-redux'

const LaptopComp = (props) => {
    return (
        <div>
            <h2>Laptops -- Pure Redux --</h2>
            <h3>
                number Of Laptops :
                <span>{props.numberOfLaptops}</span>
            </h3>
        </div>
    )
}

const mapStateToProp = (state) => {
    return {
        numberOfLaptops:state.laptop.numberOfLaptops
    }
}

export default connect()(LaptopComp)

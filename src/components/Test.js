import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import { yellow } from '@material-ui/core/colors'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

let Test = props => {

    const [name, setName] = useState("Test Component")


    return (
        <div>
            <h2>{name+" "+props.name}</h2>
            <NavLink to="/" >Home</NavLink>
            <p>{props.reducer}</p>
            <div style={{margin: 20, backgroundColor: "yellow"}}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/test" exact>
                            <h3>Base Test</h3>
                            <NavLink to="/test/new">New</NavLink>
                        </Route>
                        <Route path="/test/new" exact>
                            <h3>New Test</h3>
                            <NavLink to="/test">Base Test</NavLink>
                        </Route>
                    </Switch>
                </BrowserRouter>
                <div>
                    <NavLink to="/test/new" >New Base Link</NavLink>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        reducer: state.reducer
    }
}

export default connect(mapStateToProps)(Test);
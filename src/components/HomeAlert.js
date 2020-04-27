import React from 'react'
import {connect} from 'react-redux';
import {HIDE_ALERT} from '../actions';


function HomeAlert({homeAlert, dispatch}) {
    
    const hideAlert = () => {
        dispatch({type: HIDE_ALERT})
    }

    return (
        <div className={homeAlert ? 'homealert' : 'hideAlert'}>
            <span className="closebtnhome" onClick={hideAlert}>&times;</span> 
            <span>
                This project was made with somebody's template.
                Everything from logical side was made by myself
                as is fully understandable for me.
                </span>
        </div>
    )
}




const mapStateToProps = (state) => {
    return {homeAlert: state.homeAlert}
  }
  export default connect(mapStateToProps) (HomeAlert);
  
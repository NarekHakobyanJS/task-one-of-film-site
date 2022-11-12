import React from "react";
import { connect } from "react-redux";
import { setGenresAC } from "../../redux/navbarReducer";
import NavBar from "./NavBar";

let mapStateToProps = (state) => {
    return {
        genres : state.navbar.genres,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setGenres : (genres) => {
            dispatch(setGenresAC(genres))
        }
    }
}
const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar)
export default NavBarContainer;
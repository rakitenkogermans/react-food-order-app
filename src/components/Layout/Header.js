import React from 'react';
import mealsImg from '../../assets/meals.jpg';
import cl from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
    return (
        <>
            <header className={cl.header}>
                <h1>ReactFood</h1>
                <HeaderCartButton onShowModal={props.onShowModal}/>
            </header>
            <div className={cl['main-image']}>
                <img src={mealsImg} alt="meals image"/>
            </div>
        </>
    );
}

export default Header;

import React from 'react';
import styled from 'styled-components';
import LogoImg from '../image/logo.svg';
import LogInImg from '../image/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const LoginImg = styled.img`
    :hover{
        filter: drop-shadow(3px 5px 5px  #104000);
    }
    
`;

const ImgLogo =styled.img`
    width: 50px;
`;

const LogIn = styled.button`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    border: none;
    color: inherit;
    font-size: 16px;
    line-height: 19px;      
    :hover{
        filter: drop-shadow(3px 5px 5px  #104000);
    }
    
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={LogoImg} alt="logo"/>
            <H1>MrDonald's</H1>
        </Logo>
        
        <LogIn><LoginImg src={LogInImg} alt="login"/>войти</LogIn>
    </NavBarStyled>
)
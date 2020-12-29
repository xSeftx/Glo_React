import React from 'react';
import styled from 'styled-components';
import dbMenu from '../DBMenu';
import {ListItem} from './ListItem';
import bannerImg from '../../image/banner.png';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;

const Section = styled.section`
    padding: 30px;
`;

const MenuBanner = styled.div`
  width: 100%;
  height: 210px;
  background-image: url(${bannerImg});
  background-size: cover;
  background-position: center;
`;

export const Menu = ({ setOpenItem }) => (
    <MenuStyled>
        <MenuBanner/>
        <Section>
            <h2>Бургеры</h2>
            <ListItem 
                itemList={dbMenu.burger}
                setOpenItem={setOpenItem}
            />
        </Section>
        <Section>
            <h2>Загустки / Напитки</h2>
            <ListItem 
                itemList={dbMenu.other}
                setOpenItem={setOpenItem}
            />
        </Section>

    </MenuStyled>

);
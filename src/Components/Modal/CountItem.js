import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;

`;

const CountInput = styled.input`
    width: 50px;
    font-size: 20px;
    text-align: center;


`;

const ButtonCount = styled.button`
    width: 30px;
    height: 30px;
    background-color: transparent;
`;

export function CountItem({count, setCount, onChange}) {    

    return (
        <CountWrapper>
            <span>Количество</span>
            <div>
                <ButtonCount disabled={count <=1} onClick={() => setCount(count - 1)}>-</ButtonCount>
                <CountInput  value={count <0 || count>50 ? 1 : count} onChange={onChange}/>
                <ButtonCount disabled={count >=50}onClick={() => setCount(count + 1)}>+</ButtonCount>
            </div>
        </CountWrapper>
    )
}
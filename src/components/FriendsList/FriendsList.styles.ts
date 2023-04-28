import styled from 'styled-components';

export const Wrapper = styled.section`

        ul {
            display: grid;
            width: 360px;
            padding: 15px;
            height: 320px;
            grid-template-columns: auto auto auto;
            border: 7px solid rgb(218, 82, 171);           
            overflow: hidden;
            overflow-y: hidden;
            overflow-y: scroll;
            scrollbar-color: #d52f5d #fff;
            scrollbar-width: thin;

            li {
                display: flex;
                flex-direction: column;
                -moz-box-align: center;
                align-items: center;
                text-align: center;
            }

            img {
                width: 90px;
                height: 90px;
                border-radius: 50%;
                object-fit: cover;
            }
        }
    

`
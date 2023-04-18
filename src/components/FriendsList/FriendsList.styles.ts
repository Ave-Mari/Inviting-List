import styled from 'styled-components';

export const Wrapper = styled.section`

        ul {
            display: grid;
            width: 300px;
            grid-template-columns: auto auto auto;

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
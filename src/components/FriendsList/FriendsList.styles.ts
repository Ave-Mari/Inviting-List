import styled from 'styled-components';

export const Wrapper = styled.section`

.bts-wrapper {
    width: 321px;
    button {
        background: #c64883;
        color: #fff;
        padding: 6px 14px;
        border-radius: 20px;
        font-size: 17px;
        border: medium none;
        margin-left: 8px;
    }
}
    ul::-webkit-scrollbar {
        background: #fff;  
        width: 8px;    
    }
    ul::-webkit-scrollbar-thumb {
        background: rgb(227, 155, 175);  
    }

    ul {
        display: -ms-grid;
        display: grid;
        padding: 15px;
        width: 360px;
        height: 320px;
        -ms-grid-columns: auto auto auto;
        grid-template-columns: auto auto auto;
        border: 7px solid rgb(218, 82, 171);           
        overflow: hidden;
        overflow-y: hidden;
        overflow-y: scroll;
        scrollbar-color: rgb(227, 155, 175) #fff;
        scrollbar-width: thin;

  

    li {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        text-align: center;
    }

    img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        -o-object-fit: cover;
           object-fit: cover;
    }

}
    

`
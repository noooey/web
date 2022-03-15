import styled from 'styled-components';

export const ProfileBlock = styled.div`
    display: flex;
    margin-top: 15px;
    margin-bottom: 25px;
    justify-content: left;
    align-items: center;

    .ProfileImg {
        width: 60px;
        height: 60px;
        background: #cccccc;
        border-radius: 50%;
        align-items: center;
        object-fit: cover;
        justify-content: center;
        align-items: center;
    }
`;


export const ProfileIntro = styled.div`
    margin-left: 10px;

    .ProfileName {
        height: 7px;
        color: #666666;
        margin-top: -4px;
    }
    .ProfileIntro {
        height: 5px;
        color: #e3e3e3;
        font-size: 15px;
    }
`;
import styled from 'styled-components';

export const FriendListBlock =  styled.div`
    display: flex;
    margin-bottom: 25px;
    justify-content: space-between;

    .friend {
        display: flex;
        min-width: 50px;
        min-height: 50px;
        background: #cccccc;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        color: #666666;
        margin: 1px;
    }
`;

export const Friends = styled.div`
    display: flex;
    width: 340px;
    margin: 0 10px;
    overflow-x: scroll;
`;
import styled from 'styled-components';

export const BigButton = styled.button`
width:${props => props.width || '200px'};
color:${props => props.color || 'white'};
line-height:32px;
font-size:18px;
border-radius:5px;
background:${props => props.color || 'blue'};
margin-top:24px;
cursor:pointer;
`;
export const SmallButton = styled.button`
min-width:${props => props.width || '100px'};
color:${props => props.color || 'white'};
border-bottom:${props => props.isActiv ? "4px solid white" : null};
line-height:32px;
font-size:18px;
margin-left:10px;
border-radius:5px;
background:${props => props.backgroundColor || 'linear-gradient(90deg, rgba(0,36,36,1) 30%, rgba(74,164,67,0.28895308123249297) 93%, rgba(0,212,255,1) 100%)'};
cursor:pointer;
outline:0;
`;
const ConfirmationWrapper = styled.div`
display:flex;
`;

export const ConfirmationButton = props => {
    const {
        confirmButtonText,
        confirmButtonOnClick,
        confirmButtonDisabled,
        dismissButtonText,
        dismissButtonOnClick,
        dismissButtonDisabled
    } = props;
    return (
        <ConfirmationWrapper>
            <SmallButton onClick={dismissButtonOnClick} disabled={dismissButtonDisabled} >{dismissButtonText}</SmallButton>
            <SmallButton onClick={confirmButtonOnClick} disabled={confirmButtonDisabled} >{confirmButtonText}</SmallButton>
        </ConfirmationWrapper>
    );
}

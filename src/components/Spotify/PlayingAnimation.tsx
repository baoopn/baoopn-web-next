import styled, { keyframes } from "styled-components";

interface PlayingProps {
  height?: string;
  width?: string;
}

const PlayingAnimation = ({ height = "20px", width = "13px" }: PlayingProps) => {
  return (
    <Playing height={height} width={width}>
      <span />
      <span />
      <span />
    </Playing>
  );
};

const Animation = keyframes`
  10% {
    transform: scaleY(0.3);
  }
  30% {
    transform: scaleY(1);      
  }
  60% {
    transform: scaleY(0.5);
  }
  80% {
    transform: scaleY(0.75);
  }
  100% {
    transform: scaleY(0.5);
  }
`;

const Playing = styled.div<PlayingProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  
  span {
    width: 3px;
    height: 100%;
    background-color: #1ED760;
    border-radius: 3px;
    animation: ${Animation} 2.2s ease infinite alternate;
    content: ' ';
    transform-origin: bottom;
    
    &:nth-of-type(2) {
      animation-delay: -2.2s;
    }
    
    &:nth-of-type(3) {
      animation-delay: -3.7s;
    }
  }
`;

export default PlayingAnimation;
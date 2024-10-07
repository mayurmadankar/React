import styled from "styled-components";

// Complete the below given ButtonView style Component

export const ButtonView = styled.button`
  background-color: ${({ filled, bg }) => (filled ? bg : "#fff")};
  color: ${({ filled, color }) => (filled ? color : "#000")};
  border: ${({ filled }) => (filled ? "none" : "1px solid #000")};
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

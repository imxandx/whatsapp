import { styled } from "styled-components";
import background from './assets/zap.png'

export const Main = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.bgColor};
`;

export const Background = styled.div`
  background-color: ${({theme}) => theme.colors.mainColor};
  height: 20%;
  width: 100%;
  position: absolute;
  top: 0;
`;

export const ChatContainer = styled.div`
  width: 95%;
  max-width: 1800px;
  height: 95%;
  background-color: ${({theme}) => theme.colors.primary};
  position: absolute;
  display: flex;
`;

export const ChatContacts = styled.div`
  width: 30%;
  height: 100%;
  border-right: 1px solid ${({theme}) => theme.colors.borderColor1};
`;

export const ChatOptions = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({theme}) => theme.colors.tertiary};
`;

export const ChatItem = styled.div`
  box-sizing: border-box;
  padding: 10px;
  border-top: 1px solid ${({theme}) => theme.colors.borderColor2};
  border-bottom: 1px solid ${({theme}) => theme.colors.borderColor2};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width: 60px;
  height: auto;
  border-radius: 50%;
`;

export const TitleChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  overflow-x: hidden;
`;

export const TitleMessage = styled.span`
  font-size: 18px;
`;

export const LastMessage = styled.span`
  color: ${({theme}) => theme.colors.secondary};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ChatMessages = styled.div`
  flex: 1;
  background-image: url(${background});
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ChatMessagesArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px 30px 0 30px;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8c8c8c;
    border-radius: 20px;
  }
`;

export const MessageContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: ${({myMessage}) => myMessage ? 'flex-end' : 'flex-start'};
`;

export const Message = styled.span`
  flex-wrap: wrap;
  max-width: 40%;
  padding: 8px;
  background-color: ${({ myMessage }) => (myMessage ? '#007bff' : '#f1f1f1')};
  color: ${({ myMessage }) => (myMessage ? '#fff' : '#333')};
  border-radius: 8px;
  margin-bottom: 5px;
  position: relative;
  word-break: break-word;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    border: 8px solid transparent;
    border-top-color: ${({ myMessage }) => (myMessage ? '#007bff' : '#f1f1f1')};
    z-index: 1;
  }

  ${({ myMessage }) =>
    myMessage
      ? `
    border-top-right-radius: 0;
    left: 0;
    &::before {
      left: 100%;
      border-left-width: 0;
    }
  `
      : `
    border-top-left-radius: 0;
    right: 0;
    &::before {
      right: 100%;
      border-right-width: 0;
    }
  `}
`;

export const ChatInputArea = styled.div`
  width: 100%;
  height: auto;
  background-color: ${({theme}) => theme.colors.primary};
  box-sizing: border-box;
  padding: 5px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ChatInput = styled.textarea`
  width: 90%;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  outline: none;
  border-radius: 8px;
  box-sizing: border-box;
  padding-top: 5px;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  resize: none; 
  overflow-y: hidden; 
  transition: height 0.3s ease;
  height: ${({ currentHeight }) => currentHeight}px;
`;

export const SendMessageContainer = styled.div`

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
`;

export const SendMessage = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const LoginContainer = styled.div`
  height: 100vh;
  background-color: #f2f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContent = styled.div`
  width: 450px;
  height: 500px;
  border: 2px solid #007bff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  line-height: 60px;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  font-size: 25px;
`;

export const UserNameInput = styled.input`
  height: 40px;
  width: 300px;
  border: 1px solid #007bff;
  border-radius: 7px;
`;

export const JoinButton = styled.button`
  width: 250px;
  height: 35px;
  margin-top: 3%;
  border: 1px solid #333;
  border-radius: 6px;
  background: #007bff;
  color: #fff;
  cursor: pointer;
`;
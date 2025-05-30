import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginComplete = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const name = location.state?.name || '회원'; // fallback 처리

  return (
    <Wrapper>
      <Container>
        <LogoutButton onClick={() => navigate('/')}>로고</LogoutButton>

        <ImageBox>
          <p>캐릭터 이미지</p>
        </ImageBox>

        <MessageBox>
          <p><strong>{name}님</strong></p>
          <p>회원가입을 축하드립니다!</p>
        </MessageBox>

        <GoLoginButton onClick={() => navigate('/MainLogin')}>로그인하러 가기</GoLoginButton>
      </Container>
    </Wrapper>
  );
};

export default LoginComplete;


const Wrapper = styled.div`
  width: 100%;
  height: 100vh; /* ✅ 정확히 한 화면 높이 */
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  padding: 20px;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 464px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  text-align: center;
  position: relative;
  padding: 20px;
`;
const LogoutButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
`;

const ImageBox = styled.div`
  width: 100%;
  max-width: 300px;
  height: 300px;
  background-color: #eee;
  margin: 100px auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
`;

const MessageBox = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.6;
  margin: 30px 0;
`;

const GoLoginButton = styled.button`
  padding: 12px 20px;
  font-size: 18px;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
`;
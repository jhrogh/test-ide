import React from "react";
import { Link } from 'react-router-dom';

function Main() {
  return (
  <div>
    <h1>Main페이지입니다</h1>
    <Link to="/join">회원가입</Link>
    <br></br>
    <Link to="/findinfo">아이디/비밀번호 찾기</Link>
  </div>
  );
}

export default Main;

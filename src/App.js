import Listtodo from "./Component/Listtodo"; 
import styled from "styled-components";

function App() {

  return (
    <Container>
<Wrapper>
        <Listtodo  />
        {/* <Todo3 /> */}
</Wrapper>
    </Container>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 400px;
  height: 100%;
  width: 700px;
  background-color: ivory;
  display: flex;
  border-radius: 10px;
  align-items: center;
  padding-top:20px;
  margin-top:20px;
  // justify-content: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
`;

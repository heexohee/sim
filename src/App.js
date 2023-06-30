import './App.css';
import { styled } from 'styled-components';


const StContainer = styled.div`
display: flex;
`


//태그로서 사용이 될 수 있는 컴포넌트가 된 것.
//그래서 스타일된 컴포넌트.
//스타일드 컴포넌트의 장점이 조건적으로 스타일링 할 수 있다!
// input은 props가 들어오고, props에는 컴포넌틑에 정해줬던 props값이 무조건 들어간다.
const StBox = styled.div`
width: 100px;
height: 100px;
border: 1px solid ${(props) => {
  return props.borderColor
  }};
margin: 20px;
`

// 박스의 색을 배열 형태로 선언
const boxList = ['red', 'blue', 'green', 'black']

//색을 넣으면 이름을 반환 -> 여러줄의 코드를 한줄로 줄일 수 있다.
const getBoxName =(color)=>{
  switch (color) {
    case 'red' : 
    return "빨간상자님";

    case 'blue' : 
    return "파랑상자님";

    case 'green' : 
    return "초록상자님";

    default:
      return '검정상자님';
  }
}
function App() {
  return (
    <StContainer>
    {/* <StBox borderColor='red' > 빨간상자님</StBox> */}
    {
      boxList.map((box)=>{
        return <StBox borderColor={box}>{getBoxName(box)}</StBox>
        
      })
    }
    </StContainer>
  );
}
// props : 부모 컴-> 자식 컴에서 내려주는 데이터
export default App;

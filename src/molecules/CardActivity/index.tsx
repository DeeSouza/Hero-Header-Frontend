import { FiArrowUp } from "react-icons/fi";
import * as S from "./styles";

const CardActivity = () => (
  <S.Container>
    <small>Activity</small>
    <div>
      <span>18</span>
      <FiArrowUp size={25} color="#FFF" />
    </div>

    <i className="circle1"></i>
    <i className="circle2"></i>
    <i className="circle3"></i>
  </S.Container>
);

export default CardActivity;

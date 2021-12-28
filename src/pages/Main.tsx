import Frontend from "../templates/Frontend";
import ButtonContact from "../atoms/ButtonContact";
import CardActivity from "../molecules/CardActivity";

import HeroHeaderImage from "../assets/hero-header-image.png";

import * as S from "./styles";

function Main() {
  return (
    <Frontend>
      <S.Container>
        <div>
          <h1>Design driven development of your web product</h1>
          <h6>
            We are a full service digital agency that builds immesive user
            experience.
          </h6>

          <ButtonContact />
        </div>

        <S.ColumnImage>
          <CardActivity />

          <img src={HeroHeaderImage} alt="Uma mulher fazendo uma pesquisa" />
        </S.ColumnImage>
      </S.Container>
    </Frontend>
  );
}

export default Main;

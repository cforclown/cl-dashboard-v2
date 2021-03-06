import styled from 'styled-components';
import { Card } from '.';

export const CLCard = styled(Card)`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;

  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba($color: black, $alpha: 0.4);

  .cl-content-card-header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    width: 100%;

    padding: 0.6rem 1rem;

    @media screen and (max-width: 768px) {
      padding: 0.4rem 0.8rem;
    }

    border-bottom: 1px solid #dfe4ea;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      font-weight: bold;
    }
  }

  .cl-content-card-body {
    width: 100%;

    padding: 0.6rem 1rem;

    @media screen and (max-width: 768px) {
      padding: 0.4rem 0.8rem;
    }
  }

  .cl-content-card-footer {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    padding: 0.4rem 0.8rem;

    border-top: 1px solid #dfe4ea;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: bold;
    }
  }
`;
CLCard.displayName = "Card";

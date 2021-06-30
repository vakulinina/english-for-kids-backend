import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

interface Props {
  mistakes: number,
}

const FinalPage: React.FunctionComponent<Props> = ({ mistakes }: Props) => {
  const history = useHistory();

  useEffect(() => {
    const audio = mistakes ? new Audio('sounds/failure.mp3') : new Audio('sounds/success.mp3');
    audio.play();
    setTimeout(() => history.push('/'), 5000);
  }, []);

  return (
    <main>
      <h1>{`Game over, you made ${mistakes} mistake(s)`}</h1>
    </main>
  );
};

export default FinalPage;

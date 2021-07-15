/* eslint-disable consistent-return */
import cards from '../categories/cards';

const deleteCard = async (word: string): Promise<void> => {
  Object.keys(cards).forEach((key) => {
    const wordIndex = cards[key].findIndex((card) => card.word === word);
    if (wordIndex >= 0) {
      cards[key].splice(wordIndex, 1);
      return Promise.resolve();
    }
  });
};

export default deleteCard;

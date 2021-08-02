/* eslint-disable consistent-return */
import cards from '../categories/cards';

interface CardProps {
  word: string;
  translation: string;
  categoryId: string;
}

const createCard = async ({ word, translation, categoryId }: CardProps): Promise<void> => {
  cards[categoryId].push({
    word, translation, image: '', category: '',
  });
  return Promise.resolve();
};

const deleteCard = async (word: string): Promise<void> => {
  Object.keys(cards).forEach((key) => {
    const wordIndex = cards[key].findIndex((card) => card.word === word);
    if (wordIndex >= 0) {
      cards[key].splice(wordIndex, 1);
      return Promise.resolve();
    }
  });
};

export { createCard, deleteCard };

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import WordCard from './admin-word-card';
import { getCardsByCategory } from '../api/api';
import Card from '../models/card';
import CreateWordCard from './create-word-card';

interface UrlParams {
  category: string,
}

const AdminWords: React.FunctionComponent = () => {
  const { category } = useParams() as UrlParams;
  const [words, setWords] = useState([] as Card[]);
  const [shouldUpdate, setShouldUpdate] = useState({});

  useEffect(() => {
    getCardsByCategory(category).then((data) => setWords(data));
  }, [shouldUpdate]);

  return (
    <main>
      <h2 className="admin-words-title">
        {`Category: ${words.length > 0 ? words[0].category : category.split('-').join(' ')}`}
      </h2>
      <ul className="admin-cards">
        {words.map((word) => (
          <WordCard
            word={word.word}
            key={word.word}
            translation={word.translation}
            sound={`${word.word}.mp3`}
            image={word.image}
            onUpdateWords={() => setShouldUpdate({})}
          />
        ))}
        <CreateWordCard categoryId={category} onUpdateWords={() => setShouldUpdate({})} />
      </ul>
    </main>
  );
};

export default AdminWords;

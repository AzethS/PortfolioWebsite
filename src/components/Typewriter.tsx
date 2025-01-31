import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 150,   // Default typing speed if not provided
  deletingSpeed = 50,   // Default deleting speed if not provided
  delayBetweenWords = 1000 // Delay between words if not provided
}) => {
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [speed, setSpeed] = useState(typingSpeed);

  useEffect(() => {
    let typingTimeout: ReturnType<typeof setTimeout>;

    const handleType = () => {
      const wordIndex = loopNum % words.length;
      const fullText = words[wordIndex];

      if (isDeleting) {
        setCurrentWord((prev) => fullText.substring(0, prev.length - 1));
        setSpeed(deletingSpeed);
      } else {
        setCurrentWord((prev) => fullText.substring(0, prev.length + 1));
        setSpeed(typingSpeed);
      }

      if (!isDeleting && currentWord === fullText) {
        setIsDeleting(true);
        setSpeed(delayBetweenWords); // Delay before deleting starts
      } else if (isDeleting && currentWord === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setSpeed(typingSpeed);
      }

      typingTimeout = setTimeout(handleType, speed);
    };

    typingTimeout = setTimeout(handleType, speed);

    return () => clearTimeout(typingTimeout);
  }, [currentWord, isDeleting, loopNum, speed, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return <h1 className="text-4xl font-bold">{currentWord}</h1>;
};

export default Typewriter;

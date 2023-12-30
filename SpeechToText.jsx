// SpeechToText.js

import React from 'react';
import { useSpeechRecognition } from 'react-speech-kit';

const SpeechToText = () => {
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: result => {
      console.log('Speech Recognition Result:', result);
    },
  });

  return (
    <div>
      <h1>Speech-to-Text</h1>
      <button onClick={listen} disabled={listening}>
        Start Listening
      </button>
      <button onClick={stop} disabled={!listening}>
        Stop Listening
      </button>
    </div>
  );
};

export default SpeechToText;

export const trimStart = (word: string, seq = " ") => {
  if (!(word && seq)) {
    return word;
  }

  let index = 0;
  while (word.slice(index, index + seq.length) === seq) {
    index += seq.length;
  }

  return word.slice(index);
};

export const trimEnd = (word: string, seq = " ") => {
  if (!(word && seq)) {
    return word;
  }

  let index = word.length;
  while (word.slice(index - seq.length, index) === seq) {
    index -= seq.length;
  }

  return word.slice(0, index);
};

export const trim = (word: string, seq = " ") => {
  const leftTrimmed = trimStart(word, seq);
  const rightTrimmed = trimEnd(leftTrimmed, seq);
  return rightTrimmed;
};

const translations = {
  "english": {
    "malay": {
      "morning": "pagi"
    }
  },
  "malay": {
    "english": {
      "pagi": "morning"
    }
  }
};

export function translate(inputLanguage, inputText, outputLanguage) {
  if (
    translations[inputLanguage] &&
    translations[inputLanguage][outputLanguage] &&
    translations[inputLanguage][outputLanguage][inputText]
  ) {
    return translations[inputLanguage][outputLanguage][inputText];
  } else {
    return "Not Found";
  }

}
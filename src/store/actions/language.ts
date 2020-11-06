const switchLanguage = (language: string) => ({
  type: "SWITCH_LANGUAGE",
  payload: {
    language: language,
  },
});

export const language = { switchLanguage };

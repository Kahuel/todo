import React from "react";
import { language as languageActions } from "store/actions";
import { useDispatch, useSelector } from "react-redux";
import { State } from "types/types";

export const LocalizationBar: React.FC = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state: State) => state.language);
  return (
    <div>
      {currentLanguage === "ru" ? "Выбрать язык:" : "Change language:"}
      <select
        onChange={(e) =>
          dispatch(languageActions.switchLanguage(e.target.value))
        }
      >
        <option value="ru">Русский</option>
        <option value="eng">English</option>
      </select>
    </div>
  );
};

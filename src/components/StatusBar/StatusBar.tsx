import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter as filterActions } from "store/actions";
import { State } from "types/types";
import { statusBar } from "components/Text";

export const StatusBar: React.FC = (props: any) => {
  const dispatch = useDispatch();
  const language = useSelector((state: State) => state.language);
  const currentLanguage = statusBar(language);
  return (
    <div>
      {currentLanguage.filterTitle}
      <select
        onChange={(e) =>
          dispatch(filterActions.switchFiltering(e.target.value))
        }
      >
        <option value="ALL">{currentLanguage.all}</option>
        <option value="OPEN">{currentLanguage.opened}</option>
        <option value="IN_PROGRESS">{currentLanguage.inProgress}</option>
        <option value="DONE">{currentLanguage.done}</option>
      </select>
    </div>
  );
};

import * as React from "react";

import styles from "./highlightedMenuOption.css";

export const HighlightedMenuOption = ({
  text,
  searchedValue,
  highlightClass
}: {
  text: string;
  searchedValue: string;
  highlightClass: string;
}) => {
  const defaultResp = <>{text}</>;
  if (!searchedValue) {
    return defaultResp;
  }

  const searchedValueIdx = text
    .toLowerCase()
    .indexOf(searchedValue.toLowerCase());
  const textContains = searchedValueIdx > -1;

  if (!textContains) {
    return defaultResp;
  }

  return (
    <>
      {text.slice(0, searchedValueIdx)}
      <span className={`${highlightClass} ${styles.highlight}`}>
        {text.slice(searchedValueIdx, searchedValueIdx + searchedValue.length)}
      </span>
      {text.slice(searchedValueIdx + searchedValue.length)}
    </>
  );
};

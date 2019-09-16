import * as React from "react";
import styles from "./styles.css";

export interface MenuItem {
  title: string;
  url: string;
  children?: MenuItem[];
}

const filterMenuItems = (menuItems: MenuItem[], keyword: string) => {
  if (!keyword) {
    return menuItems;
  }

  const filtered: MenuItem[] = menuItems.filter(menuItem => {
    const containsKeyword =
      menuItem.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    const childContainsKeyword: boolean = !!menuItem.children
      ? filterMenuItems(menuItem.children, keyword).length > 0
      : false;

    return containsKeyword || childContainsKeyword;
  });

  return filtered;
};

export const Menu = ({
  options,
  selectedOption = "",
  highlightClass = "highlight"
}: {
  options: MenuItem[];
  selectedOption?: string;
  highlightClass?: string;
}) => {
  const [searchedValue, setSearchedValue] = React.useState("");
  const filteredOptions = filterMenuItems(options, searchedValue);

  console.log(filteredOptions);

  return (
    <div className={styles.menu}>
      <input
        type="text"
        className={styles["menu-search"]}
        placeholder="Search menu..."
        value={searchedValue}
        onChange={(ev: React.ChangeEvent) =>
          setSearchedValue((ev.target as HTMLInputElement).value)
        }
      />
      <MenuOptions
        options={filteredOptions}
        searchedValue={searchedValue}
        selectedOption={selectedOption}
        highlightClass={highlightClass}
      />
    </div>
  );
};

const trimStart = (word: string, seq = " ", replace = "") => {
  if (!word.startsWith(seq)) {
    return word;
  }

  return `${replace}${word.slice(seq.length)}`;
};

const trimEnd = (word: string, seq = " ", replace = "") => {
  if (!word.endsWith(seq)) {
    return word;
  }

  return `${replace}${word.slice(0, word.length - seq.length)}`;
};

const trim = (word: string, seq = " ", replace = "") => {
  const leftTrimmed = trimStart(word, seq, replace);
  const rightTrimmed = trimEnd(leftTrimmed, seq, replace);
  return rightTrimmed;
};

const HighlightedMenuOption = ({
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

export const MenuOptions = ({
  options,
  searchedValue,
  selectedOption,
  highlightClass
}: {
  options: MenuItem[];
  searchedValue: string;
  selectedOption: string;
  highlightClass: string;
}) => {
  return (
    <ul className={styles["menu-options"]}>
      {options.map(menuOption => {
        return (
          <li>
            <a
              className={
                trim(selectedOption, "/", "") === trim(menuOption.url, "/", "")
                  ? styles.selected
                  : ""
              }
              href={`/${menuOption.url}`}
            >
              <HighlightedMenuOption
                text={menuOption.title}
                searchedValue={searchedValue}
                highlightClass={highlightClass}
              />
            </a>
            {menuOption.children instanceof Array &&
              menuOption.children.length > 0 && (
                <MenuOptions
                  options={menuOption.children}
                  searchedValue={searchedValue}
                  selectedOption={selectedOption}
                  highlightClass={highlightClass}
                />
              )}
          </li>
        );
      })}
    </ul>
  );
};

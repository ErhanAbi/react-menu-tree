import * as React from "react";
import { MenuItem } from "./menuItem";
import { trim } from "./trim";
import { HighlightedMenuOption } from "./highlightedMenuOption.";

import styles from "./menuOptions.css";

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
          <li key={menuOption.title}>
            <a
              className={
                trim(selectedOption, "/") === trim(menuOption.url, "/")
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

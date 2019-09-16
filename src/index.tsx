import * as React from "react";
import { MenuItem, filterMenuItems } from "./menuItem";
import { MenuOptions } from "./menuOptions";

import styles from "./styles.css";

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

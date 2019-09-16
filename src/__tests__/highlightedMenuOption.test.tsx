import React from "react";
import renderer from "react-test-renderer";

import { HighlightedMenuOption } from "../highlightedMenuOption.";

describe(HighlightedMenuOption, () => {
  it("renders text without highlights if no match found", () => {
    const wrapper = renderer
      .create(
        <HighlightedMenuOption
          text="Some Text"
          searchedValue="lazy fox nowhere to be found"
          highlightClass="highlight"
        />
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it("renders text with highlight if text was found", () => {
    const wrapper = renderer
      .create(
        <HighlightedMenuOption
          text="Lazy Fox Hiding"
          searchedValue="lazy fox"
          highlightClass="highlight"
        />
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});

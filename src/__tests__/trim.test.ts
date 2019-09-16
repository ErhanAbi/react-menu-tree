import { trimStart, trimEnd, trim } from "../trim";

describe("trimStart", () => {
  it("should immitate String.prototype.trimLeft if only 1 argument is given", () => {
    expect(trimStart("       <- that whitespace will be removed")).toEqual(
      "<- that whitespace will be removed"
    );
    expect(trimStart("       <- that whitespace will be removed")).toEqual(
      " <- that whitespace will be removed".trimLeft()
    );
  });

  it("should trim any given sequence of characters from the beginning of string", () => {
    expect(trimStart("<-<-<-<-this is inwards<-<-<-<-", "<-")).toEqual(
      "this is inwards<-<-<-<-"
    );
    expect(trimStart("->->->->->this is outwards->->->->->", "->")).toEqual(
      "this is outwards->->->->->"
    );
  });
});

describe("trimEnd", () => {
  it("should immitate String.prototype.trimRight if only 1 argument is given", () => {
    expect(
      trimEnd(
        "the whitespace from the end of this string will be removed         "
      )
    ).toEqual("the whitespace from the end of this string will be removed");
  });

  it("should replace any sequence of characters from the end of the given word", () => {
    expect(trimEnd("<-<-<-<-this is inwards<-<-<-<-", "<-")).toEqual(
      "<-<-<-<-this is inwards"
    );

    expect(trimEnd("->->->->this is outwards->->->->", "->")).toEqual(
      "->->->->this is outwards"
    );
  });
});

describe("trim", () => {
  it("should immitate String.prototype.trim if only 1 argument is given", () => {
    expect(
      trim(
        "      whitespace from both beginning and the end of the string will be removed      "
      )
    ).toEqual(
      "whitespace from both beginning and the end of the string will be removed"
    );

    expect(trim("<-<-<-<-this is inwards<-<-<-<-<-", "<-")).toEqual(
      "this is inwards"
    );
    expect(trim("->->->->this is outwards->->->->", "->")).toEqual(
      "this is outwards"
    );
  });
});

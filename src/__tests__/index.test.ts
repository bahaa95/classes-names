/* eslint-disable @typescript-eslint/no-explicit-any */
import { classname } from "../index";
import { isArray } from "../utils";

describe("cx", () => {
  const isLoading = true;
  const isDesabled = false;
  const isHovered = true;
  const quntity = 0;
  const device: string = "phone";
  const theme: string = "dark";

  it("should remove falsy values", () => {
    expect(classname(null)).toBe("");

    expect(classname(" ", "primary", isLoading && "desabled", null)).toBe("primary desabled");

    expect(
      classname("secondary", undefined, [false && "text-xl"], {
        "has-icon": false,
        desabled: isLoading || isDesabled,
        "hover-effect": true,
      }),
    ).toBe("secondary desabled hover-effect");

    expect(
      classname(["outline", isLoading && "desabled", false && "text-l", null || undefined]),
    ).toBe("outline desabled");

    expect(
      classname({
        "hover-effect": false,
        display: {
          flex: true,
          column: device === "phone",
        },
        text: {
          "text-white": theme === "dark",
          "text-black": theme === "light",
          "text-s": device === "phone",
        },
        hover: null,
      }),
    ).toBe("flex column text-white text-s");
  });

  it("should work with nested array", () => {
    expect(classname(["primary", false && "secondary", ["text-l", false && "text-blue"]])).toBe(
      "primary text-l",
    );
  });

  it("should work with nested object", () => {
    expect(
      classname({
        "hover-effect": true,
        disabled: quntity === 0 || isLoading,
        text: {
          "text-roboto": true,
          "text-l": true,
        },
      }),
    ).toBe("hover-effect disabled text-roboto text-l");
  });

  it("should work with nested array and objects", () => {
    expect(
      classname({
        text: {
          "text-roboto": true,
          "text-l": true,
        },
        flex: [device === "phone" ? "col" : "row", "justify-between"],
        hover: isHovered && ["bg-blue", "text-white", { "text-wrap": true }],
      }),
    ).toBe("text-roboto text-l col justify-between bg-blue text-white text-wrap");
  });
});

describe("utils", () => {
  describe("isArray", () => {
    it("should return false when value is not array", () => {
      expect(isArray(null)).toBe(false);
      expect(isArray("array")).toBe(false);
      expect(isArray({ test: 1 })).toBe(false);
      expect(isArray(undefined)).toBe(false);
    });

    it("should return true when value an array", () => {
      expect(isArray([])).toBe(true);
      expect(isArray([1])).toBe(true);
      expect(isArray([{ test: 1 }])).toBe(true);
      expect(isArray([null])).toBe(true);
    });
  });
});

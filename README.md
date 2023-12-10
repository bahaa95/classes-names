# classes-names

A lightweight JavaScript function for conditional joining class names together, it also work with deeply nested objects and array to improve readability and grouping.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

[![Coverage Status](https://coveralls.io/repos/github/bahaa95/classes-names/badge.svg?branch=main)](https://coveralls.io/github/bahaa95/classes-names?branch=main)

## Installation

Install classes-names

```bash
  #npm
  npm install classes-names

  #yarn
  yarn add classes-names
```

## Usage/Examples

```typescript
import { cx } from "classes-names";

const isDisabled = false;
const isLoading = true;
const theme = "light";

const classes = cx(
  "primary",
  null,
  " ",
  false && "border-blue",
  [true && "text-l", { "text-white": theme === "dark" }],
  {
    row: true,
    disabled: isDisabled || isLoading,
    display: ["flex", "row", "items-center"],
  },
);

console.log(classes); //=> "primary text-l row disabled flex row items-center"
```

### Realtime Example

```typescript
import { cx } from "classes-names";

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div id="App">
      <input
        className={cx({
          pointer:true,
         //when a property has a value type of array or object the property name
         //will not included in the result classes. it will use property name for
         //grouping only in our case (text, active, display) properties below will not
         //included to result.
          text: {
            "text-roboto": true,
            "text-l": true,
            "text-bold":isActive,
          },
          display:["flex","row","items-center"],
          active: isActive && ["border-blue", "bg-white", "text-black"],
        })}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
    </div>
  );

  /**
   * when isActive is false output for cx will be
   *  => "pointer text-roboto text-l flex row items-center"
   *
   * when isActive is true output for cx will be
   * => "pointer text-roboto text-l text-bold flex row items-center border-blue bg-white text-black"
   */
}
```

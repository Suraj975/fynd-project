import React, { useEffect, useState, useRef } from "react";
import { firstLetterCapital } from "./utils";
import DOWN_ARROW from "./assests/downArrow.svg";
import {
  DropdownWrapper,
  Container,
  DefaultBox,
  InputSearch,
  ShowDropDown,
  DropdownRow,
  Text,
  ButtonWrapper,
  Clear,
  Button,
  DropdownBox,
  ScrollableBox,
  Image,
  Options
} from "./dropdownStyles";

const Dropdown = (props) => {
  let [options, setOptions] = useState({});
  let [open, setOpen] = useState({ dropdownVisible: false });
  let [result, setResult] = useState({});
  let [submitedOuput, setSubmit] = useState({});
  let [searchInput, setSearch] = useState("");
  let [searchResult, filterSearchOptions] = useState({});
  let [selection, showSelection] = useState(true);
  let timeOutRefsId = useRef([])
  let inputRef = useRef(null);

  //Creating changes in the option input
  useEffect(() => {
    let { dropdownValue } = props;
    if (dropdownValue) {
      if (typeof dropdownValue[0] !== "object") {
        let modifiedValue = dropdownValue.map((val) => {
          return { title: val, checked: false };
        });
        setOptions(modifiedValue);
      } else {
        let modifiedValue = dropdownValue.map((val) => {
          val.checked = false;
          return val;
        });
        setOptions(modifiedValue);
      }
    }
    // Cleaning if any left setTimeouts
    return () => {
      if(timeOutRefsId.current.length > 0) timeOutRefsId.current.forEach((ids) => clearTimeout(ids) )
    }
  }, []);



  //This is responsible for the checkbox selected
  const handleResult = (e, val) => {
    let newValue = options.map((item) => {
      if (item.title === val.title) {
        item.checked = item.checked ? false : true;
      }
      return item;
    });
    setOptions(newValue);
    if (e.target.checked) {
      setResult((result) => {
        return { ...result, [firstLetterCapital(val.title)]: val };
      });
    } else {
      setResult((result) => {
        return Object.keys(result)
          .filter((key) => key !== val.title)
          .reduce((acc, curr) => {
            acc[curr] = result[curr];
            return acc;
          }, {});
      });
    }
  };

  //This cleans all the selected checkboxes
  const handleClear = () => {
    setResult({});
    let newValue = options.map((item) => {
      item.checked = false;
      return item;
    });
    setOptions(newValue);
  };

  //handling of submit button
  const handleSubmit = () => {
    setOpen({ dropdownVisible: false });
    setSearch("");
    setSubmit((submitedOuput) => {
      return {
        inputDisplay: Object.keys(result),
        data: result
      };
    });
    props.getValue(result);
    filterSearchOptions({});
    handleClear();
  };

  //searching of values in dropdown
  const handleSearchInput = (e) => {
    setSearch(e.target.value);
    let value = options.filter((key) => {
      if (key["title"].toLowerCase().includes(e.target.value.toLowerCase())) {
        return key;
      }
    });
    filterSearchOptions(value);
  };

  //default box
  const handleDefaultBox = () => {
    setOpen({ dropdownVisible: true });
    let defaultboxId = setTimeout(() => {
      inputRef.current.focus();
    }, 0);
    timeOutRefsId.current.push(defaultboxId);
  };

  // blur event handling
  const handleBlur = (e) => {
    const currentTarget = e.currentTarget;
    let blurId = setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setOpen({ dropdownVisible: false });
        handleClear();
        filterSearchOptions({});
        setSubmit({});
      }
    }, 0);
    timeOutRefsId.current.push(blurId);
  };

  const handleFocus = (e) => {
    if(timeOutRefsId.current.length > 0){ timeOutRefsId.current.forEach((ids) => clearTimeout(ids) )
      timeOutRefsId.current = [];
    }
  }
  //created options display UI
  const displayOptions = () => {
    let search = Object.keys(searchResult).length > 0 ? searchResult : options;
    return search.map((val, index) => {
      return (
        <Options key={index}>
          <DropdownRow>
            <div className="checkbox-example">
              <label className="main">
                <input
                  type="checkbox"
                  checked={val.checked}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={(e) => {
                    handleResult(e, val);
                  }}
                />
                <span className="dropdown-checkbox"></span>
              </label>
            </div>
            <Text checked={val.checked}>{firstLetterCapital(val.title)}</Text>
          </DropdownRow>
        </Options>
      );
    });
  };

  return (
    <DropdownWrapper>
      <Container onMouseDown={(e) => e.preventDefault()}>
        <div style={{ width: "100%" }} onBlur={handleBlur} onFocus={handleFocus}>
          {!open.dropdownVisible ? (
            <DefaultBox
              onClick={handleDefaultBox}
              style={{ textAlign: "left" }}
            >
              {`${submitedOuput.inputDisplay ? props.name + "-" : props.name}`}
              <p>{`${submitedOuput.inputDisplay || ""}`}</p>
              <Image src={DOWN_ARROW} height="15px" width="15px" />
            </DefaultBox>
          ) : (
            <InputSearch
              type="text"
              ref={inputRef}
              placeholder={firstLetterCapital("search")}
              onChange={handleSearchInput}
            />
          )}
        </div>
        {open.dropdownVisible && (
          <DropdownBox>
            <ShowDropDown onClick={() => showSelection(!selection)}>
              <p>{selection ? "-" : "+"}</p>
            </ShowDropDown>
            <ScrollableBox>
              {options && selection && displayOptions()}
            </ScrollableBox>
            {open.dropdownVisible && Object.keys(result).length > 0 && (
              <ButtonWrapper>
                <Clear>
                  <Button onClick={handleClear}>Clear</Button>
                </Clear>
                <div>
                  <Button buttonType="submit" onClick={handleSubmit}>
                    Submit
                  </Button>
                </div>
              </ButtonWrapper>
            )}
          </DropdownBox>
        )}
      </Container>
    </DropdownWrapper>
  );
};

export default Dropdown;

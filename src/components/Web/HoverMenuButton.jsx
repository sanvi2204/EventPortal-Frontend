import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@reach/menu-button";

export default function CategoryDropdown(props) {
  let { title } = props;

  let [isOverButton, setIsOverButton] = useState(false);
  let [isOverList, setIsOverList] = useState(false);
  let [isOpen, setIsOpen] = useState();
  let [isTouchInput, setIsTouchInput] = useState();
  let [hasClicked, setHasClicked] = useState();
  let button = useRef(null);

  const handleClick = () => setClick(!click);

  useLayoutEffect(() => {
    if (isOpen && !isOverButton && !isOverList && !isTouchInput) {
      button.current.click();
      setIsOpen(false);
    } else if (!isOpen && (isOverButton || isOverList) && !isTouchInput) {
      button.current.click();
      setIsOpen(true);
    }
  }, [isOverButton, isOverList]);

  useEffect(() => {
    setIsTouchInput(false);
    setHasClicked(false);
  }, [hasClicked]);

  return (
    <Menu>
      <MenuButton
        ref={button}
        onTouchStart={() => {
          setIsTouchInput(true);
        }}
        onMouseEnter={event => {
          setIsOverButton(true);
        }}
        onMouseLeave={event => {
          setIsOverButton(false);
        }}
        onClick={() => {
          setHasClicked(true);
          setIsOpen(!isOpen);
        }}
        onKeyDown={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>{title}</span> <span aria-hidden>▾</span>
      </MenuButton>
      <MenuList
        onMouseEnter={event => {
          setIsOverList(true);
        }}
        onMouseLeave={event => {
          setIsOverList(false);
        }}
      >
        <MenuItem
          onSelect={() => {
            setIsOpen(false);
          }}
        >
          Destination Wedding 
        </MenuItem>
        <MenuItem
          onSelect={() => {
            setIsOpen(false);
          }}
        >
          Wedding 
        </MenuItem>
        <MenuItem
          onSelect={() => {
            setIsOpen(false);
          }}
        >
          Destination Wedding 
        </MenuItem>
        <MenuItem
          
            exact
            to="/contact"
            activeClassName="active"
                    onClick={handleClick}
          
        >
          Birthday party
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

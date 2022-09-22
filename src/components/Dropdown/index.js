import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";

const DropdownWrapper = styled.div`
    position: relative;
`;

const Dropdown = ({ button: Button, children, align }) => {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef();

    const toggle = () => {
        setOpen(!open);
    };

    const onDocClick = (event) => {
        if (wrapperRef.current) {
            const isClickInside = wrapperRef.current.contains(event.target);

            if (!isClickInside) {
                setOpen(false);
            }
        }
    };

    useEffect(() => {
        if (open) {
            document.addEventListener("click", onDocClick);
        } else {
            document.removeEventListener("click", onDocClick);
        }
    }, [open]);

    useEffect(() => {
        return () => {
            document.removeEventListener("click", onDocClick);
        };
    }, []);

    return (
        <DropdownWrapper ref={wrapperRef}>
            <DropdownButton>
                <Button onClick={toggle} />
            </DropdownButton>
            {open && (
                <DropdownContent align={align} open={open}>
                    {children}
                </DropdownContent>
            )}
        </DropdownWrapper>
    );
};

export default Dropdown;

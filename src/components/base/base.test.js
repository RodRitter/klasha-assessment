import { render, screen } from "@testing-library/react";
import { Typography } from ".";

test("default Typography renders as <p>", () => {
    render(<Typography>foobar</Typography>);
    const element = screen.getByText("foobar");
    expect(element.tagName.toLowerCase()).toBe("p");
});

test("h1 Typography renders as <h1>", () => {
    render(<Typography kind="h1">foobar</Typography>);
    const element = screen.getByText("foobar");
    expect(element.tagName.toLowerCase()).toBe("h1");
});

test("h1 Typography renders as <h2>", () => {
    render(<Typography kind="h2">foobar</Typography>);
    const element = screen.getByText("foobar");
    expect(element.tagName.toLowerCase()).toBe("h2");
});

test("h1 Typography renders as <h3>", () => {
    render(<Typography kind="h3">foobar</Typography>);
    const element = screen.getByText("foobar");
    expect(element.tagName.toLowerCase()).toBe("h3");
});

test("h1 Typography renders as <h4>", () => {
    render(<Typography kind="h4">foobar</Typography>);
    const element = screen.getByText("foobar");
    expect(element.tagName.toLowerCase()).toBe("h4");
});

test("h1 Typography renders as <h5>", () => {
    render(<Typography kind="h5">foobar</Typography>);
    const element = screen.getByText("foobar");
    expect(element.tagName.toLowerCase()).toBe("h5");
});

test("h1 Typography renders as <h6>", () => {
    render(<Typography kind="h6">foobar</Typography>);
    const element = screen.getByText("foobar");
    expect(element.tagName.toLowerCase()).toBe("h6");
});

test("link Typography renders as <a>", () => {
    render(<Typography kind="a">foobar</Typography>);
    const element = screen.getByText("foobar");
    expect(element.tagName.toLowerCase()).toBe("a");
});

test("invalid kinds render as <p>", () => {
    render(<Typography kind="invalid-kind">foobar</Typography>);
    const element = screen.getByText("foobar");
    expect(element.tagName.toLowerCase()).toBe("p");
});

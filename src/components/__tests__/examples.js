import React from "react"
import { render, cleanup } from "@testing-library/react"
import styled from "@emotion/styled"

afterEach(cleanup);

// test component for react-testing-library
const Title = () => {
  return (
    <h1 data-testid="hero-title">Gatsby is awesome!</h1>
  )
}

// test button for emotion snapshot
const Button = styled.div`
  color: hotpink;
`;


// test suite for react component
test("Test title component displays the correct title", () => {
  // Arrange
  const { getByTestId } = render(<Title />);

  // Act

  // Assertion
  expect(
    getByTestId("hero-title")
  ).toHaveTextContent("Gatsby is awesome!");
})

// test suite for snapshot
test("Emotion styled button renders correctly", () => {
  // Arrange
  const { asFragment } = render(<Button>This is hotpink.</Button>);

  // Act

  // Assertion
  expect(
    asFragment()
  ).toMatchSnapshot()
})
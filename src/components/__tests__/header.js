import React from "react"
import { render } from "@testing-library/react"

import Header from "../header"

const Title = () => {
  return (
    <h1 data-testid="hero-title">Gatsby is awesome!</h1>
  )
  
}

test("Displays the correct title", () => {
  const { getByTestId } = render(<Title />)
  // Assertion
  expect(getByTestId("hero-title")).toHaveTextContent("Gatsby is awesome!");
})
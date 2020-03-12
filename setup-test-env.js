import { createSerializer } from "jest-emotion"
import "@testing-library/jest-dom/extend-expect"
import * as emotion from "@emotion/core"

expect.addSnapshotSerializer(createSerializer(emotion))
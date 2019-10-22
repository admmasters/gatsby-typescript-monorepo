import { sum, what } from "@hello-world/services"
import React from "react"

const result = sum(10, 20)
const result2 = what(100)

export default () => (
  <div>
    Hello world! {result} {result2}
  </div>
)

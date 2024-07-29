import { useCallback, useState } from "react"
import ErrorBoundary from "./ErrorBoundary"
import * as Sentry from "@sentry/react"

function App() {
  const [comp, setComp] = useState(null)
  const [result, setResult] = useState("")
  const [error, setError] = useState("")

  const handleDivide = (dividend, divisor) => {
    try {
      if (divisor === 0) {
        throw new Error("Division by zero is not allowed.")
      }
      const result = dividend / divisor
      setResult(`Result: ${result}`)
      setError("")
    } catch (e) {
      console.log(e)
      Sentry.captureException(e)
      setResult("")
      setError(e.message)
    }
  }

  const handleClick = useCallback(() => {
    handleDivide(0, 0)
  }, [])

  const handleSecondClick = () => {
    fetch("http://localhost:8091/sample/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: "input",
        mustHaveSomething: "mustHaveSomething",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
      .then((_) => {})
      .catch((error) => {
        Sentry.captureException(error)
        setError(error)
      })
  }

  return (
    <ErrorBoundary>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={handleClick}>
          Do something that will cause error
        </button>{" "}
        <button onClick={handleSecondClick}>
          Do something else that will cause error when Hit API
        </button>
        {comp}
      </div>
    </ErrorBoundary>
  )
}

export default App

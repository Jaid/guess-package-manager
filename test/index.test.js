import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require
const {default: guessPackageManager} = indexModule

it("should run with 1 argument", () => {
  const result = guessPackageManager(["a", "b"])
  expect(result).toEqual({
    a: null,
    b: null,
  })
})

it("should run with an integer as second argument", () => {
  const result = guessPackageManager(["a", "b"], 7)
  expect(result).toEqual({
    a: 7,
    b: 7,
  })
})

it("should run with a function as second argument", () => {
  const valueGenerator = (key, index) => `${index + 1}-${key}-x`
  const result = guessPackageManager(["a", "b"], valueGenerator)
  expect(result).toEqual({
    a: "1-a-x",
    b: "2-b-x",
  })
})
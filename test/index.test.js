import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require
const {default: guessPackageManager} = indexModule

it("should run", () => {
  const result = guessPackageManager(path.resolve(__dirname, ".."))
  expect(result).toEqual("npm")
})
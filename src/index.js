import path from "path"

import fss from "@absolunet/fss"

/** @module guess-package-manager */

/**
 * Converts an array to an object with static keys and customizable values
 * @example
 * guessPackageManager()
 * // npm
 * @example
 * guessPackageManager("/home/me/development/yarn-project")
 * // yarn
 * @param {string} directory Project directory that uses a package manager
 * @returns {"npm"|"pnpm"|"yarn"} A generated object based on the array input
 */
export default (directory = process.cwd()) => {
  const fromDirectory = directive => path.join(directory, directive)
  if ("yarn.lock" |> fromDirectory |> fss.pathExists) {
    return "yarn"
  }
  if ("shrinkwrap.yaml" |> fromDirectory |> fss.pathExists) {
    return "pnpm"
  }
  if ("shrinkwrap.yml" |> fromDirectory |> fss.pathExists) {
    return "pnpm"
  }
  return "npm"
}
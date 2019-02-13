import {configureLib} from "webpack-config-jaid"

export default configureLib({
  documentation: {babel: true},
  publishimo: {fetchGithub: true},
})
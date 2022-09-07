import random from 'lodash/random'

// Array of available nodes to connect to
const nodes = ["https://rpc03-sg.dogechain.dog", "https://rpc03-sg.dogechain.dog", "https://rpc03-sg.dogechain.dog"]

const getNodeUrl = () => {
  const randomIndex = random(0, nodes.length - 1)
  return nodes[randomIndex]
}

export default getNodeUrl

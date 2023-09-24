import { ref, computed } from 'vue'
import { defineStore, Store } from 'pinia'
import axios from 'axios'

import cakeImg from '../assets/img/cake.jpeg'

type CakesDummy = {
  id: string | number
  type: string
  image?: string
}

const cakesDummy: CakesDummy[] = [
  {
    id: 'KXA4ZPADX9',
    type: 'Vanilla',
    image: cakeImg
  },
  {
    id: 'X70RSEEWL3',
    type: 'Strawberry',
    image: cakeImg
  },
  {
    id: 'RFME4EM9BQ',
    type: 'Banana',
    image: cakeImg
  }
]

type State = {
  cakes: unknown[]
  loadingFetch: boolean
}

const state = (): State => ({
  cakes: cakesDummy,
  loadingFetch: false
})

const actions = {
  async getCakes() {
    // state().cakes
  }
}

export const useCakeStore = defineStore('cake', {
  state,
  actions
})

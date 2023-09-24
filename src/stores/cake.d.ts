import { DefineStoreOptionsBase } from 'pinia'

declare module 'pinia' {
  interface DefineStoreOptionsBase<S, A, G> {
    actions: A
  }
}

export type CakesDummy = {
  id: string | number
  type: string
  image?: string
}

export type State = {
  cakes: CakesDummy[]
  loadingFetch: boolean
}

export const useCakeStore: import('pinia').Store<{
  cakes: CakesDummy[]
  loadingFetch: boolean
  getCakes: () => Promise<void>
}>

import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

export interface PropsTypeInterface {
    children: any
}

const Provides = ({children}:PropsTypeInterface) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default Provides
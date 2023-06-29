//import libraries
import React from 'react'
import {createRoot} from 'react-dom/client'


//import components
import Test from './components/Test'


const test = document.createElement("div")
document.body.appendChild(test)
const root = createRoot(test)

root.render(<Test /> )
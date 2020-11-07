import { initialModel } from './model'
import update from './update'
import view from './view'
import app from './app'

const node = document.getElementById('root')

app(initialModel, update, view, node)
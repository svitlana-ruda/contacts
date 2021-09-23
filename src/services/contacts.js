import configuration from '../data/configuration.json'
import apiClientContacts from '../helpers/apiClientContacts'

export const getContacts = () =>
  apiClientContacts.get(`?results=${configuration.numberCards}`)

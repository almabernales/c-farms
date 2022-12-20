import * as yup from 'yup'
import DialogTitle from '../../src/components/dialog/dialog-title'
import { faker } from '@faker-js/faker'

describe('ComponentName.cy.ts', () => {
  it('playground', () => {
    const fakeTitle = faker.datatype().word()
    const onCancelSpy = cy.spy().as('onCancelSpy')
    cy.mount(<DialogTitle onCancel={onCancelSpy} title={fakeTitle} />)
    cy.get('.MuiButtonBase-root').click()
    cy.contains(fakeTitle)
  })
})

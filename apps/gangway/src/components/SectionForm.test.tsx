import { fireEvent, render, screen } from '@testing-library/react'
import { SECTIONS } from '../lib/site'
import type { FormModel } from '../lib/site'
import { SectionForm } from './SectionForm'

const billetForm = SECTIONS.find((section) => section.id === 'post-billet')!.form as FormModel
const accountForm = SECTIONS.find((section) => section.id === 'aboard')!.form as FormModel

describe('SectionForm — the page’s two forms', () => {
  it('ties every field to its own label, and marks the free-text one as a textarea', () => {
    render(<SectionForm id="post-billet" form={billetForm} />)

    const form = screen.getByTestId('post-billet-form')

    expect(form).toHaveAttribute('aria-labelledby', 'post-billet-form-heading')
    expect(screen.getByRole('heading', { name: 'Add a billet to the board' })).toHaveAttribute(
      'id',
      'post-billet-form-heading',
    )

    for (const field of billetForm.fields) {
      const control = screen.getByLabelText(field.label)

      expect(control).toHaveAttribute('id', `post-billet-${field.name}`)
      expect(control).toHaveAttribute('name', field.name)
      expect(control).toHaveAttribute('placeholder', field.placeholder)
    }

    expect(screen.getByLabelText('What the billet is').tagName).toBe('TEXTAREA')
    expect(screen.getByLabelText('Vessel').tagName).toBe('INPUT')
    expect(screen.getByRole('button', { name: billetForm.submitLabel })).toHaveAttribute(
      'type',
      'submit',
    )
    expect(form).toHaveTextContent(billetForm.note)
  })

  it('holds its confirmation back until the form is actually sent', () => {
    render(<SectionForm id="post-billet" form={billetForm} />)

    expect(screen.queryByRole('status')).toBeNull()

    fireEvent.submit(screen.getByTestId('post-billet-form'))

    const status = screen.getByRole('status')

    expect(status).toHaveTextContent('Billet received — the board is read every morning.')
    expect(status).toHaveAttribute('data-testid', 'post-billet-form-status')
  })

  it('answers the account panel with its own confirmation', () => {
    render(<SectionForm id="aboard" form={accountForm} />)

    expect(screen.getByRole('heading', { name: 'Open an account' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'email')
    expect(screen.getByLabelText('Email')).toHaveAttribute('id', 'aboard-email')

    fireEvent.submit(screen.getByTestId('aboard-form'))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Welcome aboard — the office will confirm your account.',
    )
  })
})

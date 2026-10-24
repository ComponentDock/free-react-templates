import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer, validate } from './Footer'
import { footer, socials } from '../data'

describe('Footer composition', () => {
  it('renders the statement, both column titles and the contact list', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(footer.statement)
    expect(screen.getByRole('heading', { level: 3, name: 'Drop a line' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Contact me' })).toBeInTheDocument()
    expect(screen.getByText(footer.address)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: footer.phone.label })).toHaveAttribute(
      'href',
      'tel:+4532140877',
    )
    expect(screen.getByRole('link', { name: footer.email.label })).toHaveAttribute(
      'href',
      'mailto:hello@portray.studio',
    )
    expect(screen.getByRole('link', { name: footer.resume.label })).toHaveAttribute(
      'href',
      '#contact',
    )
  })

  it('carries three circular social buttons', () => {
    render(<Footer />)
    const social = socials.map((item) => screen.getByRole('link', { name: item.label }))
    expect(social).toHaveLength(3)
    for (const link of social) {
      expect(link.className).toContain('rounded-full')
      expect(link.querySelector('svg')).not.toBeNull()
    }
  })

  it('credits Component Dock in the copyright line', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(screen.getByText(/More templates at/)).toBeInTheDocument()
  })
})

describe('Footer form', () => {
  it('reports every empty field on submit without confirming', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.click(screen.getByRole('button', { name: 'Send message' }))
    expect(screen.getAllByRole('alert').map((node) => node.textContent)).toEqual([
      'Please tell me your name.',
      'Please use a valid e-mail address.',
      'A short message helps me reply properly.',
    ])
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Your name')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText('Your e-mail')).toHaveAttribute('aria-describedby', 'error-email')
  })

  it('accepts a filled form and answers with an inline confirmation', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Your name'), 'Ada')
    await user.type(screen.getByLabelText('Your e-mail'), 'ada@example.com')
    await user.type(screen.getByLabelText('Subject'), 'A studio project')
    await user.type(screen.getByLabelText('Message'), 'I would like to talk about a rebuild.')
    await user.click(screen.getByRole('button', { name: 'Send message' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks — your message is on its way.')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Your name')).toHaveValue('')
  })

  it('clears an error as soon as the visitor edits that field and drops the confirmation', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.click(screen.getByRole('button', { name: 'Send message' }))
    expect(screen.getAllByRole('alert')).toHaveLength(3)
    await user.type(screen.getByLabelText('Your name'), 'Ada')
    expect(screen.getAllByRole('alert')).toHaveLength(2)
    expect(screen.getByLabelText('Your name')).toHaveAttribute('aria-invalid', 'false')
    expect(screen.getByLabelText('Your name')).not.toHaveAttribute('aria-describedby')

    await user.type(screen.getByLabelText('Your e-mail'), 'ada@example.com')
    await user.type(screen.getByLabelText('Message'), 'Hello there.')
    await user.click(screen.getByRole('button', { name: 'Send message' }))
    expect(screen.getByRole('status')).toBeInTheDocument()
    await user.type(screen.getByLabelText('Subject'), 'More')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })
})

describe('validate', () => {
  it('flags each invalid field independently', () => {
    expect(
      validate({ name: '  ', email: 'not-an-email', subject: '', message: '   ' }),
    ).toEqual({
      name: 'Please tell me your name.',
      email: 'Please use a valid e-mail address.',
      message: 'A short message helps me reply properly.',
    })
    expect(validate({ name: 'Ada', email: 'ada@example.com', subject: '', message: 'Hi' })).toEqual(
      {},
    )
  })
})

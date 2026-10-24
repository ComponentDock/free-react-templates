import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the three link columns and the subscribe form', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Company' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Industries' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Warehouse Moving' })).toHaveAttribute(
      'href',
      '#services',
    )
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('links Component Dock in the copyright bar', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('rejects a subscription without an email address', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Add an email address to subscribe.')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('confirms the subscription when an email is given', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'ops@cargonaut.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks — ops@cargonaut.com is on the list.',
    )
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})

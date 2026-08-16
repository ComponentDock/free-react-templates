import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { describe, expect, it } from 'vitest'

describe('Footer', () => {
  it('shows contact info and link columns on a navy background', () => {
    const { container } = render(<Footer />)
    expect(container.querySelector('footer')).toHaveClass('bg-navy')
    expect(screen.getByText(/777 Kansas Star Drive/)).toBeInTheDocument()
    expect(screen.getByText('+1 316-719-5000')).toBeInTheDocument()
    expect(screen.getByText('hello@spotless.example')).toBeInTheDocument()

    for (const label of ['About', 'Services', 'FAQs', 'Contact']) {
      expect(screen.getByRole('navigation', { name: 'Company' })).toContainElement(
        screen.getByRole('link', { name: label }),
      )
    }
    for (const label of ['Classic', 'Personal', 'Professional', 'Premium']) {
      expect(screen.getByRole('navigation', { name: 'Services' })).toContainElement(
        screen.getByRole('link', { name: label }),
      )
    }
  })

  it('subscribes an email and shows a confirmation', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'jane@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
  })

  it('ignores an empty subscription submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('links the credit bar to Component Dock', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/More templates at/)).toBeInTheDocument()
  })
})

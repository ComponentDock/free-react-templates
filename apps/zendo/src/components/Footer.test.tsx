import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { brand, footer } from '../data'

describe('Footer', () => {
  it('renders brand, link columns and the contact widget', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: brand.name })).toBeInTheDocument()
    expect(screen.getByText(footer.blurb)).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Popular links' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Quick links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: footer.questionTitle })).toBeInTheDocument()
    expect(screen.getByText(footer.address)).toBeInTheDocument()
    expect(screen.getByText(footer.phone)).toBeInTheDocument()
    expect(screen.getByText(footer.email)).toBeInTheDocument()
  })

  it('shows social icon links', () => {
    render(<Footer />)
    for (const label of ['Facebook', 'Instagram', 'Twitter']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('validates the message form: empty shows an error, filled shows success', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText(footer.messagePlaceholder)

    await user.click(screen.getByRole('button', { name: footer.sendLabel }))
    expect(screen.getByRole('status')).toHaveTextContent('Please enter a message.')

    await user.type(input, 'Hello Zendo!')
    await user.click(screen.getByRole('button', { name: footer.sendLabel }))
    expect(screen.getByRole('status')).toHaveTextContent('Message sent — thank you!')
    expect(input).toHaveValue('')
  })

  it('links to Component Dock in the copyright bar', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})

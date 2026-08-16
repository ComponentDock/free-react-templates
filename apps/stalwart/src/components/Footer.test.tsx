import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand, blurb and four social icon links', () => {
    render(<Footer />)
    expect(screen.getByText('Stalwart')).toBeInTheDocument()
    for (const label of ['Facebook', 'Instagram', 'Twitter', 'YouTube']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders Navigation and Services columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 4, name: 'Navigation' })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Services', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { level: 4, name: 'Services' })).toBeInTheDocument()
    expect(screen.getByText('Consulting')).toBeInTheDocument()
  })

  it('renders the newsletter form and shows a success message on submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'build@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('renders the Component Dock credit in the copyright bar', () => {
    render(<Footer />)
    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})

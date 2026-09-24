import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the site name and description', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /FrontPage/i })).toHaveAttribute('href', '#home')
    expect(screen.getByText(/FrontPage brings you the latest news/i)).toBeInTheDocument()
  })

  it('renders social icon links with target="_blank"', () => {
    render(<Footer />)
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'YouTube']) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toHaveAttribute('target', '_blank')
    }
  })

  it('renders the newsletter form with email input and subscribe button', () => {
    render(<Footer />)
    expect(screen.getByLabelText(/Email address for newsletter/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('shows a success message after submitting a valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText(/Email address for newsletter/i)
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent(/Thanks for subscribing/i)
    expect(input).toHaveValue('')
  })

  it('does not show success message when submitting empty email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('renders the Instagram grid with six images', () => {
    render(<Footer />)
    const images = screen.getAllByRole('img', { name: /Instagram post/i })
    expect(images).toHaveLength(6)
  })

  it('renders the copyright and Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument()
    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dockLink).toHaveAttribute('target', '_blank')
  })
})

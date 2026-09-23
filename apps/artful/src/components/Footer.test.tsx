import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders about links', () => {
    render(<Footer />)
    expect(screen.getByText('About Agency')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Portfolio/i })).toBeInTheDocument()
  })

  it('renders the newsletter form', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText(/Email for newsletter/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Get Started/i })).toBeInTheDocument()
  })

  it('allows submitting the newsletter form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText(/Email for newsletter/i), 'test@test.com')
    await user.click(screen.getByRole('button', { name: /Get Started/i }))
    // Form still rendered (no page navigation)
    expect(screen.getByLabelText(/Email for newsletter/i)).toBeInTheDocument()
  })

  it('renders instafeed images', () => {
    render(<Footer />)
    const feedImages = screen.getAllByAltText('Instagram feed')
    expect(feedImages).toHaveLength(8)
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
  })
})

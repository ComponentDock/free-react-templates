import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders all 4 footer columns and copyright', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Top Product' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Navigation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Compare' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick About' })).toBeInTheDocument()

    expect(screen.getByText(/Strategy/)).toBeInTheDocument()
    expect(screen.getByText(/Home/)).toBeInTheDocument()
    expect(screen.getByText(/Basic Plan/)).toBeInTheDocument()
    expect(screen.getByText(/Our Story/)).toBeInTheDocument()

    expect(
      screen.getByText(new RegExp(`© ${new Date().getFullYear()} Lightwell`)),
    ).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('prevents default navigation when a footer column link is clicked', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const strategyLink = screen.getByRole('link', { name: 'Strategy' })
    await user.click(strategyLink)
    expect(strategyLink).toHaveAttribute('href', '#features')
  })
})

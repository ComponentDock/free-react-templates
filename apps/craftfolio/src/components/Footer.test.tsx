import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Behance')).toBeInTheDocument()
  })

  it('renders the Follow Me heading', () => {
    render(<Footer />)
    expect(screen.getByText('Follow Me')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    const elements = screen.getAllByText((_, el) => el?.textContent?.includes(year) ?? false)
    expect(elements.length).toBeGreaterThanOrEqual(1)
  })
})

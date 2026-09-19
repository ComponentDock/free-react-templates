import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders column headings', () => {
    render(<Footer />)
    expect(screen.getByText('Our Campus')).toBeInTheDocument()
    expect(screen.getByText('Our Courses')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders footer links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Academic' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Math' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Help Center' })).toBeInTheDocument()
  })

  it('renders brand logo', () => {
    render(<Footer />)
    expect(screen.getByText('Learnly')).toBeInTheDocument()
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/Learnly\. All rights reserved/)).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('does not reference colorlib anywhere', () => {
    const { container } = render(<Footer />)
    const html = container.innerHTML.toLowerCase()
    expect(html).not.toContain('colorlib')
  })
})

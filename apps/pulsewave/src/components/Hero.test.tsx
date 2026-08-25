import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Boost Personal Productivity',
    )
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /start a project/i })).toBeInTheDocument()
  })

  it('renders the phone number', () => {
    render(<Hero />)
    expect(screen.getByText('+01 2345 5678 910')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
  })

  it('has gradient background', () => {
    render(<Hero />)
    const section = screen.getByRole('heading', { level: 1 }).closest('section')!
    expect(section.className).toContain('from-brand')
    expect(section.className).toContain('to-accent-lavender')
  })
})

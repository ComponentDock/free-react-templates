import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutSection } from './AboutSection'

describe('AboutSection', () => {
  it('renders the section heading', () => {
    render(<AboutSection />)
    expect(screen.getByRole('heading', { name: /We Are The Best/i })).toBeInTheDocument()
  })

  it('renders feature list items', () => {
    render(<AboutSection />)
    expect(screen.getByText(/latest in construction technology/i)).toBeInTheDocument()
    expect(screen.getByText(/best in the industry/i)).toBeInTheDocument()
    expect(screen.getByText(/on time and budget/i)).toBeInTheDocument()
  })

  it('renders the Learn More button', () => {
    render(<AboutSection />)
    expect(screen.getByRole('link', { name: /Learn More/i })).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<AboutSection />)
    expect(screen.getByRole('img', { name: /Construction team/i })).toBeInTheDocument()
  })
})

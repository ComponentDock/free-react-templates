import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AboutSection } from './AboutSection'

describe('AboutSection', () => {
  it('renders the heading', () => {
    render(<AboutSection />)
    expect(screen.getByRole('heading', { name: /your health is our/i })).toBeInTheDocument()
  })

  it('renders descriptive text', () => {
    render(<AboutSection />)
    expect(screen.getByText(/behind the word mountains/i)).toBeInTheDocument()
  })

  it('renders feature list items', () => {
    render(<AboutSection />)
    expect(screen.getByText('Qualified Doctors')).toBeInTheDocument()
    expect(screen.getByText('Emergency Services')).toBeInTheDocument()
    expect(screen.getByText('24/7 Open')).toBeInTheDocument()
    expect(screen.getByText('Best Equipment')).toBeInTheDocument()
  })

  it('renders the learn more button', () => {
    render(<AboutSection />)
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
  })
})

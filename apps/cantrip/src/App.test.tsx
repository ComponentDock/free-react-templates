import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the accordion wizard', () => {
    render(<App />)
    expect(screen.getByText('Basic Information')).toBeInTheDocument()
    expect(screen.getByText('Additional Information')).toBeInTheDocument()
    expect(screen.getByText('Specialities')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Cantrip — Account Accordion Wizard')
  })
})

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the full page with all sections', () => {
    render(<App />)
    expect(screen.getByText('Domicile')).toBeInTheDocument()
    expect(screen.getByText('We Combine Business with Finance')).toBeInTheDocument()
    expect(screen.getAllByText('Road to Success').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Meet Our Team')).toBeInTheDocument()
    expect(screen.getByText('Get to Know Project Estimate?')).toBeInTheDocument()
    expect(screen.getByText('About Domicile')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Domicile — Business & Finance Agency Template')
  })
})

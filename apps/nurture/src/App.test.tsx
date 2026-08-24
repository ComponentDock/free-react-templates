import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)

    expect(screen.getAllByText('Nurture').length).toBeGreaterThan(0)
    expect(screen.getByText('Learning Center for Your Kids')).toBeInTheDocument()
    expect(screen.getByText('What We Offer')).toBeInTheDocument()
    expect(screen.getByText("Education for Tomorrow's Leaders")).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('School News')).toBeInTheDocument()
    expect(screen.getAllByText('Pricing').length).toBeGreaterThan(0)
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Nurture — Kids Learning Center')
  })
})

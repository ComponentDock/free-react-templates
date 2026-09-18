import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the full page with all sections', () => {
    render(<App />)
    expect(screen.getByText('Lawscape')).toBeInTheDocument()
    expect(screen.getByText('We Well Understand Your Intention')).toBeInTheDocument()
    expect(screen.getByText('35')).toBeInTheDocument()
    expect(screen.getByText('We Properly Understand Your Purpose')).toBeInTheDocument()
    expect(screen.getByText('Our Practice Area')).toBeInTheDocument()
    expect(screen.getByText('Client Says About Me')).toBeInTheDocument()
    expect(screen.getByText('Meet Our Attorneys')).toBeInTheDocument()
    expect(screen.getByText('Free Case Evaluation')).toBeInTheDocument()
    expect(screen.getByText('Latest From Blog')).toBeInTheDocument()
    expect(screen.getByText('About Agency')).toBeInTheDocument()
  })

  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toBe('Lawscape — Lawyer & Legal Firm Template')
  })
})

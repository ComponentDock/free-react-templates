import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getAllByText('HAMMER').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('LY').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('We Build Dreams')).toBeInTheDocument()
    expect(screen.getByText('Looking for a quality constructor?')).toBeInTheDocument()
    expect(screen.getByText('Who We Are')).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Our Projects')).toBeInTheDocument()
    expect(screen.getByText('Work With Us')).toBeInTheDocument()
    expect(screen.getByText('Meet Our Team')).toBeInTheDocument()
    expect(screen.getByText('Client Says')).toBeInTheDocument()
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Hammerly — Construction Template')
  })
})

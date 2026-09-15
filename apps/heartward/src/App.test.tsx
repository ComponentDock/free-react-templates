import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Heartward')).toBeInTheDocument()
    expect(screen.getByText(/Save the children/)).toBeInTheDocument()
    expect(screen.getByText(/Non-profit Organization/)).toBeInTheDocument()
    expect(screen.getByText(/How Could You Help/)).toBeInTheDocument()
    expect(screen.getByText(/Popular Causes/)).toBeInTheDocument()
    expect(screen.getByText(/Volunteer Needed/)).toBeInTheDocument()
    expect(screen.getByText(/Upcoming Event/)).toBeInTheDocument()
    expect(screen.getByText(/Latest From Our Blog/)).toBeInTheDocument()
    expect(screen.getByText(/Need your help/)).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Heartward — Charity Template')
  })
})

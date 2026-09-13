import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByText('JobVane')).toBeInTheDocument()
    expect(screen.getByText('Largest Job Site In The World')).toBeInTheDocument()
    expect(screen.getByText('Search Millions of Jobs')).toBeInTheDocument()
    expect(screen.getByText('Top Categories')).toBeInTheDocument()
    expect(screen.getByText('Browse Job by Specialism')).toBeInTheDocument()
    expect(screen.getByText('Hot Jobs')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Latest Candidates')).toBeInTheDocument()
    expect(screen.getByText('Subscribe to our Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('JobVane — Job Board Template')
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page shell with heading and table', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: 'Table #1' })).toBeInTheDocument()
    expect(screen.getByRole('table')).toBeInTheDocument()
  })

  it('renders the demo rows', () => {
    render(<App />)
    expect(screen.getByText('Elena Vos')).toBeInTheDocument()
    expect(screen.getByText('Marcus Reed')).toBeInTheDocument()
    expect(screen.getByText('Priya Nair')).toBeInTheDocument()
    expect(screen.getByText('Tomas Berg')).toBeInTheDocument()
  })

  it('renders Component Dock footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Gridline — Data Table Template')
  })
})

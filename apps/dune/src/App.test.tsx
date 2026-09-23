import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Dune — Travel Agency Template')
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Travel More/i })).toBeInTheDocument()
    expect(screen.getByText('Our Popular Services')).toBeInTheDocument()
    expect(screen.getByText('About Agency')).toBeInTheDocument()
  })
})

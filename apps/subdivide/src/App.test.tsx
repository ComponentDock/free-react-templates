import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page title in the document', () => {
    render(<App />)

    expect(document.title).toBe('Subdivide — Footer Template')
  })

  it('renders the demo heading', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Footer Demo' })).toBeInTheDocument()
  })

  it('renders the Footer component', () => {
    render(<App />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

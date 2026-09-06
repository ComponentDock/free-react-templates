import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page title heading', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { name: /Footer #19/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders the footer component', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Amethyst — Purple Footer Template')
  })
})

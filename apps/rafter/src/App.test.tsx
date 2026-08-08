import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes all sections with the expected landmarks and title', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(document.title).toBe('Rafter — Architecture Template')
  })

  it('renders the full section set in order', () => {
    render(<App />)
    const headings = screen.getAllByRole('heading').map((heading) => heading.textContent ?? '')
    const joined = headings.join(' | ')
    expect(joined).toMatch(/Precise concept design/)
    expect(joined).toMatch(/Most Popular Furnitures/)
    expect(joined).toMatch(/Alex Complex for esidence/)
    expect(joined).toMatch(/Some Features that Made us Unique/)
    expect(joined).toMatch(/Recent Posts from our blog/)
    expect(joined).toMatch(/Newsletter/)
  })
})

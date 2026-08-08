import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Anvil — Industrial & Technical Solutions Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 1, name: /Specialized Technical Solutions/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Let the number speaks for us/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Specialty/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Let's grow together/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /See Our Video/i })).toBeInTheDocument()
    expect(screen.getByText(/Contact us for quotations/i)).toBeInTheDocument()
  })
})

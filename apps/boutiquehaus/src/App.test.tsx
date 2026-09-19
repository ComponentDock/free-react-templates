import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('BoutiqueHaus — Online Shop Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByText(/Flat/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Shop for Different Categories/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /New released Products for Men/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /New released Products for Women/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Exclusive Hot Deal Ends in/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Related Searched Products/i })).toBeInTheDocument()
  })
})

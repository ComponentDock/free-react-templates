import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Edifice — Construction Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1, name: /Build Your Dream/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Alex Complex for residence/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Some Features that Made us Unique/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Why we are the best/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Latest From Blog/i })).toBeInTheDocument()
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Crux — Creative Agency Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Headings with <br> collapse accessible name — use level + textContent
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/We.*re/i)
    expect(screen.getByRole('heading', { name: 'Unlimited Colors' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /About/ })).toHaveTextContent(
      /About.*Our Company/,
    )
    expect(screen.getByRole('heading', { level: 2, name: /New Features/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Creative Projects' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Crafting/ })).toHaveTextContent(
      /Crafting.*Our Experiences/,
    )
    expect(screen.getByRole('heading', { name: 'Subscribe Newsletter' })).toBeInTheDocument()
  })
})

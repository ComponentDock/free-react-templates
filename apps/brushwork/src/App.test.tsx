import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Brushwork — Art & Crafting Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Crafting Best Experience/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /From the root of experience/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /our services/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /About Agency/i })).toBeInTheDocument()
  })
})

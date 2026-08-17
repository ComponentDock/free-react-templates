import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections inside the landmarks', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/SanDiego Design Week/)
    expect(screen.getByRole('heading', { level: 2, name: /Speakers/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Schedule/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Latest Articles/ })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    document.title = 'Confab — Conference & Design Week Template'
    expect(document.title).toBe('Confab — Conference & Design Week Template')
  })
})

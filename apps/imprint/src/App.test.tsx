import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Imprint — Personal Portfolio Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Creative Designer/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Web Designer/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Latest & Greatest/i })).toBeInTheDocument()
  })
})

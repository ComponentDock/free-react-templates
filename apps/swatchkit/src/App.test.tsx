import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Swatchkit — Free UI Kit')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Swatchkit/i })).toBeInTheDocument()
    expect(screen.getByText(/A Free UI Kit on Swatchkit Design/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Basic Elements/i })).toBeInTheDocument()
  })
})

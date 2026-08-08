import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Gable — Architecture Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 1, name: /Architects with need a different design/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /About Gable Architecture/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Projects/i })).toBeInTheDocument()
  })
})

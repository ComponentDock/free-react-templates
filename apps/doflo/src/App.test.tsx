import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Doflo — Digital Agency Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Digital and innovative idea/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Digital design and development company/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Projects/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /We work hard and think creatively/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /What Our Clients Say/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /create something awesome together/i }),
    ).toBeInTheDocument()
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Foyer — Interior Design Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 1, name: /Precise concept design/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /What we offer to our clients/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Our Recent Works may impress you/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Some Features that Made us Unique/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Testimonial from our Clients/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Ongoing Exhibitions from the scratch/i }),
    ).toBeInTheDocument()
  })
})

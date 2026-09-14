import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Stitchly — Tailor & Sewing Services')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /We make clothes that suit you/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /About our tailor house/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Why use our service/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Follow us on Instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Book Your Appointment/i })).toBeInTheDocument()
  })
})

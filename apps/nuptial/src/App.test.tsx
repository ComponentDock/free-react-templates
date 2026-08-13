import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Nuptial — Wedding Template')
  })

  it('composes the navbar, all sections, and the footer in landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    for (const heading of [
      'Francisco & Laura',
      'Bride & Groom',
      'Love Story',
      'Sweet Messages',
      'Family & Friends',
      'Place & Time',
      'Are Your Attending?',
      'Gallery',
    ]) {
      expect(
        screen.getAllByRole('heading', { name: new RegExp(heading.replace('&', '&amp;|&')) })
          .length,
      ).toBeGreaterThan(0)
    }
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Maison — Architecture Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1, name: /Posh living/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Here are some of Our Latest Works/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Top Services That We Offers/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /What Our Priority Client.s Say/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /A Glimpse from Our Latest Blog/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Join us today without any hesitation/i }),
    ).toBeInTheDocument()
  })
})

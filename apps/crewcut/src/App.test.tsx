import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Crewcut — Barber Shop Template')
  })

  it('composes the navbar, all sections, and the footer in landmarks', () => {
    render(<App />)
    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: /Crewcut/ })).toHaveAttribute('href', '#home')

    const main = screen.getByRole('main')
    expect(
      within(main).getByRole('heading', {
        level: 1,
        name: 'HairStyle is a Must try Fashion for all Occasion',
      }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'What We Can Do for You' }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'Some Features that Made us Unique' }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'Experienced Mentor Team' }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'Choose the Perfect Plan for you' }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'If you need, Just drop us a line' }),
    ).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()
  })
})

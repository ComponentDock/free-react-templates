import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Razor — Barber Shop Template')
  })

  it('composes the navbar, all sections, and the footer in landmarks', () => {
    render(<App />)
    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: /Razor/ })).toHaveAttribute('href', '#home')

    const main = screen.getByRole('main')
    expect(
      within(main).getByRole('heading', {
        level: 1,
        name: /We Will Make Your Style/,
      }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: /A Smooth Barber Experience/ }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Our Expert Team' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Photos of Our Events' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Price & Plans' })).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'People Say About Our Barber' }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Make An Appointment' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Recent Post' })).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(
      within(contentinfo).getByRole('heading', { name: 'Have a Question?' }),
    ).toBeInTheDocument()
  })
})

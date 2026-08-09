import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Dapper — Barber Shop Template')
  })

  it('composes the navbar, all sections, and the footer in landmarks', () => {
    render(<App />)

    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: /Dapper/ })).toHaveAttribute('href', '#home')

    const main = screen.getByRole('main')
    expect(
      within(main).getByRole('heading', { level: 1, name: 'HairStyle is a Must Try Fashion' }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'We Believe that Interior beauty Lasts Long' }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'What We Can Do for You' }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Select Your Style' })).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'We Have All Famous Barbers' }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('blockquote')).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Choose Your Package' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Latest From Blog' })).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByRole('heading', { name: 'About Me' })).toBeInTheDocument()
    expect(within(contentinfo).getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(within(contentinfo).getByRole('heading', { name: 'Follow Me' })).toBeInTheDocument()
  })
})

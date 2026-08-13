import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the full page with landmarks and a document title', () => {
    render(<App />)

    expect(document.title).toBe('Cargomate — Logistics Company Template')
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Section headings in order.
    expect(
      screen.getByRole('heading', { level: 1, name: 'Solid Super Service' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: "We're Carefully Delivering your happiness." }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: 'Some statistics that we want to show our viewers',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'We offer Various Services to get you covered' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: 'Check the estimated cost for your requesting goods',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: 'What our customers feedback for amazing service.',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Check the latest posts from our blog' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Please feel free to reach us' }),
    ).toBeInTheDocument()

    // Footer attribution link (mandatory Component Dock).
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Shear — Barber Shop Template')
  })

  it('composes the navbar, all sections, and the footer in landmarks', () => {
    render(<App />)

    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: /Shear/ })).toHaveAttribute('href', '#home')

    const main = screen.getByRole('main')
    expect(
      within(main).getByRole('heading', { level: 1, name: 'More Than Just A Haircut' }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Welcome To Shear!' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Services & Pricing' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'More Hair Styles' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'More Services' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Our Top Client Says' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Our Blog' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Quality Haircut' })).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
  })
})

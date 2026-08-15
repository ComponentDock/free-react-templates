import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes the header, announcement bar and hero in the banner landmark', () => {
    render(<App />)
    const banner = screen.getByRole('banner')
    expect(within(banner).getByText('Vogue')).toBeInTheDocument()
    expect(within(banner).getByText(/Free shipping on orders over \$30/)).toBeInTheDocument()
    expect(within(banner).getByRole('heading', { level: 1, name: 'Lookbook.' })).toBeInTheDocument()
  })

  it('renders all main sections in order inside the main landmark', () => {
    render(<App />)
    const main = screen.getByRole('main')
    const sections = within(main).getAllByRole('region')
    const labels = sections.map((section) => section.getAttribute('aria-label'))
    expect(labels).toEqual([
      'Store features',
      'Lookbook collage',
      'Latest products',
      'Lookbook',
      'Brand partners',
    ])
    expect(
      within(main).getByRole('heading', { level: 2, name: 'Latest Products' }),
    ).toBeInTheDocument()
  })

  it('renders the footer as the contentinfo landmark', () => {
    render(<App />)
    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByText('© 2026 Vogue. All rights reserved.')).toBeInTheDocument()
    expect(within(contentinfo).getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})

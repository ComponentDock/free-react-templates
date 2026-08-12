import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FOOTER_COLUMNS } from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the white wordmark and three link columns', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Meridian home' })).toHaveTextContent('Meridian')
    for (const column of FOOTER_COLUMNS) {
      expect(screen.getByRole('heading', { level: 3, name: column.title })).toBeInTheDocument()
      for (const link of column.links) {
        expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThan(0)
      }
    }
  })

  it('credits Component Dock in the copyright bar', () => {
    render(<Footer />)
    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(
      screen.getByText(new RegExp(`Copyright © ${new Date().getFullYear()}`)),
    ).toBeInTheDocument()
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { footerColumns } from '../data'

describe('Footer', () => {
  it('renders the three link columns with their titles and links', () => {
    render(<Footer />)
    for (const column of footerColumns) {
      expect(screen.getByRole('heading', { level: 3, name: column.title })).toBeInTheDocument()
      for (const link of column.links) {
        expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
      }
    }
  })

  it('shows the contact block and the Component Dock attribution link', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: 'Get In Touch' })).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(
      screen.getByText(new RegExp(`Copyright © ${new Date().getFullYear()}`)),
    ).toBeInTheDocument()
  })
})

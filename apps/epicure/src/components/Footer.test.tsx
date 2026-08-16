import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { footer } from '../data'

describe('Footer', () => {
  it('links to Component Dock', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dock).toHaveAttribute('target', '_blank')
  })

  it('shows the About us column with blurb and Read more', () => {
    render(<Footer />)
    expect(screen.getByText('About us')).toBeInTheDocument()
    expect(screen.getByText(footer.blurb)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read more' })).toHaveAttribute('href', '#about')
  })

  it('shows the Links column', () => {
    render(<Footer />)
    expect(screen.getByText('Links')).toBeInTheDocument()
    for (const link of footer.linksColumn.links) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
  })

  it('shows the Our Menu column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Our Menu' })).toBeInTheDocument()
    for (const link of footer.menuColumn.links) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
  })

  it('shows the Opening Hours column', () => {
    render(<Footer />)
    expect(screen.getByText('Opening Hours')).toBeInTheDocument()
    for (const row of footer.hoursColumn.rows) {
      expect(screen.getByText(row.days)).toBeInTheDocument()
      expect(screen.getByText(row.hours)).toBeInTheDocument()
    }
  })

  it('shows a copyright bar', () => {
    render(<Footer />)
    const year = String(new Date().getFullYear())
    expect(screen.getByText(new RegExp(`Copyright © ${year}`))).toBeInTheDocument()
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section header with the amber View All Portfolio link', () => {
    render(<Portfolio />)

    expect(screen.getByRole('heading', { level: 2, name: 'Latest Work' })).toBeInTheDocument()
    const viewAll = screen.getByRole('link', { name: 'View All Portfolio' })
    expect(viewAll.className).toContain('text-brand')
  })

  it('renders the four work items with titles, categories, and captions', () => {
    render(<Portfolio />)

    const items = [
      ['Startup Brand', 'Business'],
      ['Corporate Design', 'Design'],
      ['Unpacked Branding', 'Business'],
      ['Rebranding Work', 'Business'],
    ] as const

    for (const [title] of items) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
      expect(screen.getByAltText(title)).toBeInTheDocument()
    }

    expect(screen.getAllByText('Business')).toHaveLength(3)
    expect(screen.getAllByText('Design')).toHaveLength(1)
  })

  it('renders the More Portfolio outline button', () => {
    render(<Portfolio />)

    const more = screen.getByRole('link', { name: 'More Portfolio' })
    expect(more.className).toContain('border-2')
    expect(more.className).toContain('uppercase')
  })
})

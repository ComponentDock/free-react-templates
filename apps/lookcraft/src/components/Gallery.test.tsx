import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the gallery section', () => {
    render(<Gallery />)
    expect(screen.getByRole('region', { name: /gallery/i })).toBeInTheDocument()
  })

  it('renders 6 gallery items total', () => {
    render(<Gallery />)
    const items = screen.getAllByRole('article')
    expect(items).toHaveLength(6)
  })

  it('renders View Gallery buttons on each item', () => {
    render(<Gallery />)
    const buttons = screen.getAllByRole('button', { name: /view gallery/i })
    expect(buttons).toHaveLength(6)
  })

  it('renders a See All Galleries CTA', () => {
    render(<Gallery />)
    expect(screen.getByRole('link', { name: /see all/i })).toBeInTheDocument()
  })

  it('displays gallery quote text', () => {
    render(<Gallery />)
    expect(screen.getByText(/photography/i)).toBeInTheDocument()
  })
})

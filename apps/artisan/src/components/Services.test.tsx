import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and four colored service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Service Offers' })).toBeInTheDocument()
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Application Development')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Design')).toBeInTheDocument()
  })

  it('uses the four distinct card colors from the palette', () => {
    const { container } = render(<Services />)
    const cards = container.querySelectorAll('.service-card')
    expect(cards).toHaveLength(4)
    expect(cards[0]!.className).toContain('bg-terracotta')
    expect(cards[1]!.className).toContain('bg-mauve')
    expect(cards[2]!.className).toContain('bg-brand')
    expect(cards[3]!.className).toContain('bg-periwinkle')
  })
})

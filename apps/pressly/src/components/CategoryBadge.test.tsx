import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CategoryBadge } from './CategoryBadge'

describe('CategoryBadge', () => {
  it('renders the category text with the correct color classes', () => {
    render(<CategoryBadge category="Lifestyle" color="teal" />)
    const badge = screen.getByText('Lifestyle')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('bg-badge-teal')
  })

  it('applies custom className', () => {
    render(<CategoryBadge category="Food" color="orange" className="mt-2" />)
    expect(screen.getByText('Food')).toHaveClass('mt-2')
  })
})

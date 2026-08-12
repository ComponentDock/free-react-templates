import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Classes } from './Classes'
import { CLASS_CARDS } from '../data'

describe('Classes', () => {
  it('renders the heading and three class cards with price badges', () => {
    render(<Classes />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Classes' })).toBeInTheDocument()
    for (const item of CLASS_CARDS) {
      expect(screen.getByRole('heading', { level: 3, name: item.title })).toBeInTheDocument()
    }
    expect(screen.getAllByText('$25.00')).toHaveLength(3)
    expect(screen.getAllByText('/month')).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: /Learn More/ })).toHaveLength(3)
    const circles = document.querySelectorAll('.rounded-full.object-cover')
    expect(circles).toHaveLength(3)
  })
})

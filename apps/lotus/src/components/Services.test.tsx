import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('shows the heading and exactly three service cards with icon, title, and copy', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Explore our services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Body Builder' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Yoga Program' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Cardio Program' })).toBeInTheDocument()
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)
    const first = articles[0]!
    expect(first.querySelector('p')).toHaveTextContent(/Sculpt strength/)
    expect(first.querySelector('svg')).toBeInTheDocument()
  })
})

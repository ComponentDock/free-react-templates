import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

const titles = ['Interior Design', 'Concept Design', 'Residential Design', 'Hospitality Design']

describe('Services', () => {
  it('shows the heading and the four service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    for (const title of titles) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders a Learn More link on every card', () => {
    render(<Services />)
    const links = screen.getAllByRole('link', { name: 'Learn More' })
    expect(links).toHaveLength(4)
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#contact')
    }
  })
})

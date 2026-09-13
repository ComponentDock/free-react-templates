import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading and all service cards', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()

    const cards = ['Strategy & Research', 'UI/UX Design', 'Web Development', 'Digital Marketing']

    for (const title of cards) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders four service cards with descriptions', () => {
    render(<Services />)

    const section = screen.getByRole('region', { name: 'Services' })
    const headings = section.querySelectorAll('h3')
    expect(headings.length).toBe(4)
  })
})

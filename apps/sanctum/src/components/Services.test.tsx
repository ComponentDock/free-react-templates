import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Giving light to someone')
  })

  it('renders all service cards with unique titles', () => {
    render(<Services />)
    services.forEach((s) => {
      expect(screen.getByText(s.title)).toBeInTheDocument()
    })
  })

  it('renders unique descriptions for each service', () => {
    render(<Services />)
    services.forEach((s) => {
      expect(screen.getByText(s.description)).toBeInTheDocument()
    })
  })

  it('renders 4 service cards', () => {
    render(<Services />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings.length).toBe(4)
  })
})

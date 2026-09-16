import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonies } from './Testimonies'
import { testimonies } from '../data'

describe('Testimonies', () => {
  it('renders the section heading', () => {
    render(<Testimonies />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Testimonies')
  })

  it('renders all testimony cards with unique quotes', () => {
    render(<Testimonies />)
    testimonies.forEach((t) => {
      expect(screen.getByText(t.quote)).toBeInTheDocument()
    })
  })

  it('renders unique names and roles', () => {
    render(<Testimonies />)
    testimonies.forEach((t) => {
      expect(screen.getByText(t.name)).toBeInTheDocument()
      expect(screen.getByText(t.role)).toBeInTheDocument()
    })
  })

  it('renders user images with unique alt text', () => {
    render(<Testimonies />)
    testimonies.forEach((t) => {
      expect(screen.getByAltText(t.name)).toBeInTheDocument()
    })
  })
})

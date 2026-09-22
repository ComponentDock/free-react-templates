import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders 3 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Exercise Program')).toBeInTheDocument()
    expect(screen.getByText('Nutrition Plans')).toBeInTheDocument()
    expect(screen.getByText('Diet Program')).toBeInTheDocument()
  })

  it('renders Read more links', () => {
    render(<Services />)
    const links = screen.getAllByText('Read more')
    expect(links).toHaveLength(3)
  })

  it('renders service images', () => {
    render(<Services />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})

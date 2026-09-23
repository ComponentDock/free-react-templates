import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders heading about legal solutions', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /reliable.*effective legal solutions/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders Book an appointment button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /book an appointment/i })).toBeInTheDocument()
  })

  it('renders 2 images', () => {
    render(<About />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
    expect(images[0]).toHaveAttribute('alt', 'Attorney at law')
    expect(images[1]).toHaveAttribute('alt', 'Legal consultation')
  })
})

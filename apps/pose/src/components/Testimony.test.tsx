import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimony } from './Testimony'

describe('Testimony', () => {
  it('renders a testimonial quote', () => {
    render(<Testimony />)

    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
  })

  it('attributes the quote to Mike Lewis, Architect', () => {
    render(<Testimony />)

    expect(screen.getByRole('heading', { level: 3, name: 'Mike Lewis' })).toBeInTheDocument()
    expect(screen.getByText('Architect')).toBeInTheDocument()
  })

  it('renders the testimony band with a background image', () => {
    const { container } = render(<Testimony />)

    const section = container.querySelector('section')
    expect(section).not.toBeNull()
  })
})

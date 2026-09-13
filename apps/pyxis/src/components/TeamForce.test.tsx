import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TeamForce } from './TeamForce'

describe('TeamForce', () => {
  it('renders team heading, description, and CTA', () => {
    render(<TeamForce />)
    expect(screen.getByRole('heading', { name: /meet our team/i })).toBeInTheDocument()
    expect(screen.getByText(/passionate team/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view more/i })).toBeInTheDocument()
  })

  it('renders team image', () => {
    render(<TeamForce />)
    const img = screen.getByRole('img', { name: /our team/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})

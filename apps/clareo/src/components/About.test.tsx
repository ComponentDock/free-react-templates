import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'We Are Clareo a Photography Studio',
    )
  })

  it('renders description paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/passionate team of photographers/)).toBeInTheDocument()
    expect(screen.getByText(/state-of-the-art equipment/)).toBeInTheDocument()
  })

  it('renders the studio image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /photography studio workspace/i })
    expect(img).toBeInTheDocument()
  })
})

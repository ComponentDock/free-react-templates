import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Recent From Blog')).toBeInTheDocument()
  })

  it('renders all three blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Modern Dental Care Techniques')).toBeInTheDocument()
    expect(screen.getByText('Tips for Healthy Teeth')).toBeInTheDocument()
    expect(screen.getByText('Choosing the Right Dentist')).toBeInTheDocument()
  })
})

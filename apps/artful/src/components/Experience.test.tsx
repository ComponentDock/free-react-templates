import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Experience } from './Experience'

describe('Experience', () => {
  it('renders heading and content', () => {
    render(<Experience />)
    expect(
      screen.getByRole('heading', { name: /We provide best art experience/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/About Us/i)).toBeInTheDocument()
  })

  it('renders images and View Details button', () => {
    render(<Experience />)
    expect(screen.getAllByRole('img')).toHaveLength(2)
    expect(screen.getByRole('link', { name: /View Details/i })).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders about section with heading, image, and description', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/We are here to help/)
    expect(screen.getByRole('img', { name: 'About Loop agency' })).toBeInTheDocument()
    expect(screen.getAllByText(/Far far away/).length).toBeGreaterThanOrEqual(1)
  })
})

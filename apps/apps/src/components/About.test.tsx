import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading, copy, image, and see details link', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'We Believe that Interior beautifies the Total Architecture',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Inappropriate behavior is often laughed off/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Apps app illustration/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /see details/i })).toBeInTheDocument()
  })
})

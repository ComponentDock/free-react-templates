import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'
import { aboutImage } from '../data'

describe('About', () => {
  it('renders the framed photo, sun icon, heading, blurb and Learn Details link', () => {
    const { container } = render(<About />)
    expect(screen.getByRole('img', { name: /golden-hour portrait/i })).toHaveAttribute(
      'src',
      aboutImage,
    )
    expect(container.querySelector('svg')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Visually clean & Perfect')
    expect(heading.querySelector('span')).toHaveTextContent('Visually')
    expect(screen.getByText(/without a second thought/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /learn details/i })).toHaveAttribute('href', '#contact')
  })
})

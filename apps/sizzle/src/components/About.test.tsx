import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { about } from '../data'

describe('About', () => {
  it('renders the heading, copy and CTA', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(about.heading)
    expect(screen.getByText(about.body)).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: about.cta })
    expect(cta).toHaveAttribute('href', '#menu')
  })

  it('renders the food photograph with an alt text', () => {
    render(<About />)
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', about.image)
  })
})

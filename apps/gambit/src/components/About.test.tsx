import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'
import { ABOUT_HEADING } from '../data'

describe('About', () => {
  it('renders the heading, paragraph, and Learn More button', () => {
    render(<About />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toBe(ABOUT_HEADING)
    expect(screen.getByText(/From indie gems to triple-A blockbusters/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
  })

  it('renders the about image', () => {
    const { container } = render(<About />)
    const img = container.querySelector('img')
    expect(img).not.toBeNull()
    expect(img?.getAttribute('src')).toContain('picsum.photos')
  })
})

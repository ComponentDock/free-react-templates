import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about section label and heading', () => {
    render(<About />)
    expect(screen.getByText(/About our company/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Make the customer the hero of your story/i }),
    ).toBeInTheDocument()
  })

  it('renders the 25 years badge and Learn More CTA', () => {
    render(<About />)
    expect(screen.getByText('25')).toBeInTheDocument()
    expect(screen.getByText(/Years of Service/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Learn More/i })).toBeInTheDocument()
  })

  it('renders the about images', () => {
    render(<About />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(1)
    expect(images[0]).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})

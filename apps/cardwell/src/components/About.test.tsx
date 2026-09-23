import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the About section with heading and bio', () => {
    render(<About />)

    const section = screen.getByRole('region', { name: /about/i })
    expect(section).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 2, name: 'Cardwell' })).toBeInTheDocument()
    expect(screen.getByText(/creative designer & developer/i)).toBeInTheDocument()
    expect(screen.getByText(/creative designer and full-stack developer/i)).toBeInTheDocument()
  })

  it('renders the portrait image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /cardwell portrait/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/cardwell-about'))
  })

  it('renders social icon links', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Dribbble' })).toBeInTheDocument()
  })

  it('renders the Download CV button', () => {
    render(<About />)
    const cvLink = screen.getByRole('link', { name: /download cv/i })
    expect(cvLink).toBeInTheDocument()
    expect(cvLink).toHaveAttribute('href', '#')
  })

  it('renders stats', () => {
    render(<About />)
    expect(screen.getByText('10+')).toBeInTheDocument()
    expect(screen.getByText('120+')).toBeInTheDocument()
    expect(screen.getByText('50+')).toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
  })

  it('has a watermark text element', () => {
    render(<About />)
    const section = screen.getByRole('region', { name: /about/i })
    const watermark = section.querySelector('[aria-hidden="true"]')
    expect(watermark).toBeInTheDocument()
  })
})

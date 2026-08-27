import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about section with heading', () => {
    render(<About />)
    expect(screen.getByText('Financial Excellence For Your Business')).toBeInTheDocument()
  })

  it('renders four service items', () => {
    render(<About />)
    expect(screen.getByText('Market Analysis')).toBeInTheDocument()
    expect(screen.getByText('Accounting Advisor')).toBeInTheDocument()
    expect(screen.getByText('General Consultancy')).toBeInTheDocument()
    expect(screen.getByText('Structured Assessment')).toBeInTheDocument()
  })

  it('renders an about image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /about/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('has split layout with image on left', () => {
    render(<About />)
    const section = screen.getByRole('region', { name: /about/i })
    expect(section).toBeInTheDocument()
  })
})

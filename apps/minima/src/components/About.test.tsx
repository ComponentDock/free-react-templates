import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from '../components/About'

describe('About', () => {
  it('renders the About us heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /about us/i })).toBeInTheDocument()
  })

  it('renders all 5 service cards', () => {
    render(<About />)
    const services = ['UI/UX Design', 'Web Development', 'Product Design', 'Mobile Apps', 'SEO']
    services.forEach((title) => {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    })
  })

  it('renders the welcome heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /welcome to minima/i })).toBeInTheDocument()
  })

  it('renders the about description', () => {
    render(<About />)
    expect(screen.getByText(/separated they live in bookmarksgrove/i)).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /our team collaborating/i })
    expect(img).toBeInTheDocument()
  })

  it('has two sections', () => {
    const { container } = render(<About />)
    const sections = container.querySelectorAll('section')
    expect(sections.length).toBe(2)
  })
})

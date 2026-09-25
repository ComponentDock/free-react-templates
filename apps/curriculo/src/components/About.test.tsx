import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<About />)
    expect(screen.getByText(/passionate product designer/i)).toBeInTheDocument()
  })

  it('renders Hire Me button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /hire me/i })).toBeInTheDocument()
  })

  it('renders Download CV button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /download cv/i })).toBeInTheDocument()
  })

  it('renders about image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /about me/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})

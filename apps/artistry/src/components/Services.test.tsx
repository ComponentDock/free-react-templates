import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('displays the section title My Services', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'My Services' })).toBeInTheDocument()
  })

  it('displays 3 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Web & Mobile Design')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('E-commerce')).toBeInTheDocument()
  })

  it('displays descriptions for each service', () => {
    render(<Services />)
    expect(screen.getByText(/Crafting intuitive/)).toBeInTheDocument()
    expect(screen.getByText(/Building performant/)).toBeInTheDocument()
    expect(screen.getByText(/Creating seamless/)).toBeInTheDocument()
  })

  it('renders on a dark background', () => {
    const { container } = render(<Services />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-dark-brown')
  })

  it('renders service icons', () => {
    render(<Services />)
    const svgs = document.querySelectorAll('svg')
    expect(svgs.length).toBeGreaterThanOrEqual(3)
  })
})

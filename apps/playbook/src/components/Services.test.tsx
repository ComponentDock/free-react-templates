import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading', () => {
    render(<Services />)
    expect(screen.getByText('What We Do')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Services />)
    // The description appears in the section intro and in each service item
    const descriptions = screen.getAllByText(/Far far away, behind the word mountains/)
    expect(descriptions.length).toBeGreaterThanOrEqual(1)
  })

  it('renders all 4 service items', () => {
    render(<Services />)
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Brand Identity')).toBeInTheDocument()
    expect(screen.getByText('Copywriting')).toBeInTheDocument()
    expect(screen.getByText('eCommerce')).toBeInTheDocument()
  })

  it('renders service icons', () => {
    render(<Services />)
    // lucide-react icons render as SVGs
    const svgs = document.querySelectorAll('svg')
    expect(svgs.length).toBeGreaterThanOrEqual(4)
  })
})

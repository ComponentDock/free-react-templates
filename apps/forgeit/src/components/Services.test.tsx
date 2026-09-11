import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders six service items', () => {
    render(<Services />)
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('eCommerce')).toBeInTheDocument()
    expect(screen.getByText('Web Applications')).toBeInTheDocument()
    expect(screen.getByText('Branding')).toBeInTheDocument()
    expect(screen.getByText('Copy Writing')).toBeInTheDocument()
    expect(screen.getByText('Mobile Applications')).toBeInTheDocument()
  })

  it('renders Learn More links', () => {
    render(<Services />)
    const links = screen.getAllByText('Learn More')
    expect(links.length).toBe(6)
  })
})

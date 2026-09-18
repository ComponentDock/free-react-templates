import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders all three feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Photography')).toBeInTheDocument()
    expect(screen.getByText('Online Marketing')).toBeInTheDocument()
  })

  it('renders Learn More links', () => {
    render(<Features />)
    const links = screen.getAllByText('Learn More')
    expect(links.length).toBe(3)
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/Sed ut perspiciatis/)).toBeInTheDocument()
    expect(screen.getByText(/Nemo enim ipsam/)).toBeInTheDocument()
    expect(screen.getByText(/Neque porro quisquam/)).toBeInTheDocument()
  })
})

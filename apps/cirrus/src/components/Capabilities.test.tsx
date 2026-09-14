import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Capabilities } from './Capabilities'

describe('Capabilities', () => {
  it('renders the heading', () => {
    render(<Capabilities />)
    expect(screen.getByText('What Our Software Can Do For You')).toBeInTheDocument()
  })

  it('renders all five capability rows', () => {
    render(<Capabilities />)
    expect(screen.getByText('Responsive Design')).toBeInTheDocument()
    expect(screen.getByText('Android Apps Development')).toBeInTheDocument()
    expect(screen.getByText('iOS Apps Development')).toBeInTheDocument()
    expect(screen.getByText('UX/UI Design')).toBeInTheDocument()
    expect(screen.getByText('Print Ready Design')).toBeInTheDocument()
  })

  it('renders the illustration image', () => {
    render(<Capabilities />)
    expect(screen.getByAltText('Software capabilities illustration')).toBeInTheDocument()
  })

  it('renders five bordered rows', () => {
    render(<Capabilities />)
    const rows = document.querySelectorAll('.border.border-gray-200')
    expect(rows).toHaveLength(5)
  })
})

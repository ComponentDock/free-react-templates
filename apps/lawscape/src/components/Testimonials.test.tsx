import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Client Says About Me')).toBeInTheDocument()
  })

  it('displays all three testimonials with names and roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Mosan Cameron')).toBeInTheDocument()
    expect(screen.getByText('Executive, FedEx')).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Director, Nexus Corp')).toBeInTheDocument()
    expect(screen.getByText('David Thornton')).toBeInTheDocument()
    expect(screen.getByText('Manager, GlobalTech')).toBeInTheDocument()
  })
})

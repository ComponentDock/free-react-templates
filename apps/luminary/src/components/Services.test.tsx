import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Services')
  })

  it('renders four service cards', () => {
    render(<Services />)
    const titles = ['Inspire', 'Create', 'Innovate', 'Publish']
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/innovative digital experiences/)).toBeInTheDocument()
    expect(screen.getByText(/From concept to reality/)).toBeInTheDocument()
  })

  it('renders the See All Services link', () => {
    render(<Services />)
    const link = screen.getByRole('link', { name: /see all services/i })
    expect(link).toBeInTheDocument()
  })

  it('has light background', () => {
    render(<Services />)
    const section = screen.getByRole('heading', { level: 2 }).closest('section')
    expect(section).toHaveClass('bg-light-bg')
  })
})

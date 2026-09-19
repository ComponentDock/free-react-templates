import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument()
  })

  it('renders all six service cards', () => {
    render(<Services />)

    expect(screen.getByText('Online Courses')).toBeInTheDocument()
    expect(screen.getByText('Indoor Courses')).toBeInTheDocument()
    expect(screen.getByText('Amazing Library')).toBeInTheDocument()
    expect(screen.getByText('Exceptional Professors')).toBeInTheDocument()
    expect(screen.getByText('Top Programs')).toBeInTheDocument()
    expect(screen.getByText('Graduate Diploma')).toBeInTheDocument()
  })

  it('has dark background', () => {
    render(<Services />)
    const section = screen.getByRole('region', { name: /services/i })
    expect(section).toHaveClass('bg-dark-bg')
  })

  it('renders six icon SVGs', () => {
    const { container } = render(<Services />)
    const svgs = container.querySelectorAll('svg')
    expect(svgs).toHaveLength(6)
  })
})

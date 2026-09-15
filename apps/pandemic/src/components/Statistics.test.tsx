import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Statistics } from './Statistics'

describe('Statistics', () => {
  it('renders all three stat cards', () => {
    render(<Statistics />)
    expect(screen.getByText('14,112,077')).toBeInTheDocument()
    expect(screen.getByText('595,685')).toBeInTheDocument()
    expect(screen.getByText('8,397,665')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Statistics />)
    expect(screen.getByText('Total Cases')).toBeInTheDocument()
    expect(screen.getByText('Deaths')).toBeInTheDocument()
    expect(screen.getByText('Recovered')).toBeInTheDocument()
  })

  it('has a dark background', () => {
    const { container } = render(<Statistics />)
    const section = container.querySelector('section')!
    expect(section.className).toContain('bg-gray-900')
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
  it('renders the heading', () => {
    render(<Skills />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('My Skills')
  })

  it('renders all 5 skill bars', () => {
    render(<Skills />)
    expect(screen.getByText('Design')).toBeInTheDocument()
    expect(screen.getByText('HTML5')).toBeInTheDocument()
    expect(screen.getByText('CSS3')).toBeInTheDocument()
    expect(screen.getByText('WordPress')).toBeInTheDocument()
    expect(screen.getByText('Bootstrap')).toBeInTheDocument()
  })

  it('displays correct percentages', () => {
    render(<Skills />)
    expect(screen.getByText('85%')).toBeInTheDocument()
    expect(screen.getByText('98%')).toBeInTheDocument()
    expect(screen.getByText('97%')).toBeInTheDocument()
    expect(screen.getByText('88%')).toBeInTheDocument()
    expect(screen.getByText('92%')).toBeInTheDocument()
  })

  it('has progressbar roles with correct ARIA attributes', () => {
    render(<Skills />)
    const progressbars = screen.getAllByRole('progressbar')
    expect(progressbars).toHaveLength(5)
    expect(progressbars[0]).toHaveAttribute('aria-valuenow', '85')
    expect(progressbars[0]).toHaveAttribute('aria-valuemin', '0')
    expect(progressbars[0]).toHaveAttribute('aria-valuemax', '100')
  })
})

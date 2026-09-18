import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Engineering Your Dreams With Us',
    )
  })

  it('renders about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /construction team/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum'),
    )
  })

  it('renders two feature items', () => {
    render(<About />)
    expect(screen.getByText('Certified Company')).toBeInTheDocument()
    expect(screen.getByText('Experience Employees')).toBeInTheDocument()
  })

  it('renders Learn more button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /learn more/i })).toBeInTheDocument()
  })
})

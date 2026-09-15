import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DifferentYoga } from './DifferentYoga'

describe('DifferentYoga', () => {
  it('renders the quote text', () => {
    render(<DifferentYoga />)

    expect(screen.getByText(/Yoga is the journey of the self/)).toBeInTheDocument()
  })

  it('renders three stat values', () => {
    render(<DifferentYoga />)

    expect(screen.getByText('40+')).toBeInTheDocument()
    expect(screen.getByText('100+')).toBeInTheDocument()
    expect(screen.getByText('15+')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<DifferentYoga />)

    expect(screen.getByText('Classes')).toBeInTheDocument()
    expect(screen.getByText('Students')).toBeInTheDocument()
    expect(screen.getByText('Trainers')).toBeInTheDocument()
  })

  it('has the correct section id', () => {
    const { container } = render(<DifferentYoga />)

    const section = container.querySelector('section')
    expect(section).toHaveAttribute('id', 'about')
  })

  it('has a dark overlay background', () => {
    const { container } = render(<DifferentYoga />)

    const overlay = container.querySelector('.bg-brand\\/80')
    expect(overlay).toBeInTheDocument()
  })
})

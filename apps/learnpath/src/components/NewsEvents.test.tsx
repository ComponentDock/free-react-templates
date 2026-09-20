import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NewsEvents } from './NewsEvents'

describe('NewsEvents', () => {
  it('renders section heading', () => {
    render(<NewsEvents />)

    expect(screen.getByRole('heading', { name: /latest news & events/i })).toBeInTheDocument()
  })

  it('renders featured event details', () => {
    render(<NewsEvents />)

    expect(screen.getByRole('heading', { name: 'Web Development Workshop' })).toBeInTheDocument()
    expect(screen.getByText('New York City')).toBeInTheDocument()
    expect(screen.getByText('3 Days')).toBeInTheDocument()
    expect(screen.getByText('22')).toBeInTheDocument()
    expect(screen.getByText('Sep')).toBeInTheDocument()
  })

  it('renders blog post titles', () => {
    render(<NewsEvents />)

    expect(
      screen.getByRole('heading', { name: 'How to Start Your Online Learning Journey' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Tips for Successful Online Education' }),
    ).toBeInTheDocument()
  })

  it('renders blog post metadata', () => {
    render(<NewsEvents />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('8')).toBeInTheDocument()
  })

  it('renders event and blog images', () => {
    render(<NewsEvents />)

    expect(screen.getByAltText('Web Development Workshop')).toBeInTheDocument()
    expect(screen.getByAltText('How to Start Your Online Learning Journey')).toBeInTheDocument()
    expect(screen.getByAltText('Tips for Successful Online Education')).toBeInTheDocument()
  })
})

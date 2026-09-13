import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the Welcome subtitle', () => {
    render(<Intro />)

    expect(screen.getByText('Welcome')).toBeInTheDocument()
  })

  it('renders the Amazing Hotel heading', () => {
    render(<Intro />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /Amazing Hotel in front of the Sea/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Intro />)

    expect(screen.getByText(/Nestled along a pristine coastline/)).toBeInTheDocument()
  })

  it('renders 4 gallery images', () => {
    render(<Intro />)

    expect(screen.getByAltText('Hotel lobby')).toBeInTheDocument()
    expect(screen.getByAltText('Ocean view room')).toBeInTheDocument()
    expect(screen.getByAltText('Infinity pool')).toBeInTheDocument()
    expect(screen.getByAltText('Beachfront terrace')).toBeInTheDocument()
  })
})

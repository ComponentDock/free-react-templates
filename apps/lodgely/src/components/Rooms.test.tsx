import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Rooms } from './Rooms'

describe('Rooms', () => {
  it('renders the Rooms & Suites heading', () => {
    render(<Rooms />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Rooms & Suites')
  })

  it('renders 3 room cards', () => {
    render(<Rooms />)

    expect(screen.getByText('Single Room')).toBeInTheDocument()
    expect(screen.getByText('Family Room')).toBeInTheDocument()
    expect(screen.getByText('Presidential Room')).toBeInTheDocument()
  })

  it('displays prices for each room', () => {
    render(<Rooms />)

    expect(screen.getByText('$90')).toBeInTheDocument()
    expect(screen.getByText('$120')).toBeInTheDocument()
    expect(screen.getByText('$250')).toBeInTheDocument()
  })

  it('renders room images', () => {
    render(<Rooms />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })

  it('renders More Details links', () => {
    render(<Rooms />)

    const links = screen.getAllByText('More Details')
    expect(links.length).toBe(3)
  })
})

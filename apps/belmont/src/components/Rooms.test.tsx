import { render, screen } from '@testing-library/react'
import { Rooms } from './Rooms'

describe('Rooms', () => {
  it('renders the section heading', () => {
    render(<Rooms />)
    expect(screen.getByRole('heading', { name: /Our Rooms/i })).toBeInTheDocument()
  })

  it('renders three room cards', () => {
    render(<Rooms />)
    const bookButtons = screen.getAllByRole('button', { name: /book now/i })
    expect(bookButtons.length).toBe(3)
  })

  it('displays room types', () => {
    render(<Rooms />)
    expect(screen.getByText(/standard double room/i)).toBeInTheDocument()
    expect(screen.getByText(/superior double room/i)).toBeInTheDocument()
    expect(screen.getByText(/deluxe double room/i)).toBeInTheDocument()
  })

  it('displays room prices', () => {
    render(<Rooms />)
    expect(screen.getByText(/\$99/i)).toBeInTheDocument()
    expect(screen.getByText(/\$150/i)).toBeInTheDocument()
    expect(screen.getByText(/\$200/i)).toBeInTheDocument()
  })
})

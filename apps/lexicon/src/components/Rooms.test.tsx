import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Rooms } from './Rooms'

describe('Rooms', () => {
  it('renders heading and subtitle', () => {
    render(<Rooms />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Rooms')
    expect(screen.getByText(/Choose from our selection/)).toBeInTheDocument()
  })

  it('renders room cards with names and prices', () => {
    render(<Rooms />)
    expect(screen.getByText('Luxurious Room')).toBeInTheDocument()
    expect(screen.getByText('Family Room')).toBeInTheDocument()
    expect(screen.getByText('Couple Room')).toBeInTheDocument()
    expect(screen.getAllByText(/Started from/)).toHaveLength(3)
  })

  it('navigates to next room on click', async () => {
    const user = userEvent.setup()
    render(<Rooms />)
    const nextBtn = screen.getByRole('button', { name: 'Next room' })
    await user.click(nextBtn)
    expect(nextBtn).toBeInTheDocument()
  })

  it('navigates to previous room on click', async () => {
    const user = userEvent.setup()
    render(<Rooms />)
    const prevBtn = screen.getByRole('button', { name: 'Previous room' })
    await user.click(prevBtn)
    expect(prevBtn).toBeInTheDocument()
  })

  it('has section id', () => {
    render(<Rooms />)
    expect(document.getElementById('rooms')).toBeInTheDocument()
  })
})

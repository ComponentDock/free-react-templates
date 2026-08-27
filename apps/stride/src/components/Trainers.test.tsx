import { render, screen } from '@testing-library/react'
import { Trainers } from './Trainers'

describe('Trainers', () => {
  it('renders the section heading', () => {
    render(<Trainers />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Trainers' })).toBeInTheDocument()
  })

  it('renders all four trainer names', () => {
    render(<Trainers />)
    expect(screen.getByText('Sarah Miller')).toBeInTheDocument()
    expect(screen.getByText('Mike Johnson')).toBeInTheDocument()
    expect(screen.getByText('Lisa Chen')).toBeInTheDocument()
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
  })

  it('renders trainer role labels', () => {
    render(<Trainers />)
    const roles = screen.getAllByText('Trainer')
    // 1 heading subtext + 4 role labels = 5 total
    expect(roles.length).toBe(5)
  })

  it('renders trainer bios', () => {
    render(<Trainers />)
    expect(screen.getByText(/Yoga and flexibility specialist/)).toBeInTheDocument()
  })

  it('renders trainer images', () => {
    render(<Trainers />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(4)
  })
})

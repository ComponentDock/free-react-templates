import { render, screen } from '@testing-library/react'
import { Offer } from './Offer'

describe('Offer', () => {
  it('renders the section heading', () => {
    render(<Offer />)
    expect(screen.getByText('Offer')).toBeInTheDocument()
    expect(screen.getByText('05')).toBeInTheDocument()
  })

  it('renders all six feature labels', () => {
    render(<Offer />)
    expect(screen.getByText('Video Editing')).toBeInTheDocument()
    expect(screen.getByText('Premium Clear')).toBeInTheDocument()
    expect(screen.getByText('For All Displays')).toBeInTheDocument()
    expect(screen.getByText('Right On Time')).toBeInTheDocument()
    expect(screen.getByText('Innovative Ideas')).toBeInTheDocument()
    expect(screen.getByText('Perfect Sound')).toBeInTheDocument()
  })
})

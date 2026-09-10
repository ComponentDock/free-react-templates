import { render, screen } from '@testing-library/react'
import { Offer } from './Offer'

describe('Offer', () => {
  it('renders section title, video, and feature items', () => {
    render(<Offer />)
    expect(screen.getByText('Offer', { selector: 'h2' })).toBeInTheDocument()
    expect(screen.getByText('Video')).toBeInTheDocument()
    expect(screen.getByText('Video Editing')).toBeInTheDocument()
    expect(screen.getByText('Premium Clear')).toBeInTheDocument()
    expect(screen.getByText('For All Displays')).toBeInTheDocument()
    expect(screen.getByText('Right On Time')).toBeInTheDocument()
    expect(screen.getByText('Innovative Ideas')).toBeInTheDocument()
    expect(screen.getByText('Perfect Sound')).toBeInTheDocument()
    expect(screen.getByText('3D Solution')).toBeInTheDocument()
  })

  it('shows section number 05', () => {
    render(<Offer />)
    expect(screen.getByText('05')).toBeInTheDocument()
  })

  it('has play button with accessible label', () => {
    render(<Offer />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })
})

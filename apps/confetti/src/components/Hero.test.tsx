import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByText('Digital Conference For Designers')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Committed to success')).toBeInTheDocument()
  })

  it('renders Download button', () => {
    render(<Hero />)
    expect(screen.getByText('Download')).toBeInTheDocument()
  })

  it('renders play button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })
})

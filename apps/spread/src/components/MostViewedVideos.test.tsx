import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MostViewedVideos } from './MostViewedVideos'

describe('MostViewedVideos', () => {
  it('renders the section heading', () => {
    render(<MostViewedVideos />)
    expect(screen.getByText('Most Viewed Videos')).toBeInTheDocument()
  })

  it('renders 3 most viewed video cards', () => {
    render(<MostViewedVideos />)
    expect(screen.getByText(/Dentists Are Smiling/)).toBeInTheDocument()
    expect(screen.getByText(/Become A Travel Pro/)).toBeInTheDocument()
    expect(screen.getByText(/From Wetlands To Canals/)).toBeInTheDocument()
  })

  it('renders view counts', () => {
    render(<MostViewedVideos />)
    expect(screen.getByText('6.8k')).toBeInTheDocument()
    expect(screen.getByText('5.5k')).toBeInTheDocument()
    expect(screen.getByText('4.9k')).toBeInTheDocument()
  })
})

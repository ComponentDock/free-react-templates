import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Offer } from './Offer'

describe('Offer', () => {
  it('renders the section number and title', () => {
    render(<Offer />)
    expect(screen.getByText('05')).toBeInTheDocument()
    expect(screen.getByText('Offer')).toBeInTheDocument()
  })

  it('renders the video thumbnail', () => {
    render(<Offer />)
    expect(screen.getByRole('img', { name: 'Video showcase' })).toBeInTheDocument()
  })

  it('renders the play button', () => {
    render(<Offer />)
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })

  it('renders carousel items', () => {
    render(<Offer />)
    for (const label of ['Video Editing', 'Premium Clear', 'For All Displays', 'Fast Delivery']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('renders timeline years', () => {
    render(<Offer />)
    for (const year of ['2015', '2018', '2020', '2023']) {
      expect(screen.getByText(year)).toBeInTheDocument()
    }
  })
})

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ParallaxConference } from './ParallaxConference'

describe('ParallaxConference', () => {
  it('renders conference heading', () => {
    render(<ParallaxConference />)
    expect(screen.getByText('Conference Centre')).toBeInTheDocument()
    expect(screen.getByText('Our Conference')).toBeInTheDocument()
  })

  it('renders view more details button', () => {
    render(<ParallaxConference />)
    expect(screen.getByText('View more details')).toBeInTheDocument()
  })
})

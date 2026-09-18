import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AboutVideo } from './AboutVideo'

describe('AboutVideo', () => {
  it('renders video thumbnail with play button', () => {
    render(<AboutVideo />)
    expect(screen.getByAltText('Video thumbnail')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Video thumbnail' })).toBeInTheDocument()
  })

  it('renders all stat counters', () => {
    render(<AboutVideo />)
    expect(screen.getByText('30+')).toBeInTheDocument()
    expect(screen.getByText('300+')).toBeInTheDocument()
    expect(screen.getByText('2000+')).toBeInTheDocument()
    expect(screen.getByText('1500+')).toBeInTheDocument()
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
    expect(screen.getByText('Expert Engineers')).toBeInTheDocument()
    expect(screen.getByText('Number of Employees')).toBeInTheDocument()
    expect(screen.getByText('Number of Golds')).toBeInTheDocument()
  })
})

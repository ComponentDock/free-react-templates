import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, blurb, image, and stat counters', () => {
    render(<About />)
    expect(screen.getByText(/About Us/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /We Are Leaders In Properties/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/lorem ipsum dolor sit amet/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /modern apartment building/i })).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('300')).toBeInTheDocument()
    expect(screen.getByText('150')).toBeInTheDocument()
    expect(screen.getByText(/Projects/i)).toBeInTheDocument()
    expect(screen.getByText(/Clients/i)).toBeInTheDocument()
    expect(screen.getByText(/Team Members/i)).toBeInTheDocument()
  })
})

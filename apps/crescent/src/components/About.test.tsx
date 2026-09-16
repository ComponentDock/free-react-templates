import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders section heading', () => {
    render(<About />)
    expect(screen.getByText('Welcome To Church')).toBeInTheDocument()
  })

  it('renders 3 about cards', () => {
    render(<About />)
    expect(screen.getByText('Our Church')).toBeInTheDocument()
    expect(screen.getByText('Our History')).toBeInTheDocument()
    expect(screen.getByText('Our Sermons')).toBeInTheDocument()
  })

  it('renders Read More links for each card', () => {
    render(<About />)
    const links = screen.getAllByText('Read More')
    expect(links).toHaveLength(3)
  })

  it('has data-testid', () => {
    render(<About />)
    expect(screen.getByTestId('about')).toBeInTheDocument()
  })
})

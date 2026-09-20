import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Speakers } from './Speakers'

describe('Speakers', () => {
  it('renders the heading', () => {
    render(<Speakers />)
    expect(screen.getByText('Conference Speakers')).toBeInTheDocument()
  })

  it('renders four speaker cards', () => {
    render(<Speakers />)
    expect(screen.getByText('Ryan Thompson')).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
  })

  it('renders speaker roles', () => {
    render(<Speakers />)
    expect(screen.getByText('Founder of Wordpress')).toBeInTheDocument()
    expect(screen.getByText('CEO of MarketingPro')).toBeInTheDocument()
  })

  it('renders social links for each speaker', () => {
    render(<Speakers />)
    const fbLinks = screen.getAllByLabelText(/on Facebook/)
    expect(fbLinks).toHaveLength(4)
    const twLinks = screen.getAllByLabelText(/on Twitter/)
    expect(twLinks).toHaveLength(4)
    const liLinks = screen.getAllByLabelText(/on LinkedIn/)
    expect(liLinks).toHaveLength(4)
  })

  it('renders speaker images', () => {
    render(<Speakers />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })
})

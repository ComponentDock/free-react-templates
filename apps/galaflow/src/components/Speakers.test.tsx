import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Speakers } from './Speakers'

describe('Speakers', () => {
  it('renders the section title', () => {
    render(<Speakers />)
    expect(screen.getByText('Our Speakers')).toBeInTheDocument()
  })

  it('renders all 4 speakers', () => {
    render(<Speakers />)
    expect(screen.getByText('Patricia Stone')).toBeInTheDocument()
    expect(screen.getByText('James Oliver')).toBeInTheDocument()
    expect(screen.getByText('Carla Banks')).toBeInTheDocument()
    expect(screen.getByText('William Smith')).toBeInTheDocument()
  })

  it('renders speaker roles', () => {
    render(<Speakers />)
    expect(screen.getByText('CEO, TechCorp')).toBeInTheDocument()
    expect(screen.getByText('CTO, InnovateLab')).toBeInTheDocument()
  })

  it('renders speaker images', () => {
    render(<Speakers />)
    const images = screen.getAllByAltText(/Patricia Stone|James Oliver|Carla Banks|William Smith/)
    expect(images).toHaveLength(4)
  })

  it('renders social media links for each speaker', () => {
    render(<Speakers />)
    const fbLinks = screen.getAllByLabelText(/on Facebook/)
    expect(fbLinks).toHaveLength(4)
    const twLinks = screen.getAllByLabelText(/on Twitter/)
    expect(twLinks).toHaveLength(4)
    const liLinks = screen.getAllByLabelText(/on LinkedIn/)
    expect(liLinks).toHaveLength(4)
  })

  it('has a landmark section', () => {
    render(<Speakers />)
    expect(document.querySelector('section')).toBeInTheDocument()
  })
})

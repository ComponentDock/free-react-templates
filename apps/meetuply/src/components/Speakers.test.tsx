import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Speakers } from './Speakers'

describe('Speakers', () => {
  it('renders the section title', () => {
    render(<Speakers />)
    expect(screen.getByText('Our Speakers')).toBeInTheDocument()
  })

  it('renders all speaker names', () => {
    render(<Speakers />)
    expect(screen.getByText('John Deo')).toBeInTheDocument()
    expect(screen.getByText('Bruno Ballo')).toBeInTheDocument()
    expect(screen.getByText('Monica Aria')).toBeInTheDocument()
    expect(screen.getByText('Daniel Wood')).toBeInTheDocument()
  })

  it('renders speaker roles', () => {
    render(<Speakers />)
    expect(screen.getByText('Web Developer')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Designer')).toBeInTheDocument()
    expect(screen.getByText('CEO, TechCorp')).toBeInTheDocument()
    expect(screen.getByText('Data Scientist')).toBeInTheDocument()
  })

  it('renders speaker images with alt text', () => {
    render(<Speakers />)
    expect(screen.getAllByRole('img')).toHaveLength(4)
    expect(screen.getByAltText('John Deo')).toBeInTheDocument()
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Speakers } from './Speakers'

describe('Speakers', () => {
  it('renders heading and all 4 speakers', () => {
    render(<Speakers />)
    expect(screen.getByText('Speakers')).toBeInTheDocument()
    expect(screen.getByText('Will Peters')).toBeInTheDocument()
    expect(screen.getByText('Abigail McMillan')).toBeInTheDocument()
    expect(screen.getByText('Jean Keenan')).toBeInTheDocument()
    expect(screen.getByText('Justin Clark')).toBeInTheDocument()
  })

  it('renders speaker descriptions', () => {
    render(<Speakers />)
    expect(screen.getByText('Business Consultant at Google')).toBeInTheDocument()
    expect(screen.getByText('Product Lead at Meta')).toBeInTheDocument()
  })

  it('renders speaker images', () => {
    render(<Speakers />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(4)
  })

  it('renders social icons', () => {
    render(<Speakers />)
    expect(screen.getAllByLabelText('Facebook').length).toBe(4)
    expect(screen.getAllByLabelText('Twitter').length).toBe(4)
    expect(screen.getAllByLabelText('LinkedIn').length).toBe(4)
  })
})

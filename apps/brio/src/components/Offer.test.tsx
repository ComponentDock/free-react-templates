import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Offer } from './Offer'

describe('Offer', () => {
  it('renders heading and description', () => {
    render(<Offer />)
    expect(screen.getByText(/Main/i)).toBeInTheDocument()
    expect(screen.getByText(/Application/i)).toBeInTheDocument()
    expect(screen.getByText(/Features/i)).toBeInTheDocument()
    expect(screen.getByText('Download Free Song For iPod')).toBeInTheDocument()
    expect(screen.getByText(/LCD screens are uniquely modern/i)).toBeInTheDocument()
  })

  it('renders the app screen image', () => {
    render(<Offer />)
    expect(screen.getByAltText('App screen preview')).toBeInTheDocument()
  })
})

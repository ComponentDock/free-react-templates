import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Service } from './Service'

describe('Service', () => {
  it('renders the section heading and three service items', () => {
    render(<Service />)

    expect(screen.getByText('Our Service')).toBeInTheDocument()
    expect(screen.getByText('Modern Equipment')).toBeInTheDocument()
    expect(screen.getByText('Personal Training')).toBeInTheDocument()
    expect(screen.getByText('Safe Environment')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Service />)

    expect(screen.getByText(/Access the latest fitness machines/)).toBeInTheDocument()
    expect(screen.getByText(/Work with certified trainers/)).toBeInTheDocument()
    expect(screen.getByText(/Train with confidence/)).toBeInTheDocument()
  })
})

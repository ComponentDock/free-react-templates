import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Banner } from './Banner'

describe('Banner', () => {
  it('renders the headline', () => {
    render(<Banner />)
    expect(screen.getByText(/registration now to get more deals/i)).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Banner />)
    expect(screen.getByText(/where health, beauty and fitness meet/i)).toBeInTheDocument()
  })

  it('renders the Appointment button', () => {
    render(<Banner />)
    expect(screen.getByText('Appointment')).toBeInTheDocument()
  })

  it('has the services section id', () => {
    const { container } = render(<Banner />)
    expect(container.querySelector('#services')).toBeInTheDocument()
  })
})

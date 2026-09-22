import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Satisfaction } from './Satisfaction'

describe('Satisfaction', () => {
  it('renders the satisfaction heading', () => {
    render(<Satisfaction />)
    expect(
      screen.getByRole('heading', { level: 2, name: /100% satisfaction guaranteed/i }),
    ).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Satisfaction />)
    expect(screen.getByText(/almost before we knew it/i)).toBeInTheDocument()
  })

  it('renders the Make an Appointment button', () => {
    render(<Satisfaction />)
    expect(screen.getByRole('link', { name: 'Make an Appointment' })).toBeInTheDocument()
  })

  it('renders the satisfaction image', () => {
    render(<Satisfaction />)
    expect(screen.getByRole('img', { name: /satisfied client/i })).toBeInTheDocument()
  })
})

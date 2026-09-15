import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Donations } from './Donations'

describe('Donations', () => {
  it('shows donation title and progress details', () => {
    render(<Donations />)
    expect(
      screen.getByRole('heading', { name: /help children get an education/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('70%')).toBeInTheDocument()
    expect(screen.getByText(/\$5,000/)).toBeInTheDocument()
    expect(screen.getByText(/\$7,100/)).toBeInTheDocument()
  })

  it('shows donate now button', () => {
    render(<Donations />)
    expect(screen.getByRole('link', { name: /donate now/i })).toBeInTheDocument()
  })

  it('shows donation caller and category info', () => {
    render(<Donations />)
    expect(screen.getByText(/John Connor/)).toBeInTheDocument()
    expect(screen.getByText(/Education, Children/)).toBeInTheDocument()
  })
})

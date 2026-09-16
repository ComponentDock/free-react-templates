import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders opening hours', () => {
    render(<TopBar />)
    expect(screen.getByText(/Opening Hours/)).toBeInTheDocument()
  })

  it('renders email and phone', () => {
    render(<TopBar />)
    expect(screen.getByText(/info@componentdock.com/)).toBeInTheDocument()
    expect(screen.getByText(/\+12 345 678 910/)).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
  })

  it('has correct data-testid', () => {
    render(<TopBar />)
    expect(screen.getByTestId('top-bar')).toBeInTheDocument()
  })
})

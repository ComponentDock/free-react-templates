import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'
import { describe, it, expect } from 'vitest'

describe('TopBar', () => {
  it('renders phone number and email', () => {
    render(<TopBar />)
    expect(screen.getByText(/Phone no/)).toBeInTheDocument()
    expect(screen.getByText(/\+00 1234 567/)).toBeInTheDocument()
    expect(screen.getByText(/emailsample@email.com/)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
  })
})

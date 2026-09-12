import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders phone number and email', () => {
    render(<TopBar />)
    expect(screen.getByText(/Phone/)).toBeInTheDocument()
    expect(screen.getByText('+00 1234 567')).toBeInTheDocument()
    expect(screen.getByText(/Email/)).toBeInTheDocument()
    expect(screen.getByText('email@example.com')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Facebook')).toHaveAttribute('href', '#')
    expect(screen.getByLabelText('Twitter')).toHaveAttribute('href', '#')
    expect(screen.getByLabelText('Instagram')).toHaveAttribute('href', '#')
    expect(screen.getByLabelText('Dribbble')).toHaveAttribute('href', '#')
  })
})

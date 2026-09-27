import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeaderBar } from './HeaderBar'

describe('HeaderBar', () => {
  it('renders phone, email and address', () => {
    render(<HeaderBar />)
    expect(screen.getByText('+10 367 267 2678')).toBeInTheDocument()
    expect(screen.getByText('info@homeward.com')).toBeInTheDocument()
    expect(screen.getByText(/200, A-block, Green road, USA/)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<HeaderBar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
  })

  it('renders login and register links', () => {
    render(<HeaderBar />)
    expect(screen.getByRole('link', { name: /Login/i })).toHaveAttribute('href', '#login')
    expect(screen.getByRole('link', { name: /Register/i })).toHaveAttribute('href', '#register')
  })
})

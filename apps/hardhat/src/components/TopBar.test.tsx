import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders phone number, email, and hours', () => {
    render(<TopBar />)

    expect(screen.getByText('+123 1234-567-8901')).toBeInTheDocument()
    expect(screen.getByText('info@domain.com')).toBeInTheDocument()
    expect(screen.getByText(/Mon-Sat 8:00-17:30/)).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<TopBar />)

    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })
})

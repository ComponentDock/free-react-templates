import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RegistrationBanner } from './RegistrationBanner'

describe('RegistrationBanner', () => {
  it('renders the heading', () => {
    render(<RegistrationBanner />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Register for Free Today')
  })

  it('renders the description', () => {
    render(<RegistrationBanner />)
    expect(screen.getByText(/Start your learning journey with Uniwell/)).toBeInTheDocument()
  })

  it('renders the Get Started button', () => {
    render(<RegistrationBanner />)
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })

  it('Get Started button links to register', () => {
    render(<RegistrationBanner />)
    const link = screen.getByText('Get Started')
    expect(link).toHaveAttribute('href', '#register')
  })
})

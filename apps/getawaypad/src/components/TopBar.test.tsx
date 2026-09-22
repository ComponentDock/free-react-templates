import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('displays phone number and email', () => {
    render(<TopBar />)
    expect(screen.getByText('Phone no:')).toBeInTheDocument()
    expect(screen.getByText('+00 1234 567')).toBeInTheDocument()
    expect(screen.getByText('email us:')).toBeInTheDocument()
    expect(screen.getByText('emailsample@email.com')).toBeInTheDocument()
  })

  it('renders social media icons', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })
})

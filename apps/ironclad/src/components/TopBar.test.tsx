import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders the email address', () => {
    render(<TopBar />)
    expect(screen.getByText('info@ironclad.com')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders the Inquire Now CTA button', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: /inquire now/i })).toBeInTheDocument()
  })
})

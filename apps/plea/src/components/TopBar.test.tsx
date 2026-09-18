import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders phone number', () => {
    render(<TopBar />)
    expect(screen.getByText('+00 123 456 7')).toBeInTheDocument()
  })

  it('renders email address', () => {
    render(<TopBar />)
    expect(screen.getByText('youremail@email.com')).toBeInTheDocument()
  })

  it('links phone to tel:', () => {
    render(<TopBar />)
    const link = screen.getByText('+00 123 456 7').closest('a')
    expect(link).toHaveAttribute('href', 'tel:+001234567')
  })

  it('links email to mailto:', () => {
    render(<TopBar />)
    const link = screen.getByText('youremail@email.com').closest('a')
    expect(link).toHaveAttribute('href', 'mailto:youremail@email.com')
  })

  it('renders social media links with correct labels', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
  })

  it('social links open in new tab', () => {
    render(<TopBar />)
    const fb = screen.getByLabelText('Facebook')
    expect(fb).toHaveAttribute('target', '_blank')
    expect(fb).toHaveAttribute('rel', 'noopener noreferrer')
  })
})

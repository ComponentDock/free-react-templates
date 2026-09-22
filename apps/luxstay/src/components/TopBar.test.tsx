import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders the site URL', () => {
    render(<TopBar />)
    expect(screen.getByText('luxstay.com')).toBeInTheDocument()
  })

  it('renders the phone number', () => {
    render(<TopBar />)
    expect(screen.getByText('+1 234 567 890')).toBeInTheDocument()
  })

  it('renders social icon links', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
  })

  it('has a link to the phone number', () => {
    render(<TopBar />)
    const link = screen.getByText('+1 234 567 890').closest('a')
    expect(link).toHaveAttribute('href', 'tel:+1234567890')
  })
})

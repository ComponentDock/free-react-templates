import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders phone number and email', () => {
    render(<TopBar />)
    expect(screen.getByText('+00 1234 567')).toBeInTheDocument()
    expect(screen.getByText('youremail@email.com')).toBeInTheDocument()
  })

  it('renders social media icons', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
  })

  it('has correct links for phone and email', () => {
    render(<TopBar />)
    expect(screen.getByText('+00 1234 567').closest('a')).toHaveAttribute('href', 'tel:+001234567')
    expect(screen.getByText('youremail@email.com').closest('a')).toHaveAttribute(
      'href',
      'mailto:youremail@email.com',
    )
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders social media icons', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders phone and email contact info', () => {
    render(<TopBar />)
    expect(screen.getByText('+1 (123) 456-7890')).toBeInTheDocument()
    expect(screen.getByText('info@dictum.com')).toBeInTheDocument()
  })

  it('has correct link targets', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Facebook').closest('a')).toHaveAttribute('href', '#')
    expect(screen.getByText('+1 (123) 456-7890').closest('a')).toHaveAttribute(
      'href',
      'tel:+11234567890',
    )
    expect(screen.getByText('info@dictum.com').closest('a')).toHaveAttribute(
      'href',
      'mailto:info@dictum.com',
    )
  })
})

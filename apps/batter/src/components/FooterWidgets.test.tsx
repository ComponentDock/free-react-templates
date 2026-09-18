import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FooterWidgets } from './FooterWidgets'

describe('FooterWidgets', () => {
  it('renders all three widget sections', () => {
    render(<FooterWidgets />)
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Email Address')).toBeInTheDocument()
    expect(screen.getByText('Phone Number')).toBeInTheDocument()
  })

  it('renders contact details', () => {
    render(<FooterWidgets />)
    expect(screen.getByText(/56\/8, panthapath/)).toBeInTheDocument()
    expect(screen.getByText('info@batter.com')).toHaveAttribute('href', 'mailto:info@batter.com')
    expect(screen.getByText('support@batter.com')).toHaveAttribute(
      'href',
      'mailto:support@batter.com',
    )
    expect(screen.getByText('012 4562 982 3612')).toHaveAttribute('href', 'tel:1545')
    expect(screen.getByText('012 6321 956 4587')).toHaveAttribute('href', 'tel:54512')
  })
})

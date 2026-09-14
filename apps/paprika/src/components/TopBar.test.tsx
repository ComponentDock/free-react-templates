import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders phone number and email', () => {
    render(<TopBar />)
    expect(screen.getByText('+1 (168) 314 5016')).toBeInTheDocument()
    expect(screen.getByText('info@paprika.com')).toBeInTheDocument()
  })

  it('renders Book a Table and Book an Event buttons', () => {
    render(<TopBar />)
    expect(screen.getByText('Book a Table')).toBeInTheDocument()
    expect(screen.getByText('Book an Event')).toBeInTheDocument()
  })

  it('links to correct sections', () => {
    render(<TopBar />)
    expect(screen.getByText('Book a Table').closest('a')).toHaveAttribute('href', '#booking')
    expect(screen.getByText('Book an Event').closest('a')).toHaveAttribute('href', '#events')
  })
})

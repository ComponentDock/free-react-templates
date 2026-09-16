import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders contact info', () => {
    render(<TopBar />)
    expect(screen.getByText('+1 (234) 567-8900')).toBeInTheDocument()
    expect(screen.getByText('2811 City Street, New York, NY 10001')).toBeInTheDocument()
    expect(screen.getByText('Mon – Fri: 8am – 7pm')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
  })
})

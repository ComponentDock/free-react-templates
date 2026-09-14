import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders social icons', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Behance')).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<TopBar />)
    expect(screen.getByText('+953 012 3654 896')).toBeInTheDocument()
    expect(screen.getByText('hello@renovo.com')).toBeInTheDocument()
  })

  it('has correct phone link', () => {
    render(<TopBar />)
    const phone = screen.getByText('+953 012 3654 896')
    expect(phone).toHaveAttribute('href', 'tel:+9530123654896')
  })

  it('has correct email link', () => {
    render(<TopBar />)
    const email = screen.getByText('hello@renovo.com')
    expect(email).toHaveAttribute('href', 'mailto:hello@renovo.com')
  })
})

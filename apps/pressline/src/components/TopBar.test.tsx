import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders contact info and social links', () => {
    render(<TopBar />)
    expect(screen.getByText('info@pressline.dev')).toBeInTheDocument()
    expect(screen.getByText('+1 (234) 567-890')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
  })

  it('renders email and phone as links', () => {
    render(<TopBar />)
    const email = screen.getByText('info@pressline.dev')
    expect(email.closest('a')).toHaveAttribute('href', 'mailto:info@pressline.dev')
    const phone = screen.getByText('+1 (234) 567-890')
    expect(phone.closest('a')).toHaveAttribute('href', 'tel:+1234567890')
  })
})

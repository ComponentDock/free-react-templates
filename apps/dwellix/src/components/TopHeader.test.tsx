import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopHeader } from './TopHeader'

describe('TopHeader', () => {
  it('renders email and phone', () => {
    render(<TopHeader />)
    expect(screen.getByText('info@componentdock.com')).toBeInTheDocument()
    expect(screen.getByText('(12) 345 6789')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<TopHeader />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('has clickable links', () => {
    render(<TopHeader />)
    const emailLink = screen.getByText('info@componentdock.com')
    expect(emailLink.closest('a')).toBeTruthy()
  })
})

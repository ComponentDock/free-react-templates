import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { GoldButton, GoldButtonLink } from './GoldButton'

describe('GoldButton', () => {
  it('renders a gold-bordered button with its label and arrow icon', () => {
    render(<GoldButton>Check Now</GoldButton>)
    const button = screen.getByRole('button', { name: 'Check Now' })
    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveClass('border-gold-border')
    expect(button.querySelector('svg')).toBeInTheDocument()
  })

  it('renders a gold-bordered link with its label and arrow icon', () => {
    render(<GoldButtonLink href="#rooms">Visit Center</GoldButtonLink>)
    const link = screen.getByRole('link', { name: 'Visit Center' })
    expect(link).toHaveAttribute('href', '#rooms')
    expect(link).toHaveClass('border-gold-border')
    expect(link.querySelector('svg')).toBeInTheDocument()
  })
})

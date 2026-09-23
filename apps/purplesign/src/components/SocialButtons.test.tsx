import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialButtons } from './SocialButtons'

describe('SocialButtons', () => {
  it('renders Facebook and Twitter buttons', () => {
    render(<SocialButtons />)
    expect(screen.getByRole('button', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /twitter/i })).toBeInTheDocument()
  })

  it('renders two buttons side by side', () => {
    render(<SocialButtons />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
  })
})

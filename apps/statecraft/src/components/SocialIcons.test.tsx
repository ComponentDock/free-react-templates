import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialIcons } from './SocialIcons'

describe('SocialIcons', () => {
  it('renders four brand icon links with accessible labels', () => {
    render(<SocialIcons />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'YouTube' })).toBeInTheDocument()
  })
})

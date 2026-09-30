import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import UserProfile from './UserProfile'

describe('UserProfile', () => {
  it('renders user name', () => {
    render(<UserProfile name="Dan Smith" avatarSeed="test-user" />)
    expect(screen.getByText('Dan Smith')).toBeInTheDocument()
  })

  it('renders avatar with correct seed', () => {
    render(<UserProfile name="Jane" avatarSeed="jane-avatar" />)
    const img = screen.getByRole('img', { name: /avatar for jane/i })
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/jane-avatar/40/40')
  })
})

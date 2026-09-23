import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Avatar } from './Avatar'

describe('Avatar', () => {
  it('renders the avatar image', () => {
    render(<Avatar />)
    const img = screen.getByRole('img', { name: /user avatar/i })
    expect(img).toBeInTheDocument()
  })

  it('has a circular shape', () => {
    render(<Avatar />)
    const img = screen.getByRole('img', { name: /user avatar/i })
    expect(img.className).toContain('rounded-full')
  })

  it('is 100px by 100px', () => {
    render(<Avatar />)
    const img = screen.getByRole('img', { name: /user avatar/i })
    expect(img.className).toContain('h-[100px]')
    expect(img.className).toContain('w-[100px]')
  })

  it('has a background image from picsum', () => {
    render(<Avatar />)
    const img = screen.getByRole('img', { name: /user avatar/i })
    expect(img.style.backgroundImage).toContain('picsum.photos')
  })
})

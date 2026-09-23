import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialBar } from './SocialBar'

describe('SocialBar', () => {
  it('renders all social media links', () => {
    render(<SocialBar />)
    expect(screen.getByLabelText('Facebook')).toBeDefined()
    expect(screen.getByLabelText('Twitter')).toBeDefined()
    expect(screen.getByLabelText('Instagram')).toBeDefined()
    expect(screen.getByLabelText('LinkedIn')).toBeDefined()
    expect(screen.getByLabelText('YouTube')).toBeDefined()
  })

  it('renders five social links', () => {
    const { container } = render(<SocialBar />)
    const links = container.querySelectorAll('a')
    expect(links.length).toBe(5)
  })
})

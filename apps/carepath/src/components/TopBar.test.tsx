import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders email and location links', () => {
    render(<TopBar />)

    expect(screen.getByRole('link', { name: /medical@example.com/i })).toHaveAttribute(
      'href',
      'mailto:medical@example.com',
    )
    expect(screen.getByRole('link', { name: /find our location/i })).toBeInTheDocument()
  })

  it('renders social media icons', () => {
    render(<TopBar />)

    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /vimeo/i })).toBeInTheDocument()
  })
})

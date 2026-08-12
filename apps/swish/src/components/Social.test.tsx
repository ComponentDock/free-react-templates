import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Social } from './Social'

describe('Social', () => {
  it('renders six instagram tile links', () => {
    render(<Social />)

    expect(screen.getByText('Social Media')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Follow Us Instagram' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Instagram post' }).length).toBe(6)
  })
})

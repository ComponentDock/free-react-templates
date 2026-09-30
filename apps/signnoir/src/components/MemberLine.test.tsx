import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemberLine } from './MemberLine'

describe('MemberLine', () => {
  it('renders the member message with a violet Sign In link', () => {
    render(<MemberLine />)
    expect(screen.getByText(/i'm already a member!/i)).toBeInTheDocument()
    const link = screen.getByRole('link', { name: /^sign in$/i })
    expect(link).toHaveAttribute('href', '#signin')
    expect(link.className).toContain('text-accent')
  })
})

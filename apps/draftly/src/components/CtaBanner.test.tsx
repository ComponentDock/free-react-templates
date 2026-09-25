import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders heading', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/Have a project on your mind/)).toBeInTheDocument()
  })

  it('renders Contact me button linking to contact section', () => {
    render(<CtaBanner />)
    const link = screen.getByRole('link', { name: /contact me/i })
    expect(link).toHaveAttribute('href', '#contact')
  })
})

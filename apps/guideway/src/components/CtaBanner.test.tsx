import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the heading', () => {
    render(<CtaBanner />)
    expect(screen.getByText('You Always Get the Best Guidance')).toBeInTheDocument()
  })

  it('renders the Request Quote button', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('link', { name: /request quote/i })).toHaveAttribute('href', '#contact')
  })
})

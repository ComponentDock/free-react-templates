import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CallToAction } from './CallToAction'

describe('CallToAction', () => {
  it('renders the heading and a Contact Us button', () => {
    render(<CallToAction />)

    expect(
      screen.getByRole('heading', { name: 'Are you Ready to have a Talk?' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
  })
})

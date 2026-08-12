import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CallToAction } from './CallToAction'

describe('CallToAction', () => {
  it('shows the headline, copy and dark Join Now button', () => {
    render(<CallToAction />)
    expect(screen.getByRole('heading', { name: 'Come & Train With Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Join Now' })).toBeInTheDocument()
  })
})

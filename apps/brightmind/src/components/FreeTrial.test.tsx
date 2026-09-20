import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FreeTrial } from './FreeTrial'

describe('FreeTrial', () => {
  it('renders the heading and join button', () => {
    render(<FreeTrial />)
    expect(screen.getByRole('heading', { name: /Try our free trial course/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Join now!/i })).toHaveAttribute('href', '#apply')
  })
})

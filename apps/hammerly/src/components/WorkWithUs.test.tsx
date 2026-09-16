import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WorkWithUs } from './WorkWithUs'

describe('WorkWithUs', () => {
  it('renders heading and CTA', () => {
    render(<WorkWithUs />)
    expect(screen.getByText('Work With Us')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /get a quote/i })).toBeInTheDocument()
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading and all three services', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument()
    expect(screen.getByText('Legal Consultation')).toBeInTheDocument()
    expect(screen.getByText('Trial Representation')).toBeInTheDocument()
    expect(screen.getByText('Case Review')).toBeInTheDocument()
  })
})

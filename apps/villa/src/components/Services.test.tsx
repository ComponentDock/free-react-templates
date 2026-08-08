import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading and service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Our Offred Services/i })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: /Reasons To Choose Notebook/i })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: /Learn More/i })).toHaveLength(2)
  })
})

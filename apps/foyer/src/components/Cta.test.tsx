import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the quotation invitation and button', () => {
    render(<Cta />)
    expect(screen.getByText(/quality and affordable interior design/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Request quote now/i })).toBeInTheDocument()
  })
})

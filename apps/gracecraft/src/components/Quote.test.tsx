import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Quote } from './Quote'

describe('Quote', () => {
  it('displays the blockquote and attribution', () => {
    render(<Quote />)
    expect(screen.getByText(/Wherever the bishop appears/)).toBeInTheDocument()
    expect(screen.getByText(/Ignatius of Antioch/)).toBeInTheDocument()
  })
})

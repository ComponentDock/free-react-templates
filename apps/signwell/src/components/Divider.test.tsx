import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Divider } from './Divider'

describe('Divider', () => {
  it('renders the "or" text', () => {
    render(<Divider />)
    expect(screen.getByText('or')).toBeInTheDocument()
  })
})

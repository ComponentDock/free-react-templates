import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the features heading and description', () => {
    render(<Features />)
    expect(screen.getByText('Basic Revolutions')).toBeInTheDocument()
    expect(screen.getByText('Basic & Common Repairs')).toBeInTheDocument()
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Benefits } from './Benefits'

describe('Benefits', () => {
  it('renders the heading', () => {
    render(<Benefits />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Big Benefits for Small Business',
    )
  })

  it('renders the subheading', () => {
    render(<Benefits />)
    expect(screen.getByText('All in One Place')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Benefits />)
    expect(screen.getByText(/end-to-end design solutions/)).toBeInTheDocument()
  })
})

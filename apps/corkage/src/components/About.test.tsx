import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows the about heading and descriptive text', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Sed ut perspiciatis/i)
    expect(screen.getByText(/Omnis iste natus error/i)).toBeInTheDocument()
  })
})

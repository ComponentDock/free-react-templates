import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { History } from './History'

describe('History', () => {
  it('renders the section heading and content', () => {
    render(<History />)
    expect(screen.getByText(/Our History/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Where The Food/i })).toBeInTheDocument()
    expect(screen.getByText(/Satisfying people hunger/i)).toBeInTheDocument()
  })

  it('renders the Read More button', () => {
    render(<History />)
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument()
  })

  it('renders the background image', () => {
    render(<History />)
    expect(screen.getByRole('img', { name: /Restaurant interior/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})

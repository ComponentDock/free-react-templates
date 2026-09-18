import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageTitle } from './PageTitle'

describe('PageTitle', () => {
  it('renders the page title heading', () => {
    render(<PageTitle />)
    expect(screen.getByRole('heading', { name: /contact form #07/i })).toBeInTheDocument()
  })

  it('renders with serif font styling', () => {
    const { container } = render(<PageTitle />)
    const heading = container.querySelector('h1')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveClass('text-center')
  })
})

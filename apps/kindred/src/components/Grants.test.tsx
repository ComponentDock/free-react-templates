import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Grants } from './Grants'

describe('Grants', () => {
  it('renders the heading and featured cause panel', () => {
    render(<Grants />)
    expect(screen.getByRole('heading', { name: 'Foundation Grants Projects' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Gifts into Service Project that Change' }),
    ).toBeInTheDocument()
    expect(screen.getByText('65%')).toBeInTheDocument()
    expect(screen.getByText(/Collected \$380,000/)).toBeInTheDocument()
    expect(screen.getByText(/Goal \$600,000/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Donate now' })).toBeInTheDocument()
  })

  it('renders a striped progress bar filled to 65%', () => {
    const { container } = render(<Grants />)
    const fill = container.querySelector('[data-testid="progress-fill"]')
    expect(fill).not.toBeNull()
    expect(fill).toHaveStyle('width: 65%')
  })
})

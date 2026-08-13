import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TestimonyCarousel } from './TestimonyCarousel'

describe('TestimonyCarousel', () => {
  it('shows the white heading pair and the first testimony', () => {
    render(<TestimonyCarousel />)

    expect(screen.getByText('Testimony')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Happy Customer')
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText('Arthur Browner')).toBeInTheDocument()
    expect(screen.getByText('Customer')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Portrait of Arthur Browner' })).toBeInTheDocument()
  })

  it('switches testimonies via the dots and marks the active dot', async () => {
    const user = userEvent.setup()
    render(<TestimonyCarousel />)

    const dots = screen.getAllByRole('button', { name: /Show testimony/ })
    expect(dots).toHaveLength(5)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')

    await user.click(screen.getByRole('button', { name: 'Show testimony 3' }))
    expect(dots[2]).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('img', { name: 'Portrait of Arthur Browner' })).toBeInTheDocument()
  })
})

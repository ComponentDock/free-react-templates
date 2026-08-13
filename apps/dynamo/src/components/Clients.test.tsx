import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Clients } from './Clients'

describe('Clients', () => {
  it('renders the heading and a carousel of five client logos', () => {
    const { container } = render(<Clients />)
    expect(
      screen.getByRole('heading', {
        name: 'A group of productive enterprises that produce or supply Goods, Services, or Sources of Income',
      }),
    ).toBeInTheDocument()
    const logos = container.querySelectorAll('[data-client-logo]')
    expect(logos).toHaveLength(5)
  })

  it('advances the logo carousel with navigation controls', async () => {
    const user = userEvent.setup()
    render(<Clients />)
    const next = screen.getByRole('button', { name: /next logos/i })
    expect(next).toBeInTheDocument()
    await user.click(next)
    const prev = screen.getByRole('button', { name: /previous logos/i })
    expect(prev).toBeInTheDocument()
    await user.click(prev)
  })
})

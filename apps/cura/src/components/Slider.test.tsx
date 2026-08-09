import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Slider } from './Slider'

describe('Slider', () => {
  it('shows the first slide by default', () => {
    render(<Slider />)
    expect(
      screen.getByRole('heading', { name: 'We Accept Most Major Insurance Plans' }),
    ).toBeInTheDocument()
  })

  it('changes the visible slide when a dot is activated', async () => {
    const user = userEvent.setup()
    render(<Slider />)
    expect(screen.getByRole('button', { name: 'Show slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    await user.click(screen.getByRole('button', { name: 'Show slide 3' }))
    expect(screen.getByRole('heading', { name: 'Same-Day Appointments' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Show slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Show slide 1' })).toHaveAttribute(
      'aria-current',
      'false',
    )
  })

  it('renders one dot per slide', () => {
    render(<Slider />)
    expect(screen.getAllByRole('button', { name: /^Show slide/ }).length).toBe(4)
  })
})

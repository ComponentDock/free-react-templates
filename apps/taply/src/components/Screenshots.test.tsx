import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Screenshots } from './Screenshots'
import { screenshots } from '../data'

describe('Screenshots', () => {
  it('shows the App Screenshots heading and the first screenshot', () => {
    const { container } = render(<Screenshots />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('App Screenshots')
    const visible = container.querySelectorAll('img:not(.hidden)')
    expect(visible).toHaveLength(1)
  })

  it('navigates screenshots with the arrows and dots', async () => {
    const user = userEvent.setup()
    render(<Screenshots />)

    await user.click(screen.getByRole('button', { name: 'Next screenshot' }))
    expect(screen.getByRole('button', { name: 'Show screenshot 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Previous screenshot' }))
    expect(screen.getByRole('button', { name: 'Show screenshot 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(screen.getByRole('button', { name: `Show screenshot ${screenshots.length}` }))
    expect(
      screen.getByRole('button', { name: `Show screenshot ${screenshots.length}` }),
    ).toHaveAttribute('aria-current', 'true')
  })
})

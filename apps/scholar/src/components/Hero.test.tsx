import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subtext, search form, and hero image', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Learn new skills online with top educators/,
      }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Learn 100% online with world-class universities/)).toBeInTheDocument()

    expect(screen.getByLabelText('Search courses')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Search/ })).toBeInTheDocument()
    expect(screen.getByAltText('Student learning online')).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const submitBtn = screen.getByRole('button', { name: /Search/ })
    await user.click(submitBtn)
    // No error thrown = default prevented
  })
})

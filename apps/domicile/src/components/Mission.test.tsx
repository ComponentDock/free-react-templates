import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Mission } from './Mission'

describe('Mission', () => {
  it('renders the first mission item', () => {
    render(<Mission />)
    expect(screen.getByText('Road to Success')).toBeInTheDocument()
  })

  it('navigates to the next mission item', async () => {
    const user = userEvent.setup()
    render(<Mission />)

    await user.click(screen.getByLabelText('Next mission item'))
    expect(screen.getByText('About Our Mission')).toBeInTheDocument()
  })

  it('navigates to the previous mission item', async () => {
    const user = userEvent.setup()
    render(<Mission />)

    await user.click(screen.getByLabelText('Previous mission item'))
    expect(screen.getByText('Our Vision')).toBeInTheDocument()
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup()
    render(<Mission />)

    await user.click(screen.getByLabelText('Go to mission item 3'))
    expect(screen.getByText('Our Vision')).toBeInTheDocument()
  })

  it('renders the mission image', () => {
    render(<Mission />)
    expect(screen.getByAltText('Our mission')).toBeInTheDocument()
  })
})

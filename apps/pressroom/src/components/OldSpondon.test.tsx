import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { OldSpondon } from './OldSpondon'
import { OLD_SPONDON } from '../data'

describe('OldSpondon', () => {
  it('renders the heading and first old story', () => {
    render(<OldSpondon />)
    expect(screen.getByRole('heading', { name: 'Old Spondon News - 2020' })).toBeInTheDocument()
    expect(screen.getByText(OLD_SPONDON[0]!.title)).toBeInTheDocument()
    expect(screen.getByText(OLD_SPONDON[0]!.byline)).toBeInTheDocument()
  })

  it('renders dot indicators and jumps to a page', async () => {
    const user = userEvent.setup()
    render(<OldSpondon />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots.length).toBeGreaterThan(1)
    await user.click(dots[dots.length - 1]!)
    expect(screen.getByText(OLD_SPONDON[OLD_SPONDON.length - 1]!.title)).toBeInTheDocument()
  })
})

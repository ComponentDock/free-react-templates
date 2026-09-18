import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sermon } from './Sermon'

describe('Sermon', () => {
  it('renders heading and sermon cards', () => {
    render(<Sermon />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Sermon/i)
    for (const title of ['Walking in Grace', 'The Power of Prayer', 'Faith Over Fear']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('has play buttons for each sermon', async () => {
    const user = userEvent.setup()
    render(<Sermon />)
    const playButtons = screen.getAllByRole('button', { name: /Play/i })
    expect(playButtons.length).toBe(3)
    const first = playButtons[0]
    if (first) await user.click(first)
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    const heading = screen.getByRole('heading', { level: 2, name: /About/ })
    expect(heading).toHaveTextContent(/About.*Our Company/)
  })

  it('shows the History tab content by default', () => {
    render(<About />)
    expect(screen.getByRole('tabpanel')).toHaveTextContent(/Founded with a vision/)
  })

  it('switches to Mission & Vision tab on click', async () => {
    const user = userEvent.setup()
    render(<About />)

    const missionTab = screen.getByRole('tab', { name: /Mission & Vision/i })
    await user.click(missionTab)

    expect(screen.getByRole('tabpanel')).toHaveTextContent(/mission is to empower/)
  })

  it('switches back to History tab', async () => {
    const user = userEvent.setup()
    render(<About />)

    const missionTab = screen.getByRole('tab', { name: /Mission & Vision/i })
    await user.click(missionTab)

    const historyTab = screen.getByRole('tab', { name: /^History$/i })
    await user.click(historyTab)

    expect(screen.getByRole('tabpanel')).toHaveTextContent(/Founded with a vision/)
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /about our company/i })).toBeInTheDocument()
  })
})

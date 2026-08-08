import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section heading and four project cards', () => {
    render(<Portfolio />)
    expect(screen.getByText('OUR PORTFOLIO')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Latest Completed Projects/ }),
    ).toBeInTheDocument()
    const cards = screen.getAllByRole('heading', { level: 3, name: /Pure Bedroom Architecture/ })
    expect(cards).toHaveLength(4)
    expect(screen.getAllByText('December, 2018')).toHaveLength(4)
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(4)
  })

  it('loads more projects when the button is pressed', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    expect(
      screen.queryByRole('heading', { level: 3, name: /Lakeside Villa/ }),
    ).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Load More Projects' }))
    expect(screen.getByRole('heading', { level: 3, name: /Lakeside Villa/ })).toBeInTheDocument()
  })
})

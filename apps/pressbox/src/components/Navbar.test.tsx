import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name and category links', () => {
    render(<Navbar />)

    expect(screen.getByText('Pressbox')).toBeInTheDocument()
    expect(screen.getByText('24H')).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Main' })
    const categories = ['Home', 'News', 'Sport', 'Lifestyle', 'Fashion', 'Music', 'Business']
    for (const cat of categories) {
      expect(nav.textContent).toContain(cat)
    }
  })

  it('toggles the search form when search button is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const searchBtn = screen.getByRole('button', { name: 'Search' })
    expect(screen.queryByRole('searchbox')).not.toBeInTheDocument()

    await user.click(searchBtn)
    expect(screen.getByRole('searchbox', { name: 'Search articles' })).toBeInTheDocument()

    await user.click(searchBtn)
    expect(screen.queryByRole('searchbox')).not.toBeInTheDocument()
  })
})

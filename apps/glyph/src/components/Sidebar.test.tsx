import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('renders the search widget with an input and submit button', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)

    expect(screen.getByRole('heading', { name: 'Search' })).toBeInTheDocument()
    const search = screen.getByRole('searchbox', { name: 'Search the blog' })
    expect(search).toHaveAttribute('placeholder', 'Search Keyword')

    await user.type(search, 'telescope')
    await user.click(screen.getByRole('button', { name: 'Submit search' }))
    expect(screen.getByRole('searchbox', { name: 'Search the blog' })).toHaveValue('telescope')
  })

  it('renders the author widget with avatar, name, role, bio and socials', () => {
    render(<Sidebar />)

    expect(screen.getByRole('heading', { name: 'About author' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Charlie Barber' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Charlie Barber' })).toBeInTheDocument()
    expect(screen.getByText('Senior blog writer')).toBeInTheDocument()
    for (const label of ['Facebook', 'Twitter', 'GitHub', 'Behance']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders four popular posts with thumbnails and relative times', () => {
    render(<Sidebar />)

    expect(screen.getByRole('heading', { name: 'Popular Posts' })).toBeInTheDocument()
    const popularSection = screen.getByRole('region', { name: 'Popular Posts' })
    expect(within(popularSection).getAllByRole('link')).toHaveLength(4)
    expect(popularSection.querySelectorAll('img')).toHaveLength(4)
    expect(within(popularSection).getByText('Space The Final Frontier')).toBeInTheDocument()
    expect(within(popularSection).getAllByText(/Hours ago/)).toHaveLength(4)
  })

  it('renders the newsletter widget and shows a success state on valid submit', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)

    const newsletterSection = screen.getByRole('region', { name: 'Newsletter' })
    const input = within(newsletterSection).getByRole('textbox', { name: 'Email address' })
    await user.type(input, 'reader@example.com')
    await user.click(within(newsletterSection).getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText('Thanks for subscribing! Please check your inbox.')).toBeInTheDocument()
  })

  it('lists the post categories with counts', () => {
    render(<Sidebar />)

    expect(screen.getByRole('heading', { name: 'Post Categories' })).toBeInTheDocument()
    const categoriesSection = screen.getByRole('region', { name: 'Post Categories' })
    for (const [label, count] of [
      ['Technology', '37'],
      ['Lifestyle', '24'],
      ['Fashion', '59'],
      ['Art', '29'],
      ['Food', '15'],
      ['Architecture', '09'],
      ['Adventure', '44'],
    ] as const) {
      const link = within(categoriesSection).getByRole('link', { name: new RegExp(label) })
      expect(link).toHaveTextContent(label)
      expect(link).toHaveTextContent(count)
    }
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('renders the search box with an orange search button', () => {
    render(<Sidebar />)
    expect(screen.getByRole('search')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter any key to search...')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('renders the About Me widget with photo, intro and four social icons', () => {
    render(<Sidebar />)
    expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Steph' })).toBeInTheDocument()
    expect(screen.getByText(/Hi! My Name is/)).toBeInTheDocument()
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'Google']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders four distinct recent post entries with dates', () => {
    render(<Sidebar />)
    const titles = screen
      .getAllByRole('heading', { level: 4 })
      .map((heading) => heading.textContent)
    expect(titles).toHaveLength(4)
    expect(new Set(titles).size).toBe(4)
    expect(screen.getByText('January 21, 2018')).toBeInTheDocument()
  })

  it('renders the Categories widget with four dashed-divider links', () => {
    render(<Sidebar />)
    const widget = screen.getByRole('heading', { name: 'Categories' }).closest('div')!
    expect(within(widget).getAllByRole('link')).toHaveLength(4)
  })

  it('renders the Video Post widget with a play button', () => {
    render(<Sidebar />)
    expect(screen.getByRole('heading', { name: 'Video Post' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })

  it('renders the Tags widget with nineteen tag links', () => {
    render(<Sidebar />)
    const widget = screen.getByRole('heading', { name: 'Tags' }).closest('div')!
    const links = within(widget).getAllByRole('link')
    expect(links).toHaveLength(19)
    expect(within(widget).getByRole('link', { name: 'Modeling' })).toBeInTheDocument()
    expect(within(widget).getByRole('link', { name: 'Home' })).toBeInTheDocument()
  })

  it('renders the Gallery widget with eight tiles', () => {
    render(<Sidebar />)
    const widget = screen.getByRole('heading', { name: 'Gallery' }).closest('div')!
    expect(within(widget).getAllByRole('link')).toHaveLength(8)
  })

  it('renders the Blockquote and Paragraph widgets', () => {
    render(<Sidebar />)
    expect(screen.getByRole('heading', { name: 'Blockquote' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Paragraph' })).toBeInTheDocument()
    expect(screen.getByText(/Little Blind Text didn/)).toBeInTheDocument()
    expect(screen.getByText(/A small river named Duden flows/)).toBeInTheDocument()
  })

  it('blocks invalid emails and confirms a valid subscription', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)

    const input = screen.getByPlaceholderText('Enter your email')
    const subscribe = screen.getByRole('button', { name: 'Subscribe' })

    await user.click(subscribe)
    expect(screen.getByRole('alert')).toHaveTextContent('valid email')

    await user.type(input, 'not-an-email')
    await user.click(subscribe)
    expect(screen.getByRole('alert')).toHaveTextContent('valid email')
    expect(input).toHaveAttribute('aria-invalid', 'true')

    await user.clear(input)
    await user.type(input, 'steph@example.com')
    await user.click(subscribe)
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})

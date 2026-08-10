import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('renders the search widget with placeholder and icon', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    expect(screen.getByPlaceholderText('Type a keyword and hit enter')).toBeInTheDocument()
    const searchButton = screen.getByRole('button', { name: 'Search' })
    expect(searchButton).toBeInTheDocument()
    await user.click(searchButton)
    expect(screen.getByRole('search')).toBeInTheDocument()
  })

  it('lists destinations with counts', () => {
    render(<Sidebar />)
    const widget = screen.getByRole('heading', { name: 'Destination' }).closest('div')!
    for (const label of [
      'Africa',
      'Asia',
      'Australia',
      'Europe',
      'North America',
      'South America',
    ]) {
      expect(within(widget).getByText(label)).toBeInTheDocument()
    }
    expect(within(widget).getByText('(6)')).toBeInTheDocument()
  })

  it('renders three popular articles with thumbs and meta', () => {
    render(<Sidebar />)
    const widget = screen.getByRole('heading', { name: 'Popular Articles' }).closest('div')!
    expect(within(widget).getAllByRole('link')).toHaveLength(3)
    expect(within(widget).getAllByText(/Oct\. 04, 2018/)).toHaveLength(3)
  })

  it('renders the tag cloud with eight bordered tags', () => {
    render(<Sidebar />)
    const widget = screen.getByRole('heading', { name: 'Tag Cloud' }).closest('div')!
    for (const tag of [
      'dish',
      'menu',
      'food',
      'sweet',
      'tasty',
      'delicious',
      'desserts',
      'drinks',
    ]) {
      expect(within(widget).getByRole('link', { name: tag })).toBeInTheDocument()
    }
  })

  it('rejects an invalid email in the newsletter widget', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)

    const input = screen.getByLabelText(/Email address/)
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('confirms a valid subscription', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)

    const input = screen.getByLabelText(/Email address/)
    await user.type(input, 'traveler@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent(/subscribed/i)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('renders archives months and the paragraph widget', () => {
    render(<Sidebar />)
    const widget = screen.getByRole('heading', { name: 'Archives' }).closest('div')!
    expect(within(widget).getByText('September 2018')).toBeInTheDocument()
    expect(within(widget).getByText('April 2018')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Paragraph' })).toBeInTheDocument()
    const paragraph = screen.getByRole('heading', { name: 'Paragraph' }).closest('div')!
    expect(
      within(paragraph).getByText(/Far far away, behind the word mountains/),
    ).toBeInTheDocument()
  })
})

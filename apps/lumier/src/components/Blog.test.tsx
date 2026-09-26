import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the blog heading', () => {
    render(<Blog />)
    expect(screen.getByText('Blog')).toBeInTheDocument()
  })

  it('displays the first page of posts', () => {
    render(<Blog />)
    expect(screen.getByText('My New Photography Has Been Featured in Forbes')).toBeInTheDocument()
    expect(screen.getByText('Behind the Lens: A Journey Through Nature')).toBeInTheDocument()
  })

  it('navigates to the next page via Next button', async () => {
    const user = userEvent.setup()
    render(<Blog />)
    await user.click(screen.getByLabelText('Next page'))
    expect(screen.getByText('Mastering Light: Tips for Portrait Photography')).toBeInTheDocument()
    expect(screen.getByText('Urban Explorations: City Lights at Night')).toBeInTheDocument()
  })

  it('navigates to page 2 via page button', async () => {
    const user = userEvent.setup()
    render(<Blog />)
    await user.click(screen.getByLabelText('Page 2'))
    expect(screen.getByText('Mastering Light: Tips for Portrait Photography')).toBeInTheDocument()
  })

  it('disables previous button on first page', () => {
    render(<Blog />)
    expect(screen.getByLabelText('Previous page')).toBeDisabled()
  })

  it('disables next button on last page', async () => {
    const user = userEvent.setup()
    render(<Blog />)
    await user.click(screen.getByLabelText('Next page'))
    expect(screen.getByLabelText('Next page')).toBeDisabled()
  })

  it('navigates back from page 2', async () => {
    const user = userEvent.setup()
    render(<Blog />)
    await user.click(screen.getByLabelText('Next page'))
    await user.click(screen.getByLabelText('Previous page'))
    expect(screen.getByText('My New Photography Has Been Featured in Forbes')).toBeInTheDocument()
  })

  it('renders post images and author info', () => {
    render(<Blog />)
    expect(screen.getAllByText(/Posted by Ben Jones/).length).toBeGreaterThanOrEqual(1)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(2)
  })

  it('renders post titles as links', () => {
    render(<Blog />)
    const links = screen.getAllByText('My New Photography Has Been Featured in Forbes')
    expect(links.length).toBeGreaterThanOrEqual(1)
  })
})

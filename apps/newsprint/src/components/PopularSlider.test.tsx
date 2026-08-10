import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PopularSlider } from './PopularSlider'
import { popularPosts } from '../data'

describe('PopularSlider', () => {
  it('renders the heading and the first page of post rows with controls', () => {
    render(<PopularSlider />)

    expect(screen.getByRole('heading', { name: 'Most Popular Posts' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Previous posts' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next posts' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: popularPosts[0]!.title })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: popularPosts[1]!.title })).toBeInTheDocument()
  })

  it('pages forward and back through the posts', async () => {
    const user = userEvent.setup()
    render(<PopularSlider />)

    const previous = screen.getByRole('button', { name: 'Previous posts' })
    const next = screen.getByRole('button', { name: 'Next posts' })
    expect(previous).toBeDisabled()

    await user.click(next)
    expect(screen.getByRole('heading', { name: popularPosts[2]!.title })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: popularPosts[3]!.title })).toBeInTheDocument()
    expect(next).toBeDisabled()

    await user.click(previous)
    expect(screen.getByRole('heading', { name: popularPosts[0]!.title })).toBeInTheDocument()
    expect(previous).toBeDisabled()
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'
import {
  adLabel,
  categories,
  newsletterPlaceholder,
  popularPosts,
  socialTiles,
  subscribeLabel,
} from '../data'

describe('Sidebar', () => {
  it('renders the ad placeholder, social tiles, categories, newsletter and popular posts', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    const sidebar = screen.getByRole('complementary', { name: 'Sidebar' })

    expect(within(sidebar).getByText(adLabel)).toBeInTheDocument()

    for (const tile of socialTiles) {
      expect(within(sidebar).getByText(tile.followers)).toBeInTheDocument()
    }

    for (const category of categories) {
      expect(within(sidebar).getAllByText(new RegExp(category.name)).length).toBeGreaterThan(0)
      expect(within(sidebar).getByText(String(category.count))).toBeInTheDocument()
    }

    const input = within(sidebar).getByRole('textbox', { name: /email/i })
    expect(input).toHaveAttribute('placeholder', newsletterPlaceholder)
    await user.type(input, 'reader@example.com')
    await user.click(within(sidebar).getByRole('button', { name: subscribeLabel }))
    expect(input).toHaveValue('reader@example.com')

    for (const post of popularPosts) {
      expect(within(sidebar).getByRole('heading', { name: post.title })).toBeInTheDocument()
    }
  })
})

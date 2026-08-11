import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import {
  documentTitle,
  featuredPost,
  menuCloseLabel,
  menuOpenLabel,
  siteName,
  skipLabel,
} from './data'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe(documentTitle)
  })

  it('composes the rail, sidebar, blog list, and featured image', () => {
    const { container } = render(<App />)

    expect(screen.getByRole('link', { name: skipLabel })).toBeInTheDocument()
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main')
    expect(screen.getByRole('heading', { level: 1, name: siteName })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: featuredPost.title })).toBeInTheDocument()
    expect(container.querySelector('.featured-image')).not.toBeNull()
  })

  it('opens and closes the sidebar through the rail toggle', async () => {
    const { container } = render(<App />)
    const user = userEvent.setup()

    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    expect(container.querySelector('.sidebar')).toHaveClass('translate-x-0')

    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(container.querySelector('.sidebar')).toHaveClass('-translate-x-full')
  })
})

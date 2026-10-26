import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { POSTS } from './data'

describe('App — shell', () => {
  it('stages the feed on the ground at content height, never the viewport', () => {
    const { container } = render(<App />)
    const main = container.querySelector('main') as HTMLElement
    const className = main.getAttribute('class') ?? ''

    expect(className).toContain('bg-ground')
    expect(className).toContain('max-w-[1132px]')
    expect(className).toContain('px-4')
    expect(className).toContain('py-[clamp(28px,5vw,64px)]')
    expect(className).not.toContain('min-h-screen')
    expect(className).not.toContain('h-screen')
  })

  it('lays the posts on the arithmetic auto-fit grid, top aligned and 22 apart', () => {
    const { container } = render(<App />)
    const feed = container.querySelector('main > div') as HTMLElement
    const className = feed.getAttribute('class') ?? ''

    expect(className).toContain(
      'grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))]',
    )
    expect(className).toContain('items-start')
    expect(className).toContain('gap-[22px]')
    expect(className).not.toContain('md:')
    expect(className).not.toContain('lg:')
    expect(feed.children).toHaveLength(2)
  })

  it('is a one-h1, two-h2 outline with the h1 visually hidden', () => {
    render(<App />)

    expect(screen.getAllByRole('heading')).toHaveLength(3)
    const title = screen.getByRole('heading', { level: 1 })
    expect(title).toHaveTextContent('Community feed')
    expect(title.className).toContain('sr-only')

    const authors = screen.getAllByRole('heading', { level: 2 })
    expect(authors.map((node) => node.textContent)).toEqual([
      'Noa Tamura @noatrails',
      'Leo Brandão @leobuilds',
    ])
  })

  it('carries two articles, two hidden forms, ten buttons and one image', () => {
    const { container } = render(<App />)
    const articles = screen.getAllByRole('article')

    expect(articles).toHaveLength(2)
    expect(container.querySelectorAll('form')).toHaveLength(2)
    container.querySelectorAll('form').forEach((form) => {
      expect(form).toHaveAttribute('hidden')
      expect(within(form as HTMLElement).getByRole('button', { name: 'Post', hidden: true }))
    })
    expect(container.querySelectorAll('button')).toHaveLength(10)
    expect(container.querySelectorAll('svg')).toHaveLength(9)
    expect(screen.getAllByRole('img')).toHaveLength(1)
  })

  it('links Component Dock in the footer instead of any attribution', () => {
    render(<App />)

    const footer = screen.getByRole('link', { name: 'Component Dock' })
    expect(footer).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/More templates at/)).toBeInTheDocument()
  })
})

describe('App — one live region', () => {
  it('starts empty and takes no space', () => {
    render(<App />)

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent('')
    expect(status.className).toContain('opacity-0')
    expect(status.className).toContain('p-0')
    expect(status.className).toContain('pointer-events-none')
  })

  it('announces a posted comment and clears itself after 2,600 ms', async () => {
    const user = userEvent.setup()
    render(<App />)

    const first = screen.getAllByRole('article')[0] as HTMLElement
    await user.click(within(first).getByRole('button', { name: 'Comment' }))
    await user.type(within(first).getByLabelText('Write a comment'), 'Same time next week!')
    await user.click(within(first).getByRole('button', { name: 'Post' }))

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent('Comment posted.')
    expect(status.className).toContain('opacity-100')

    await new Promise((resolve) => {
      setTimeout(resolve, 2700)
    })

    expect(screen.getByRole('status')).toHaveTextContent('')
  })
})

describe('App — data', () => {
  it('renders both posts from the shared feed data', () => {
    render(<App />)

    for (const post of POSTS) {
      expect(screen.getByRole('heading', { level: 2, name: new RegExp(post.name) })).toBeInTheDocument()
    }
  })
})

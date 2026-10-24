import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { creditLabel, heroSlides, posts, siteName, skipLabel } from './data'

describe('App', () => {
  it('composes the header, hero, blog list, sidebar, instagram strip and footer', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: heroSlides[0]!.headline }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(
      posts.length + 4,
    )
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('exposes a skip link to the main region', () => {
    render(<App />)
    const skip = screen.getByRole('link', { name: skipLabel })
    expect(skip).toHaveAttribute('href', '#main')
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main')
  })

  it('provides one page level heading that names the template', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(siteName)
    expect(heading).toHaveClass('sr-only')
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toContain(siteName)
  })

  it('keeps the Component Dock credit in the footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: creditLabel })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})

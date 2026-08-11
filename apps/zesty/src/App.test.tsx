import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'
import {
  categoriesLabel,
  documentTitle,
  featuredLabel,
  featuredTitle,
  pageTopLabel,
  pageTopLarge,
  skipLabel,
  subscribeHeading,
  topRecipesLabel,
  topRecipesTitle,
} from './data'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe(documentTitle)
  })

  it('composes the header, main sections and footer landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: skipLabel })).toHaveAttribute('href', '#main')
  })

  it('renders all sections in the reference order', () => {
    render(<App />)
    const regions = screen.getAllByRole('region').map((region) => region.getAttribute('aria-label'))
    expect(regions).toEqual([pageTopLabel, topRecipesLabel, categoriesLabel, featuredLabel])
  })

  it('renders key content from every section', () => {
    render(<App />)
    expect(screen.getAllByRole('heading', { level: 3, name: pageTopLarge.title })).toHaveLength(1)
    expect(screen.getAllByRole('heading', { level: 5, name: topRecipesTitle })).toHaveLength(1)
    expect(screen.getAllByRole('heading', { level: 5, name: featuredTitle })).toHaveLength(1)
    expect(screen.getAllByRole('heading', { level: 3, name: subscribeHeading })).toHaveLength(1)
    expect(screen.getByRole('main').querySelectorAll('img')).toHaveLength(17)
  })
})

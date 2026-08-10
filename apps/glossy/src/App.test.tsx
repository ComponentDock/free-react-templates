import { afterEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import {
  editorsPickTitle,
  fashionNewsTitle,
  featuredLarge,
  siteName,
  travelNewsTitle,
} from './data'

describe('App', () => {
  afterEach(() => {
    document.documentElement.classList.remove('dark')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Glossy — Megazine Template')
  })

  it('composes all sections in landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Featured posts' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: editorsPickTitle })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: travelNewsTitle })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: fashionNewsTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: featuredLarge.title })).toBeInTheDocument()
  })

  it('renders the header cluster: logo, nav, dark toggle', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(screen.getAllByRole('link', { name: siteName }).length).toBeGreaterThan(0)
    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })
})

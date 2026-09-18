import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the Our Blog heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Our Blog' })).toBeInTheDocument()
  })

  it('renders four blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText('When she reached the first')).toBeInTheDocument()
    expect(screen.getByText('Duden flows by their place')).toBeInTheDocument()
    expect(screen.getByText('Italic Mountains')).toBeInTheDocument()
    expect(screen.getByText('Behind the word mountains')).toBeInTheDocument()
  })

  it('renders dates for each post', () => {
    render(<Blog />)
    expect(screen.getByText(/June 18, 2020/)).toBeInTheDocument()
    expect(screen.getByText(/July 17, 2020/)).toBeInTheDocument()
    expect(screen.getByText(/March 18, 2020/)).toBeInTheDocument()
    expect(screen.getByText(/March 22, 2020/)).toBeInTheDocument()
  })

  it('renders four blog card links', () => {
    render(<Blog />)
    const links = document.querySelectorAll('a[href="#"]')
    expect(links.length).toBeGreaterThanOrEqual(4)
  })

  it('has blog section id', () => {
    render(<Blog />)
    expect(document.getElementById('blog')).toBeInTheDocument()
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders five fixed-header table variant blocks', () => {
    render(<App />)
    const regions = screen.getAllByRole('region')
    expect(regions).toHaveLength(5)
    for (const id of ['ver1', 'ver2', 'ver3', 'ver4', 'ver5']) {
      expect(screen.getByRole('region', { name: id })).toBeInTheDocument()
    }
  })

  it('renders a white full-viewport shell', () => {
    const { container } = render(<App />)
    const shell = container.firstElementChild
    expect(shell).toHaveClass('min-h-screen', 'bg-surface', 'font-sans')
  })

  it('flex-centers the content with the source padding', () => {
    render(<App />)
    const main = screen.getByRole('main')
    expect(main).toHaveClass(
      'min-h-screen',
      'flex',
      'items-center',
      'justify-center',
      'px-[30px]',
      'py-[33px]',
    )
  })

  it('centers a 1170px content column inside a 1366px limiter', () => {
    render(<App />)
    const limiter = screen.getByRole('main').firstElementChild as HTMLElement
    expect(limiter).toHaveClass('max-w-[1366px]', 'mx-auto')
    const wrap = limiter.firstElementChild as HTMLElement
    expect(wrap).toHaveClass('max-w-[1170px]', 'w-full')
  })

  it('renders the Component Dock footer', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Headlock — Fixed Header Table Template')
  })
})

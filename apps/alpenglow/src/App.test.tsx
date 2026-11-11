import { fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { CHAPTERS, HEADLINE, NAV_LINKS, TOP_ID } from './data/site'
import { App } from './App'
import { removeDialogMethods, stubDialogMethods } from './test/dialog'

describe('App', () => {
  it('renders one shell, one hero section, one page title and the branded footer', () => {
    const { container } = render(<App />)

    const shell = container.querySelector('.ap-shell')
    expect(shell).toHaveAttribute('id', TOP_ID)
    expect(container.querySelectorAll('header')).toHaveLength(1)
    expect(container.querySelectorAll('main')).toHaveLength(1)
    expect(container.querySelectorAll('section')).toHaveLength(1)
    expect(container.querySelectorAll('footer')).toHaveLength(1)
    expect(container.querySelectorAll('h1')).toHaveLength(1)
    expect(container.querySelectorAll('h2')).toHaveLength(1)
    expect(container.querySelectorAll('img, form, input')).toHaveLength(0)
  })

  it('puts the scene first and keeps it out of the accessibility tree', () => {
    const { container } = render(<App />)

    const shell = container.querySelector('.ap-shell')!
    const scene = shell.firstElementChild as HTMLElement

    expect(scene).toHaveClass('ap-scene')
    expect(scene).toHaveAttribute('aria-hidden', 'true')
    expect(scene.children).toHaveLength(7)
  })

  it('labels the hero section with the only h1 and lists the chapters', () => {
    render(<App />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(HEADLINE)
    expect(screen.getByRole('region')).toHaveAttribute('aria-labelledby', heading.id)
    const chapters = screen.getByRole('list', { name: 'Film chapters' })
    expect(within(chapters).getAllByRole('listitem')).toHaveLength(CHAPTERS.length)
  })

  it('ships no dead anchors and every link resolves', () => {
    const { container } = render(<App />)

    const anchors = Array.from(container.querySelectorAll('a'))
    // wordmark + the four nav links + the shop pill + the footer link.
    expect(anchors).toHaveLength(1 + NAV_LINKS.length + 1 + 1)
    expect(container.querySelectorAll('a[href="#"]')).toHaveLength(0)

    for (const anchor of anchors) {
      const href = anchor.getAttribute('href')
      expect(href).toBeTruthy()
      expect(href).not.toBe('#')
    }
  })

  it('points its footer at the marketplace', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  describe('with a dialog-capable browser', () => {
    beforeEach(() => {
      stubDialogMethods()
    })

    afterEach(() => {
      removeDialogMethods()
    })

    it('pauses the scene while the film is open and releases it on close', () => {
      const { container } = render(<App />)
      const shell = container.querySelector('.ap-shell')!

      fireEvent.click(screen.getByRole('button', { name: /Watch the film/ }))
      expect(shell).toHaveClass('is-paused')

      fireEvent.click(screen.getByRole('button', { name: 'Close video', hidden: true }))
      expect(shell).not.toHaveClass('is-paused')
    })
  })
})

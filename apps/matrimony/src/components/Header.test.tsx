import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'
import { NAV, isNavParent } from '../lib/site'

const blogTrigger = () => screen.getByRole('button', { name: 'Blog' })
const blogItem = () => {
  const item = blogTrigger().closest('li')

  if (!item) {
    throw new Error('the Blog entry should sit in its own list item')
  }

  return item
}

describe('Header', () => {
  it('is the design white bar with the wordmark and the six labels', () => {
    render(<Header />)

    const header = screen.getByRole('banner')

    expect(header).toHaveClass('sticky', 'bg-white', 'shadow-header')
    expect(screen.getByRole('link', { name: 'Matrimony — home' })).toHaveAttribute('href', '#home')

    const nav = screen.getByRole('navigation', { name: 'Primary' })

    expect(within(nav).getAllByRole('link').map((link) => link.textContent)).toEqual([
      'Home',
      'About',
      'Gallery',
      'Guestbook',
      'Contact Us',
    ])
    expect(within(nav).getByRole('link', { name: 'Contact Us' })).toHaveAttribute('href', '#contact')
    expect(within(nav).getByRole('button', { name: 'Blog' })).toHaveClass('py-[39px]', 'text-nav')
  })

  it('keeps the submenu shut until it is asked for', () => {
    render(<Header />)

    expect(blogTrigger()).toHaveAttribute('aria-expanded', 'false')
    expect(blogTrigger()).toHaveAttribute('aria-controls', 'blog-menu')
    expect(document.getElementById('blog-menu')).toBeNull()
    expect(screen.queryByRole('link', { name: 'Blog Details' })).toBeNull()
  })

  it('opens the submenu on click and closes it when a row is chosen', () => {
    render(<Header />)

    fireEvent.click(blogTrigger())

    expect(blogTrigger()).toHaveAttribute('aria-expanded', 'true')

    const menu = document.getElementById('blog-menu')

    expect(menu).not.toBeNull()
    expect(within(menu as HTMLElement).getAllByRole('link')).toHaveLength(3)
    expect(within(menu as HTMLElement).getByRole('link', { name: 'Element' })).toHaveAttribute(
      'href',
      '#rsvp',
    )

    fireEvent.click(within(menu as HTMLElement).getByRole('link', { name: 'Blog Details' }))

    expect(blogTrigger()).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens on hover and closes when the pointer leaves the entry', () => {
    render(<Header />)

    fireEvent.mouseOver(blogItem(), { relatedTarget: document.body })

    expect(blogTrigger()).toHaveAttribute('aria-expanded', 'true')

    fireEvent.mouseOut(blogItem(), { relatedTarget: document.body })

    expect(blogTrigger()).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes on Escape while it is open and ignores every other key', () => {
    render(<Header />)

    fireEvent.click(blogTrigger())
    fireEvent.keyDown(document, { key: 'ArrowDown' })

    expect(blogTrigger()).toHaveAttribute('aria-expanded', 'true')

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(blogTrigger()).toHaveAttribute('aria-expanded', 'false')
  })

  it('folds the labels behind the toggle below the design turn-over', () => {
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Open the menu' })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('folded-menu')).toBeNull()

    fireEvent.click(toggle)

    const panel = document.getElementById('folded-menu')

    expect(screen.getByRole('button', { name: 'Close the menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(within(panel as HTMLElement).getAllByRole('link')).toHaveLength(5 + blogChildren())
  })

  it('closes the folded panel on Escape and on a label', () => {
    render(<Header />)

    fireEvent.click(screen.getByRole('button', { name: 'Open the menu' }))
    fireEvent.keyDown(document, { key: 'Tab' })

    expect(document.getElementById('folded-menu')).not.toBeNull()

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(document.getElementById('folded-menu')).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'Open the menu' }))

    const panel = document.getElementById('folded-menu') as HTMLElement

    fireEvent.click(within(panel).getByRole('link', { name: 'Guestbook' }))

    expect(document.getElementById('folded-menu')).toBeNull()
  })

  it('carries a submenu only on the entry that has children', () => {
    expect(NAV.filter(isNavParent).map((item) => item.label)).toEqual(['Blog'])
  })
})

function blogChildren(): number {
  const parent = NAV.filter(isNavParent).find((item) => item.label === 'Blog')

  if (!parent) {
    throw new Error('the Blog entry carries the submenu')
  }

  return parent.children.length
}

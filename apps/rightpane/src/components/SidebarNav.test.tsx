import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SidebarNav } from './SidebarNav'
import { Home, User, FileText, Settings, Send } from 'lucide-react'

const items = [
  { icon: Home, label: 'Home' },
  { icon: User, label: 'About' },
  { icon: FileText, label: 'Blog' },
  { icon: Settings, label: 'Services' },
  { icon: Send, label: 'Contacts' },
]

describe('SidebarNav', () => {
  it('renders all navigation items', () => {
    render(<SidebarNav items={items} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Contacts')).toBeInTheDocument()
  })

  it('renders correct number of items', () => {
    render(<SidebarNav items={items} />)
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(5)
  })

  it('each item has an anchor link', () => {
    render(<SidebarNav items={items} />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(5)
    expect(links[0]).toHaveAttribute('href', '#home')
    expect(links[1]).toHaveAttribute('href', '#about')
    expect(links[2]).toHaveAttribute('href', '#blog')
    expect(links[3]).toHaveAttribute('href', '#services')
    expect(links[4]).toHaveAttribute('href', '#contacts')
  })

  it('has accessible navigation label', () => {
    render(<SidebarNav items={items} />)
    expect(screen.getByLabelText('Sidebar navigation')).toBeInTheDocument()
  })
})

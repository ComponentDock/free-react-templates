import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes every Taply section in the preview order', () => {
    render(<App />)

    // Navbar + hero
    expect(screen.getByRole('link', { name: 'Taply' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Mobile App Landing Page Template',
    )

    // Body sections in DOM order (headings are unique per section)
    const headings = screen.getAllByRole('heading')
    const order = headings.map((h) => h.textContent)
    expect(order).toEqual([
      'Mobile App Landing Page Template',
      'Features you love',
      'Simple',
      'Customize',
      'Secure',
      'Discover our App',
      'Do more with our app',
      'Communication',
      'Scheduling',
      'Messages',
      'Live Chat',
      'Communicate with ease',
      'Scheduling when you want',
      'Realtime Messaging service',
      'Live chat when you needed',
      'Launch your App',
      'Create an Account',
      'Share with friends',
      'Enjoy your life',
      'What our Customers Says',
      'Crystal Gordon',
      'App Screenshots',
      'Upgrade to Pro',
      'PERSONAL',
      'FOR TEAMS',
      'ENTERPRISE',
      'Frequently Asked Questions',
      'Can I try before I buy?',
      'What payment methods do you accept?',
      'Can I change my plan later?',
      'Do you have a contract?',
      'Download Anywhere',
    ])

    // Footer
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})

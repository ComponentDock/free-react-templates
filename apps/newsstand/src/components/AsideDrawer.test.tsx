import { describe, expect, it, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AsideDrawer } from './AsideDrawer'
import {
  asideCloseLabel,
  drawerLabel,
  drawerPosts,
  followLabel,
  navLinks,
  recentHeading,
  socialLabel,
  socialLinks,
} from '../data'

describe('AsideDrawer', () => {
  it('renders the stacked nav links, recent posts widget and follow-us socials', () => {
    render(<AsideDrawer open onClose={() => {}} />)
    const dialog = screen.getByRole('dialog', { name: drawerLabel })
    for (const link of navLinks) {
      expect(within(dialog).getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    expect(within(dialog).getByRole('heading', { name: recentHeading })).toBeInTheDocument()
    expect(within(dialog).getByRole('link', { name: drawerPosts[0]!.title })).toBeInTheDocument()
    expect(within(dialog).getByRole('heading', { name: followLabel })).toBeInTheDocument()
    const socials = within(dialog).getByRole('list', { name: socialLabel })
    for (const social of socialLinks) {
      expect(within(socials).getByRole('link', { name: social.label })).toBeInTheDocument()
    }
  })

  it('calls onClose via the close control', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<AsideDrawer open onClose={onClose} />)
    await user.click(screen.getByRole('button', { name: asideCloseLabel }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('renders nothing when closed', () => {
    render(<AsideDrawer open={false} onClose={() => {}} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})

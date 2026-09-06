import { render, screen } from '@testing-library/react'
import { NotificationItem } from './NotificationItem'

describe('NotificationItem', () => {
  it('renders the name and description', () => {
    render(
      <ul>
        <NotificationItem
          name="John Doe"
          description="marked the task done"
          avatarUrl="https://picsum.photos/40/40?random=1"
          unread={false}
        />
      </ul>,
    )
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('marked the task done')).toBeInTheDocument()
  })

  it('applies unread styling when unread is true', () => {
    const { container } = render(
      <ul>
        <NotificationItem
          name="John Doe"
          description="marked the task done"
          avatarUrl="https://picsum.photos/40/40?random=1"
          unread={true}
        />
      </ul>,
    )
    const li = container.querySelector('li')
    expect(li?.className).toContain('bg-[#fffaef]')
  })

  it('does not apply unread styling when unread is false', () => {
    const { container } = render(
      <ul>
        <NotificationItem
          name="John Doe"
          description="marked the task done"
          avatarUrl="https://picsum.photos/40/40?random=1"
          unread={false}
        />
      </ul>,
    )
    const li = container.querySelector('li')
    expect(li?.className).not.toContain('bg-[#fffaef]')
  })

  it('renders the avatar image', () => {
    render(
      <ul>
        <NotificationItem
          name="John Doe"
          description="marked the task done"
          avatarUrl="https://picsum.photos/40/40?random=1"
          unread={false}
        />
      </ul>,
    )
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', 'https://picsum.photos/40/40?random=1')
  })
})

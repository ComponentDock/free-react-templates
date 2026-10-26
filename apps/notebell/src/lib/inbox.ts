import { MESSAGES, type Notification } from '../data'

/** The one-slot undo memory: the archived card and the index it goes back to. */
export interface ArchivedSlot {
  item: Notification
  index: number
}

export interface InboxState {
  /** Every notification still in the panel, including one mid-leave. */
  items: Notification[]
  /** Ids playing the 250 ms leave animation. */
  leaving: string[]
  /** The status line's current sentence ('' at rest). */
  message: string
  undo: ArchivedSlot | null
}

export type InboxAction =
  | { type: 'toggle'; id: string }
  | { type: 'allRead' }
  | { type: 'beginArchive'; id: string }
  | { type: 'commitArchive'; id: string }
  | { type: 'undo' }

export const initialInbox = (items: Notification[]): InboxState => ({
  items,
  leaving: [],
  message: '',
  undo: null,
})

/** The counter reads the cards, not a stored number. */
export const unreadCount = (state: InboxState): number =>
  state.items.filter((item) => !item.read).length

/**
 * The inbox state machine. `beginArchive` and `commitArchive` are two actions
 * because the leave animation sits between them: the card stays in the list (and
 * in the counter) while it fades, exactly as the reference's DOM keeps it.
 */
export function inboxReducer(state: InboxState, action: InboxAction): InboxState {
  switch (action.type) {
    case 'toggle': {
      const target = state.items.find((item) => item.id === action.id)
      if (!target) return state
      const read = !target.read
      return {
        ...state,
        items: state.items.map((item) => (item.id === action.id ? { ...item, read } : item)),
        message: read ? MESSAGES.read : MESSAGES.unread,
        undo: null,
      }
    }

    case 'allRead':
      return {
        ...state,
        items: state.items.map((item) => ({ ...item, read: true })),
        message: MESSAGES.allRead,
        undo: null,
      }

    case 'beginArchive':
      return { ...state, leaving: [...state.leaving, action.id] }

    case 'commitArchive': {
      const index = state.items.findIndex((item) => item.id === action.id)
      const leaving = state.leaving.filter((id) => id !== action.id)
      if (index === -1) return { ...state, leaving }
      const item = state.items[index]!
      return {
        items: state.items.filter((_, at) => at !== index),
        leaving,
        message: MESSAGES.archived,
        undo: { item, index },
      }
    }

    case 'undo': {
      if (!state.undo) return state
      const { item, index } = state.undo
      return {
        ...state,
        items: [...state.items.slice(0, index), item, ...state.items.slice(index)],
        message: MESSAGES.restored,
        undo: null,
      }
    }
  }
}

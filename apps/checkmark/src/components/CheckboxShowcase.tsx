import { CustomCheckbox } from './CustomCheckbox'

const sections = [
  {
    title: 'Profile Settings',
    items: [
      {
        label: 'Enable two-factor authentication',
        variant: 'violet' as const,
        defaultChecked: false,
      },
      { label: 'Show online status', variant: 'emerald' as const, defaultChecked: false },
      { label: 'Allow friend requests', variant: 'sky' as const, defaultChecked: false },
    ],
  },
  {
    title: 'Notifications',
    items: [
      { label: 'Email notifications', variant: 'rose' as const, defaultChecked: true },
      { label: 'Push notifications', variant: 'amber' as const, defaultChecked: false },
      { label: 'Weekly digest', variant: 'violet' as const, defaultChecked: false },
    ],
  },
  {
    title: 'Privacy',
    items: [
      {
        label: 'Profile visible to search engines',
        variant: 'emerald' as const,
        defaultChecked: false,
      },
      { label: 'Share activity with friends', variant: 'sky' as const, defaultChecked: true },
      { label: 'Show read receipts', variant: 'rose' as const, defaultChecked: false },
    ],
  },
]

export function CheckboxShowcase() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="mb-2 text-3xl font-bold text-gray-800 dark:text-white">Checkbox #07</h1>
        <p className="mb-12 text-sm text-gray-500 dark:text-gray-400">
          Custom styled checkboxes with color variants
        </p>

        <div className="space-y-10 text-left">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                {section.title}
              </h2>
              <div className="flex flex-col gap-2">
                {section.items.map((item) => (
                  <CustomCheckbox
                    key={item.label}
                    label={item.label}
                    variant={item.variant}
                    defaultChecked={item.defaultChecked}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

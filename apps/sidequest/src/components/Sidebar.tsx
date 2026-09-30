import ProgressBar from './ProgressBar'
import StepItem from './StepItem'
import UserProfile from './UserProfile'

const steps = [
  {
    title: 'Create organization',
    description: 'Tempore tempora neque voluptas dolores repellendus repellat odit.',
    completed: true,
  },
  {
    title: 'Create project',
    description: 'Tempore tempora neque voluptas dolores repellendus repellat odit.',
    completed: true,
  },
  {
    title: 'Create organization',
    description: 'Tempore tempora neque voluptas dolores repellendus repellat odit.',
    completed: false,
  },
  {
    title: 'Add time',
    description: 'Tempore tempora neque voluptas dolores repellendus repellat odit.',
    completed: false,
  },
  {
    title: 'Download and test',
    description: 'Tempore tempora neque voluptas dolores repellendus repellat odit.',
    completed: false,
  },
  {
    title: 'Invite group',
    description: 'Tempore tempora neque voluptas dolores repellendus repellat odit.',
    completed: false,
  },
  {
    title: 'Set pay rate',
    description: 'Tempore tempora neque voluptas dolores repellendus repellat odit.',
    completed: false,
  },
]

export default function Sidebar() {
  return (
    <aside className="bg-sidebar-bg w-full md:w-[340px] min-h-screen flex flex-col p-6">
      <h2 className="text-text-dark text-xs font-bold uppercase tracking-wider mb-3">
        Get Started
      </h2>
      <ProgressBar percentage={25} />
      <div className="mt-5 flex-1">
        {steps.map((step, i) => (
          <StepItem
            key={i}
            title={step.title}
            description={step.description}
            completed={step.completed}
          />
        ))}
      </div>
      <UserProfile name="Dan Smith" avatarSeed="sq-user-dan" />
    </aside>
  )
}

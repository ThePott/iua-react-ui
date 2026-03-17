import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/local-auto-complete/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/local-auto-complete/"!</div>
}

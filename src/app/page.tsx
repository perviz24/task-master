export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold tracking-tight">Task Master</h1>
        <div className="space-y-6">
          {/* Task form will go here */}
          <div className="rounded-lg border bg-card p-4">
            <p className="text-muted-foreground">Task form placeholder</p>
          </div>

          {/* Filter tabs will go here */}
          <div className="rounded-lg border bg-card p-4">
            <p className="text-muted-foreground">Filter tabs placeholder</p>
          </div>

          {/* Task list will go here */}
          <div className="rounded-lg border bg-card p-4">
            <p className="text-muted-foreground">Task list placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

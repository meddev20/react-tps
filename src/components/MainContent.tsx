interface Task { id: string; title: string; }
interface Column { id: string; title: string; tasks: Task[]; }
interface MainContentProps { columns: Column[]; }

export default function MainContent({ columns }: MainContentProps) {
  return (
    <main style={{ flex: 1, padding: '2rem', overflow: 'auto', background: '#fafafa' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {columns.map(col => (
          <div key={col.id} style={{ background: '#fff', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h3 style={{ marginTop: 0, marginBottom: '1rem', color: '#333' }}>{col.title}</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {col.tasks && col.tasks.map((task: any) => (
                <li key={task.id} style={{ padding: '0.75rem', marginBottom: '0.5rem', background: '#f9f9f9', borderRadius: '4px', borderLeft: '3px solid #007bff' }}>
                  {typeof task === 'string' ? task : task.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}

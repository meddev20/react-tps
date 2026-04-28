import AddProjectForm from './AddProjectForm';
import { deleteProject, renameProject } from '../actions/projects';
export default async function DashboardPage() {
    const API_URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:4000';
    const res = await fetch(`${API_URL}/api/projects`, { cache: 'no-store' });
    const projects = await res.json();
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Dashboard</h1>
            <AddProjectForm />
            <ul>
                {projects.map((p: any) => (
                    <li key={p.id} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                        <span style={{
                            width: 12, height: 12, borderRadius: '50%', background: p.color, display:
                                'inline-block'
                        }} />
                        <a href={`/projects/${p.id}`}>{p.name}</a>
                        <form action={deleteProject} style={{ display: 'inline' }}>
                            <input type="hidden" name="id" value={p.id} />
                            <button type="submit" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                🗑️
                            </button>
                        </form>
                        <form action={renameProject} style={{ display: 'inline' }}>
                            <input type="hidden" name="id" value={p.id} />
                            <input type="text" name="newName" placeholder="Nouveau nom" required
                                style={{ padding: 4, borderRadius: 4, border: '1px solid #ccc' }} />
                            <button type="submit" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                ✏️
                            </button>
                        </form>
                    </li>
                ))}
            </ul>
        </div>
    );
}
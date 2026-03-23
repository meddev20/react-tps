import styles from './MainContent.module.css';

interface Column {
  id: string;
  title: string;
  tasks: string[];
}

interface MainContentProps {
  columns: Column[];
}

export default function MainContent({ columns }: MainContentProps) {
  return (
    <main className={styles.container}>
      {columns.length === 0 ? (
        <div className={styles.empty}>Pas de colonnes disponibles</div>
      ) : (
        <div className={styles.columns}>
          {columns.map(col => (
            <div key={col.id} className={styles.column}>
              <h3 className={styles.colTitle}>{col.title}</h3>
              <ul className={styles.tasks}>
                {col.tasks.map((task, idx) => (
                  <li key={idx} className={styles.task}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
export default function Tasks() {
    const tasks = [
        { id: 1, name: 'Task 1', status: 'Pending', created_at: '2021-09-01 10:00:00' },
        { id: 2, name: 'Task 2', status: 'Done', created_at: '2021-09-02 10:00:00' },
        { id: 3, name: 'Task 3', status: 'Pending', created_at: '2021-09-03 10:00:00' },
    ];
    return (
        <main>
            <div className="container">
                <h3>Tasks</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Status</th>
                            <th>Created AT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => (
                            <tr key={task.id}>
                                <td>{task.name}</td>
                                <td>{task.status}</td>
                                {/* <td>{ task.status ? "Done": "Pending" }</td> */}
                                <td>{task.created_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
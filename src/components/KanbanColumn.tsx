import React from 'react'
import { Task } from '../types'
import TaskCard from './TaskCard'

interface KanbanColumnProps {
  title: string
  tasks: Task[]
  status: Task['status']
  onMoveTask: (taskId: string, newStatus: Task['status']) => void
  onUpdateTask: (id: string, updates: Partial<Task>) => void
  onDeleteTask: (id: string) => void
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({
  title,
  tasks,
  status,
  onMoveTask,
  onUpdateTask,
  onDeleteTask
}) => {
  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'todo':
        return 'bg-color-warning'
      case 'in-progress':
        return 'bg-color-primary'
      case 'done':
        return 'bg-color-success'
      default:
        return 'bg-color-secondary'
    }
  }

  return (
    <div className="bg-bg-secondary rounded-lg p-4 min-h-[500px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-text-primary">{title}</h3>
        <div className={`w-3 h-3 rounded-full ${getStatusColor(status)}`}></div>
      </div>
      
      <div className="space-y-3">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onMoveTask={onMoveTask}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
        
        {tasks.length === 0 && (
          <div className="text-center py-8 text-text-muted">
            <p>No hay tareas</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default KanbanColumn 
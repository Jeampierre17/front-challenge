import React, { useState } from 'react'
import { Task } from '../types'

interface TaskCardProps {
  task: Task
  onMoveTask: (taskId: string, newStatus: Task['status']) => void
  onUpdateTask: (id: string, updates: Partial<Task>) => void
  onDeleteTask: (id: string) => void
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onMoveTask,
  onUpdateTask,
  onDeleteTask
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(task.title)
  const [editDescription, setEditDescription] = useState(task.description)

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-color-danger'
      case 'medium':
        return 'bg-color-warning'
      case 'low':
        return 'bg-color-success'
      default:
        return 'bg-color-secondary'
    }
  }

  const getPriorityLabel = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'Alta'
      case 'medium':
        return 'Media'
      case 'low':
        return 'Baja'
      default:
        return priority
    }
  }

  const handleSave = () => {
    onUpdateTask(task.id, {
      title: editTitle,
      description: editDescription
    })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditTitle(task.title)
    setEditDescription(task.description)
    setIsEditing(false)
  }

  const handleMove = (newStatus: Task['status']) => {
    if (newStatus !== task.status) {
      onMoveTask(task.id, newStatus)
    }
  }

  return (
    <div className="bg-bg-primary rounded-lg p-4 shadow-sm border border-border-color hover:shadow-md transition-shadow">
      {isEditing ? (
        <div className="space-y-3">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full px-3 py-2 border border-border-color rounded-md bg-bg-secondary text-text-primary focus:outline-none focus:ring-2 focus:ring-color-primary"
            placeholder="Título de la tarea"
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="w-full px-3 py-2 border border-border-color rounded-md bg-bg-secondary text-text-primary focus:outline-none focus:ring-2 focus:ring-color-primary resize-none"
            rows={3}
            placeholder="Descripción de la tarea"
          />
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="btn btn-primary flex-1"
            >
              Guardar
            </button>
            <button
              onClick={handleCancel}
              className="btn flex-1"
            >
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <h4 className="font-medium text-text-primary line-clamp-2">
              {task.title}
            </h4>
            <div className="flex gap-1">
              <button
                onClick={() => setIsEditing(true)}
                className="text-text-secondary hover:text-text-primary"
                aria-label="Editar tarea"
              >
                ✏️
              </button>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="text-color-danger hover:opacity-80"
                aria-label="Eliminar tarea"
              >
                🗑️
              </button>
            </div>
          </div>
          
          <p className="text-sm text-text-secondary line-clamp-3">
            {task.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className={`px-2 py-1 text-xs text-white rounded-full ${getPriorityColor(task.priority)}`}>
              {getPriorityLabel(task.priority)}
            </span>
            
            <select
              value={task.status}
              onChange={(e) => handleMove(e.target.value as Task['status'])}
              className="text-xs px-2 py-1 border border-border-color rounded bg-bg-secondary text-text-primary focus:outline-none focus:ring-1 focus:ring-color-primary"
            >
              <option value="todo">Por Hacer</option>
              <option value="in-progress">En Progreso</option>
              <option value="done">Completado</option>
            </select>
          </div>
          
          <div className="text-xs text-text-muted">
            Creada: {task.createdAt.toLocaleDateString()}
          </div>
        </div>
      )}
    </div>
  )
}

export default TaskCard 
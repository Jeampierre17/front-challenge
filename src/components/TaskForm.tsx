import React, { useState } from 'react'
import { Task } from '../types'

interface TaskFormProps {
  onSubmit: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void
  onCancel: () => void
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState<Task['priority']>('medium')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!title.trim()) {
      alert('El título es requerido')
      return
    }

    onSubmit({
      title: title.trim(),
      description: description.trim(),
      priority,
      status: 'todo'
    })

    // Reset form
    setTitle('')
    setDescription('')
    setPriority('medium')
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-bg-primary rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-text-primary mb-4">
          Nueva Tarea
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-text-secondary mb-2">
              Título *
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-border-color rounded-md bg-bg-secondary text-text-primary focus:outline-none focus:ring-2 focus:ring-color-primary focus:border-transparent"
              placeholder="Título de la tarea"
              required
            />
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-text-secondary mb-2">
              Descripción
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-border-color rounded-md bg-bg-secondary text-text-primary focus:outline-none focus:ring-2 focus:ring-color-primary focus:border-transparent resize-none"
              rows={3}
              placeholder="Descripción de la tarea"
            />
          </div>
          
          <div>
            <label htmlFor="priority" className="block text-sm font-medium text-text-secondary mb-2">
              Prioridad
            </label>
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value as Task['priority'])}
              className="w-full px-3 py-2 border border-border-color rounded-md bg-bg-secondary text-text-primary focus:outline-none focus:ring-2 focus:ring-color-primary focus:border-transparent"
            >
              <option value="low">Baja</option>
              <option value="medium">Media</option>
              <option value="high">Alta</option>
            </select>
          </div>
          
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="btn btn-primary flex-1"
            >
              Crear Tarea
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="btn flex-1"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TaskForm 